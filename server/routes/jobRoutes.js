const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// GET /api/jobs - Lowongan aktif untuk publik
router.get('/', jobController.getPublicJobs);

// GET /api/jobs/admin/all - Seluruh lowongan untuk admin (termasuk closed & jumlah pelamar)
router.get('/admin/all', jobController.getAllJobsAdmin);

// POST /api/jobs - Tambah lowongan baru
router.post('/', jobController.createJob);

// PUT /api/jobs/:id - Edit detail lowongan
router.put('/:id', jobController.updateJob);

// PUT /api/jobs/:id/status - Ubah status OPEN/CLOSED cepat
router.put('/:id/status', jobController.toggleJobStatus);

// DELETE /api/jobs/:id - Hapus lowongan
router.delete('/:id', jobController.deleteJob);

module.exports = router;
