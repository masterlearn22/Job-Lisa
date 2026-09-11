const db = require('../config/db');
const { sendEmail } = require('../config/email');
const crypto = require('crypto');

// 1. Submit Application
const submitApplication = async (req, res) => {
    const name = req.body.name || req.query.name;
    const email = req.body.email || req.query.email;
    const phone = req.body.phone || req.query.phone;
    const jobId = req.body.job_id || req.query.job_id;
    const cvFile = req.file;

    if (!cvFile) {
        return res.status(400).json({ error: 'CV File is required' });
    }

    try {
        // Find job and division details for email purposes
        const [jobRows] = await db.query(
            `SELECT j.title, d.name as division_name 
             FROM jobs j 
             LEFT JOIN divisions d ON j.division_id = d.id 
             WHERE j.id = ?`, [jobId]
        );

        if (jobRows.length === 0) {
            return res.status(404).json({ error: 'Job not found' });
        }

        const job = jobRows[0];

        // Generate Tracking ID
        const trackingId = 'APP-' + crypto.randomBytes(4).toString('hex').toUpperCase();

        // 1. Check or create Applicant
        let [applicantRows] = await db.query('SELECT id FROM applicants WHERE email = ?', [email]);
        let applicantId;
        
        if (applicantRows.length > 0) {
            applicantId = applicantRows[0].id;
        } else {
            const [insertResult] = await db.query(
                'INSERT INTO applicants (name, email, phone) VALUES (?, ?, ?)',
                [name, email, phone]
            );
            applicantId = insertResult.insertId;
        }

        // 2. Create Application
        const relativeCvPath = cvFile.path.split('uploads')[1].replace(/\\/g, '/'); // Normalize path for DB
        const [appResult] = await db.query(
            'INSERT INTO applications (tracking_id, applicant_id, job_id, cv_path, status) VALUES (?, ?, ?, ?, ?)',
            [trackingId, applicantId, job_id, `/uploads${relativeCvPath}`, 'Menunggu Review']
        );
        const applicationId = appResult.insertId;

        // 3. Create Application History
        await db.query(
            'INSERT INTO application_history (application_id, status, notes) VALUES (?, ?, ?)',
            [applicationId, 'Menunggu Review', 'Lamaran diajukan']
        );

        // 4. Send Emails (Async, non-blocking if possible, but we await to ensure it works for now)
        try {
            // Email to Applicant
            await sendEmail(
                email,
                `Pendaftaran Berhasil - ${job.title}`,
                `Halo ${name},\n\nLamaran Anda untuk posisi ${job.title} (${job.division_name}) telah kami terima.\n\nAnda dapat melacak status lamaran Anda dengan Tracking ID berikut:\n\n${trackingId}\n\nTerima kasih.`,
                `<p>Halo ${name},</p><p>Lamaran Anda untuk posisi <b>${job.title}</b> (${job.division_name}) telah kami terima.</p><p>Anda dapat melacak status lamaran Anda dengan Tracking ID berikut:</p><h3>${trackingId}</h3><p>Terima kasih.</p>`
            );

            // Email to Admin/HR (Example static admin email, ideally from DB config)
            const adminEmail = process.env.SMTP_USER || 'admin@perusahaan.com';
            await sendEmail(
                adminEmail,
                `Lamaran Baru Masuk - ${job.title}`,
                `Terdapat lamaran baru masuk dari ${name} untuk posisi ${job.title}.\nSilakan cek sistem untuk mereview CV.`,
                `<p>Terdapat lamaran baru masuk dari <b>${name}</b> untuk posisi <b>${job.title}</b>.</p><p>Silakan cek sistem untuk mereview CV yang tersimpan di direktori divisi bersangkutan.</p>`
            );
        } catch (emailErr) {
            console.error("Gagal mengirim email, tapi data tersimpan", emailErr);
        }

        res.status(201).json({
            message: 'Application submitted successfully',
            tracking_id: trackingId
        });

    } catch (error) {
        console.error('Error in submitApplication:', error);
        res.status(500).json({ error: 'Internal server error' });
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
        try {
            await sendEmail(
                app.email,
                `Update Status Lamaran - ${app.job_title}`,
                `Halo ${app.name},\n\nStatus lamaran Anda untuk posisi ${app.job_title} telah diperbarui menjadi:\n\n**${status}**\n\nCatatan: ${notes || '-'}\n\nAnda selalu dapat mengeceknya menggunakan Tracking ID: ${app.tracking_id}\n\nTerima kasih.`,
                `<p>Halo ${app.name},</p><p>Status lamaran Anda untuk posisi <b>${app.job_title}</b> telah diperbarui menjadi:</p><h3>${status}</h3><p>Catatan: ${notes || '-'}</p><p>Terima kasih.</p>`
            );
        } catch (emailErr) {
            console.error("Gagal mengirim email status", emailErr);
        }

        res.json({ message: 'Status updated successfully', new_status: status });

    } catch (error) {
        console.error('Error in updateApplicationStatus:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    submitApplication,
    trackApplication,
    updateApplicationStatus
};
