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

module.exports = router;
