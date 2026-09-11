const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const applicationController = require('../controllers/applicationController');

// Routes
// POST /api/applications - Submit new application (with CV upload)
router.post('/', upload.single('cvFile'), applicationController.submitApplication);

// GET /api/applications/track/:tracking_id - Track application status
router.get('/track/:tracking_id', applicationController.trackApplication);

// PUT /api/applications/:id/status - Update application status (For HRD)
router.put('/:id/status', applicationController.updateApplicationStatus);

// ================= ADMIN / HRD ROUTES =================
// POST /api/applications/admin/login - Login admin HRD
router.post('/admin/login', applicationController.adminLogin);

// GET /api/applications/admin/stats - Ringkasan metrik statistik pelamar
router.get('/admin/stats', applicationController.getAdminStats);

// GET /api/applications/admin/list - Daftar seluruh pelamar masuk (dengan filter & search)
router.get('/admin/list', applicationController.getApplicationsAdmin);

// DELETE /api/applications/admin/:id - Hapus pelamar
router.delete('/admin/:id', applicationController.deleteApplicationAdmin);

module.exports = router;
