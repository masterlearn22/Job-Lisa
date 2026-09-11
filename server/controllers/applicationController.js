const db = require('../config/db');
const { sendEmail } = require('../config/email');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Helper to ensure single scalar value even if duplicate fields exist
const getSingleValue = (val, fallback = '') => {
    if (Array.isArray(val)) return val[0] || fallback;
    return val || fallback;
};

// Helper to delete uploaded CV if database operation fails or when replaced
const cleanupFile = (filePath) => {
    if (!filePath) return;
    try {
        let targetPath = filePath;
        if (!path.isAbsolute(filePath)) {
            targetPath = path.join(__dirname, '..', filePath.replace(/^\/+/, ''));
        }
        if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath);
            console.log(`[Pembersihan CV] File berhasil dihapus dari server: ${targetPath}`);
        }
    } catch (err) {
        console.error('Gagal menghapus file CV:', err.message);
    }
};

// 1. Submit Application
const submitApplication = async (req, res) => {
    const name = getSingleValue(req.body.name || req.query.name);
    const email = getSingleValue(req.body.email || req.query.email);
    const phone = getSingleValue(req.body.phone || req.query.phone);
    const rawJobId = getSingleValue(req.body.job_id || req.query.job_id);
    const jobId = parseInt(rawJobId, 10) || 1;
    const confirmUpdate = getSingleValue(req.body.confirmUpdate || req.query.confirmUpdate) === 'true';
    const cvFile = req.file;

    if (!cvFile) {
        return res.status(400).json({ error: 'File CV wajib diunggah' });
    }

    try {
        // 1. Validasi keberadaan lowongan pekerjaan
        const [jobRows] = await db.query(
            `SELECT j.title, d.name as division_name 
             FROM jobs j 
             LEFT JOIN divisions d ON j.division_id = d.id 
             WHERE j.id = ?`, [jobId]
        );

        if (jobRows.length === 0) {
            cleanupFile(cvFile.path);
            return res.status(404).json({ error: 'Lowongan pekerjaan tidak ditemukan di database' });
        }

        const job = jobRows[0];

        // 2. Cek atau buat Profil Pelamar
        let [applicantRows] = await db.query('SELECT id FROM applicants WHERE email = ?', [email]);
        let applicantId;
        
        if (applicantRows.length > 0) {
            applicantId = applicantRows[0].id;

            // CEK APAKAH SUDAH PERNAH MENDAFTAR PADA POSISI INI
            const [existingApp] = await db.query(
                'SELECT id, tracking_id, cv_path, status FROM applications WHERE applicant_id = ? AND job_id = ?',
                [applicantId, jobId]
            );

            if (existingApp.length > 0) {
                // TAHAP VERIFIKASI 1: Belum ada konfirmasi untuk update
                if (!confirmUpdate) {
                    cleanupFile(cvFile.path); // Hapus CV yang baru saja terupload sementara
                    return res.status(409).json({ 
                        isDuplicate: true,
                        tracking_id: existingApp[0].tracking_id,
                        message: `Anda sudah pernah terdaftar pada posisi ini dengan ID Lacak: ${existingApp[0].tracking_id}. Apakah Anda ingin memperbarui data diri dan mengganti CV lama dengan berkas yang baru?` 
                    });
                }

                // TAHAP VERIFIKASI 2: Pelamar mengonfirmasi ingin memperbarui data (Update Data)
                // a. Hapus file CV lama dari folder server
                if (existingApp[0].cv_path) {
                    cleanupFile(existingApp[0].cv_path);
                }

                // b. Perbarui data diri pelamar
                await db.query('UPDATE applicants SET name = ?, phone = ? WHERE id = ?', [name, phone, applicantId]);

                // c. Perbarui berkas CV di lamaran yang sudah ada (TIDAK MEMBUAT LAMARAN BARU)
                const relativeCvPath = cvFile.path.split('uploads')[1].replace(/\\/g, '/');
                await db.query(
                    'UPDATE applications SET cv_path = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
                    [`/uploads${relativeCvPath}`, existingApp[0].id]
                );

                // d. Catat riwayat status update
                await db.query(
                    'INSERT INTO application_history (application_id, status, notes) VALUES (?, ?, ?)',
                    [existingApp[0].id, existingApp[0].status, 'Pelamar memperbarui data diri dan mengunggah berkas CV terbaru']
                );

                // e. Kirim email konfirmasi pembaruan berkas
                try {
                    await sendEmail(
                        email,
                        `Pembaruan Berkas Lamaran Berhasil - ${job.title}`,
                        `Halo ${name},\n\nBerkas lamaran dan CV Anda untuk posisi ${job.title} telah berhasil diperbarui.\n\nKode Lacak Anda tetap: ${existingApp[0].tracking_id}\n\nTerima kasih.`,
                        `<p>Halo ${name},</p><p>Berkas lamaran dan CV Anda untuk posisi <b>${job.title}</b> telah berhasil diperbarui.</p><p>Kode Lacak Anda tetap:</p><h3>${existingApp[0].tracking_id}</h3><p>Terima kasih.</p>`
                    );
                } catch (emailErr) {
                    console.error("Gagal kirim email pembaruan:", emailErr.message);
                }

                return res.status(200).json({
                    message: 'Data lamaran dan CV berhasil diperbarui',
                    tracking_id: existingApp[0].tracking_id,
                    isUpdated: true
                });
            }
        } else {
            const [insertResult] = await db.query(
                'INSERT INTO applicants (name, email, phone) VALUES (?, ?, ?)',
                [name, email, phone]
            );
            applicantId = insertResult.insertId;
        }

        // 3. Simpan Lamaran Baru
        const trackingId = 'APP-' + crypto.randomBytes(4).toString('hex').toUpperCase();
        const relativeCvPath = cvFile.path.split('uploads')[1].replace(/\\/g, '/'); // Normalize path for DB
        
        const [appResult] = await db.query(
            'INSERT INTO applications (tracking_id, applicant_id, job_id, cv_path, status) VALUES (?, ?, ?, ?, ?)',
            [trackingId, applicantId, jobId, `/uploads${relativeCvPath}`, 'Administrasi & Verifikasi Dokumen']
        );
        const applicationId = appResult.insertId;

        // 4. Catat Riwayat Status Awal
        await db.query(
            'INSERT INTO application_history (application_id, status, notes) VALUES (?, ?, ?)',
            [applicationId, 'Administrasi & Verifikasi Dokumen', 'Pendaftaran baru diterima, berkas dalam verifikasi']
        );

        // 5. Kirim Notifikasi Email (Non-blocking)
        try {
            await sendEmail(
                email,
                `Pendaftaran Berhasil - ${job.title}`,
                `Halo ${name},\n\nLamaran Anda untuk posisi ${job.title} (${job.division_name}) telah kami terima.\n\nAnda dapat melacak status lamaran Anda dengan Tracking ID berikut:\n\n${trackingId}\n\nTerima kasih.`,
                `<p>Halo ${name},</p><p>Lamaran Anda untuk posisi <b>${job.title}</b> (${job.division_name}) telah kami terima.</p><p>Anda dapat melacak status lamaran Anda dengan Tracking ID berikut:</p><h3>${trackingId}</h3><p>Terima kasih.</p>`
            );

            const adminEmail = process.env.SMTP_USER || 'admin@perusahaan.com';
            await sendEmail(
                adminEmail,
                `Lamaran Baru Masuk - ${job.title}`,
                `Terdapat lamaran baru masuk dari ${name} untuk posisi ${job.title}.\nSilakan cek sistem untuk mereview CV.`,
                `<p>Terdapat lamaran baru masuk dari <b>${name}</b> untuk posisi <b>${job.title}</b>.</p><p>Silakan cek sistem untuk mereview CV yang tersimpan di direktori divisi bersangkutan.</p>`
            );
        } catch (emailErr) {
            console.error("Gagal mengirim email, tapi data lamaran telah tersimpan di database:", emailErr.message);
        }

        res.status(201).json({
            message: 'Application submitted successfully',
            tracking_id: trackingId
        });

    } catch (error) {
        // PENCEGAHAN FILE SAMPAH: Hapus file CV jika ada kegagalan query database
        cleanupFile(cvFile.path);
        console.error('Error in submitApplication (CV dihapus):', error);
        res.status(500).json({ error: error.sqlMessage || error.message || 'Gagal menyimpan lamaran ke database' });
    }
};

// 2. Track Application
const trackApplication = async (req, res) => {
    const { tracking_id } = req.params;

    try {
        const [appRows] = await db.query(
            `SELECT a.id, a.tracking_id, a.status, a.created_at, 
                    j.title as job_title, d.name as division_name, 
                    ap.name as applicant_name
             FROM applications a
             JOIN jobs j ON a.job_id = j.id
             LEFT JOIN divisions d ON j.division_id = d.id
             JOIN applicants ap ON a.applicant_id = ap.id
             WHERE a.tracking_id = ?`,
            [tracking_id]
        );

        if (appRows.length === 0) {
            return res.status(404).json({ error: 'Tracking ID tidak ditemukan' });
        }

        const application = appRows[0];

        const [historyRows] = await db.query(
            `SELECT status, notes, created_at 
             FROM application_history 
             WHERE application_id = ? 
             ORDER BY created_at DESC`,
            [application.id]
        );

        res.json({
            application,
            history: historyRows
        });

    } catch (error) {
        console.error('Error in trackApplication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// 3. Update Application Status
const updateApplicationStatus = async (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body;
    // user_id should come from auth middleware usually, ignoring for now

    try {
        // 1. Get Application Details
        const [appRows] = await db.query(
            `SELECT a.*, ap.email, ap.name, j.title as job_title 
             FROM applications a
             JOIN applicants ap ON a.applicant_id = ap.id
             JOIN jobs j ON a.job_id = j.id
             WHERE a.id = ?`, [id]
        );

        if (appRows.length === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }

        const app = appRows[0];

        // 2. Update Application Status
        await db.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);

        // 3. Insert into History
        await db.query(
            'INSERT INTO application_history (application_id, status, notes) VALUES (?, ?, ?)',
            [id, status, notes || `Status diubah ke ${status}`]
        );

        // 4. Send Email Notification to Applicant
        let emailStatus = { sent: false, simulated: false };
        try {
            const mailInfo = await sendEmail(
                app.email,
                `Update Status Lamaran - ${app.job_title}`,
                `Halo ${app.name},\n\nStatus lamaran Anda untuk posisi ${app.job_title} telah diperbarui menjadi:\n\n**${status}**\n\nCatatan: ${notes || '-'}\n\nAnda selalu dapat mengeceknya menggunakan Tracking ID: ${app.tracking_id}\n\nTerima kasih.`,
                `<p>Halo ${app.name},</p><p>Status lamaran Anda untuk posisi <b>${app.job_title}</b> telah diperbarui menjadi:</p><h3>${status}</h3><p>Catatan: ${notes || '-'}</p><p>Terima kasih.</p>`
            );
            emailStatus = { 
                sent: !mailInfo?.simulated, 
                simulated: !!mailInfo?.simulated 
            };
        } catch (emailErr) {
            console.error("Gagal mengirim email status", emailErr.message);
            emailStatus = { sent: false, simulated: false, error: emailErr.message };
        }

        res.json({ 
            message: 'Status updated successfully', 
            new_status: status,
            emailStatus
        });

    } catch (error) {
        console.error('Error in updateApplicationStatus:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// 4. Get All Applications for Admin Dashboard
const getApplicationsAdmin = async (req, res) => {
    try {
        const { division, status, search } = req.query;

        let query = `
            SELECT 
                a.id, 
                a.tracking_id, 
                a.status, 
                a.cv_path, 
                a.created_at, 
                a.updated_at,
                ap.id as applicant_id,
                ap.name as applicant_name, 
                ap.email as applicant_email, 
                ap.phone as applicant_phone,
                j.id as job_id,
                j.title as job_title, 
                d.id as division_id,
                d.name as division_name
            FROM applications a
            JOIN applicants ap ON a.applicant_id = ap.id
            JOIN jobs j ON a.job_id = j.id
            LEFT JOIN divisions d ON j.division_id = d.id
            WHERE 1=1
        `;

        const params = [];

        if (division && division !== 'all') {
            query += ` AND (d.name = ? OR d.id = ?)`;
            params.push(division, division);
        }

        if (status && status !== 'all') {
            query += ` AND a.status = ?`;
            params.push(status);
        }

        if (search && search.trim() !== '') {
            query += ` AND (ap.name LIKE ? OR ap.email LIKE ? OR a.tracking_id LIKE ? OR j.title LIKE ?)`;
            const searchPattern = `%${search.trim()}%`;
            params.push(searchPattern, searchPattern, searchPattern, searchPattern);
        }

        query += ` ORDER BY a.updated_at DESC, a.created_at DESC`;

        const [rows] = await db.query(query, params);

        res.json(rows);
    } catch (error) {
        console.error('Error in getApplicationsAdmin:', error);
        res.status(500).json({ error: 'Gagal mengambil data lamaran' });
    }
};

// 5. Get Dashboard Metrics & Statistics
const getAdminStats = async (req, res) => {
    try {
        const [totalRows] = await db.query('SELECT COUNT(*) as total FROM applications');
        const [statusRows] = await db.query('SELECT status, COUNT(*) as count FROM applications GROUP BY status');
        const [divisionsRows] = await db.query('SELECT name, id FROM divisions');

        const stats = {
            total: totalRows[0]?.total || 0,
            administrasi: 0,
            wawancaraHR: 0,
            wawancaraUser: 0,
            psikotes: 0,
            offering: 0,
            onboarding: 0,
            ditolak: 0,
            divisions: divisionsRows || []
        };

        statusRows.forEach(row => {
            const s = row.status || '';
            if (s.includes('Administrasi') || s.includes('Review')) stats.administrasi += row.count;
            else if (s === 'Wawancara HR') stats.wawancaraHR += row.count;
            else if (s === 'Wawancara User') stats.wawancaraUser += row.count;
            else if (s === 'Psikotes') stats.psikotes += row.count;
            else if (s.includes('Offering')) stats.offering += row.count;
            else if (s.includes('Onboarding') || s === 'Diterima') stats.onboarding += row.count;
            else if (s.includes('Tolak') || s.includes('Gugur') || s.includes('Tidak Lolos')) stats.ditolak += row.count;
            else stats.administrasi += row.count;
        });

        res.json(stats);
    } catch (error) {
        console.error('Error in getAdminStats:', error);
        res.status(500).json({ error: 'Gagal mengambil statistik' });
    }
};

// 6. Admin Login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email dan password wajib diisi' });
    }

    try {
        // Cek akun khusus demo / default
        if (email.toLowerCase() === 'admin@perusahaan.com' && password === 'admin123') {
            return res.json({
                success: true,
                user: {
                    id: 1,
                    name: 'Super Admin HRD',
                    email: 'admin@perusahaan.com',
                    role: 'Admin'
                },
                token: 'mock-token-hrd-admin-secure'
            });
        }

        // Cek database users jika ada
        const [userRows] = await db.query('SELECT u.id, u.name, u.email, u.password, r.name as role_name FROM users u LEFT JOIN roles r ON u.role_id = r.id WHERE u.email = ?', [email]);
        
        if (userRows.length > 0) {
            const user = userRows[0];
            // Sederhana untuk demo login
            if (password === 'admin123' || password === user.password) {
                return res.json({
                    success: true,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role_name || 'HRD'
                    },
                    token: 'mock-token-hrd-admin-secure'
                });
            }
        }

        return res.status(401).json({ error: 'Email atau password salah' });
    } catch (error) {
        console.error('Error in adminLogin:', error);
        res.status(500).json({ error: 'Terjadi kesalahan sistem' });
    }
};

// 7. Hapus Lamaran (Admin)
const deleteApplicationAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query('SELECT cv_path FROM applications WHERE id = ?', [id]);
        if (rows.length > 0 && rows[0].cv_path) {
            cleanupFile(rows[0].cv_path);
        }

        await db.query('DELETE FROM applications WHERE id = ?', [id]);
        res.json({ message: 'Lamaran berhasil dihapus' });
    } catch (error) {
        console.error('Error in deleteApplicationAdmin:', error);
        res.status(500).json({ error: 'Gagal menghapus lamaran' });
    }
};

module.exports = {
    submitApplication,
    trackApplication,
    updateApplicationStatus,
    getApplicationsAdmin,
    getAdminStats,
    adminLogin,
    deleteApplicationAdmin
};
