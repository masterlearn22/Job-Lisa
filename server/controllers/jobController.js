const db = require('../config/db');

// 1. Ambil Semua Lowongan Aktif untuk Halaman Publik Karir
const getPublicJobs = async (req, res) => {
    try {
        const [jobs] = await db.query(
            `SELECT j.*, d.name as department 
             FROM jobs j 
             LEFT JOIN divisions d ON j.division_id = d.id 
             WHERE j.status = 'OPEN'
             ORDER BY j.created_at DESC`
        );

        const formattedJobs = jobs.map(j => {
            let requirements = [];
            let benefits = [];
            try {
                requirements = typeof j.requirements === 'string' ? JSON.parse(j.requirements) : (j.requirements || []);
            } catch (e) {
                requirements = j.requirements ? [j.requirements] : [];
            }
            try {
                benefits = typeof j.benefits === 'string' ? JSON.parse(j.benefits) : (j.benefits || []);
            } catch (e) {
                benefits = j.benefits ? [j.benefits] : [];
            }

            return {
                ...j,
                id: j.id.toString(),
                requirements,
                benefits
            };
        });

        res.json(formattedJobs);
    } catch (error) {
        console.error('Error in getPublicJobs:', error);
        res.status(500).json({ error: 'Gagal mengambil data lowongan kerja' });
    }
};

// 2. Ambil Semua Lowongan untuk Dashboard Admin (Termasuk CLOSED & Hitungan Pelamar)
const getAllJobsAdmin = async (req, res) => {
    try {
        const [jobs] = await db.query(
            `SELECT j.*, d.name as department, COUNT(a.id) as applicant_count 
             FROM jobs j 
             LEFT JOIN divisions d ON j.division_id = d.id 
             LEFT JOIN applications a ON j.id = a.job_id 
             GROUP BY j.id 
             ORDER BY j.created_at DESC`
        );

        const formattedJobs = jobs.map(j => {
            let requirements = [];
            let benefits = [];
            try {
                requirements = typeof j.requirements === 'string' ? JSON.parse(j.requirements) : (j.requirements || []);
            } catch (e) {
                requirements = j.requirements ? [j.requirements] : [];
            }
            try {
                benefits = typeof j.benefits === 'string' ? JSON.parse(j.benefits) : (j.benefits || []);
            } catch (e) {
                benefits = j.benefits ? [j.benefits] : [];
            }

            return {
                ...j,
                id: j.id.toString(),
                requirements,
                benefits,
                applicant_count: parseInt(j.applicant_count || 0, 10)
            };
        });

        res.json(formattedJobs);
    } catch (error) {
        console.error('Error in getAllJobsAdmin:', error);
        res.status(500).json({ error: 'Gagal mengambil daftar lowongan admin' });
    }
};

// 3. Tambah Lowongan Kerja Baru
const createJob = async (req, res) => {
    try {
        const {
            title,
            division_id,
            location,
            type,
            experience,
            education,
            deadline,
            status,
            description,
            requirements,
            benefits
        } = req.body;

        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Judul lowongan wajib diisi' });
        }

        const reqJson = Array.isArray(requirements) ? JSON.stringify(requirements) : JSON.stringify([]);
        const benJson = Array.isArray(benefits) ? JSON.stringify(benefits) : JSON.stringify([]);

        const [result] = await db.query(
            `INSERT INTO jobs 
             (title, division_id, location, type, experience, education, deadline, status, description, requirements, benefits) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title.trim(),
                division_id || 1,
                location || 'Surabaya (Head Office)',
                type || 'Full Time',
                experience || 'Min. 1-2 Tahun',
                education || 'D3 / S1',
                deadline || 'Terbuka',
                status === 'CLOSED' ? 'CLOSED' : 'OPEN',
                description || '',
                reqJson,
                benJson
            ]
        );

        res.status(201).json({
            message: 'Lowongan pekerjaan berhasil ditambahkan',
            job_id: result.insertId
        });
    } catch (error) {
        console.error('Error in createJob:', error);
        res.status(500).json({ error: error.sqlMessage || error.message || 'Gagal menambahkan lowongan' });
    }
};

// 4. Perbarui Detail Lowongan
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            division_id,
            location,
            type,
            experience,
            education,
            deadline,
            status,
            description,
            requirements,
            benefits
        } = req.body;

        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Judul lowongan wajib diisi' });
        }

        const reqJson = Array.isArray(requirements) ? JSON.stringify(requirements) : (requirements ? JSON.stringify([requirements]) : JSON.stringify([]));
        const benJson = Array.isArray(benefits) ? JSON.stringify(benefits) : (benefits ? JSON.stringify([benefits]) : JSON.stringify([]));

        await db.query(
            `UPDATE jobs 
             SET title = ?, division_id = ?, location = ?, type = ?, experience = ?, 
                 education = ?, deadline = ?, status = ?, description = ?, requirements = ?, benefits = ? 
             WHERE id = ?`,
            [
                title.trim(),
                division_id,
                location,
                type,
                experience,
                education,
                deadline,
                status === 'CLOSED' ? 'CLOSED' : 'OPEN',
                description,
                reqJson,
                benJson,
                id
            ]
        );

        res.json({ message: 'Lowongan pekerjaan berhasil diperbarui' });
    } catch (error) {
        console.error('Error in updateJob:', error);
        res.status(500).json({ error: error.sqlMessage || error.message || 'Gagal memperbarui lowongan' });
    }
};

// 5. Ubah Status Lowongan Cepat (OPEN / CLOSED)
const toggleJobStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const targetStatus = status === 'CLOSED' ? 'CLOSED' : 'OPEN';
        await db.query('UPDATE jobs SET status = ? WHERE id = ?', [targetStatus, id]);

        res.json({ message: `Status lowongan berhasil diubah menjadi ${targetStatus}`, status: targetStatus });
    } catch (error) {
        console.error('Error in toggleJobStatus:', error);
        res.status(500).json({ error: 'Gagal mengubah status lowongan' });
    }
};

// 6. Hapus Lowongan Kerja
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM jobs WHERE id = ?', [id]);
        res.json({ message: 'Lowongan kerja berhasil dihapus' });
    } catch (error) {
        console.error('Error in deleteJob:', error);
        res.status(500).json({ error: error.sqlMessage || error.message || 'Gagal menghapus lowongan' });
    }
};

module.exports = {
    getPublicJobs,
    getAllJobsAdmin,
    createJob,
    updateJob,
    toggleJobStatus,
    deleteJob
};
