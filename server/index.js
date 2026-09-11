const express = require('express');
const cors = require('cors');
const path = require('path');
const applicationRoutes = require('./routes/applicationRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CV Uploads) securely if needed (optional, HRD can access via auth later)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple Route
app.get('/', (req, res) => {
    res.send('Job Portal API is running');
});

// API Routes
app.use('/api/applications', applicationRoutes);

// Mock Data endpoint for jobs (while waiting for DB populating from frontend)
const db = require('./config/db');
app.get('/api/jobs', async (req, res) => {
    try {
        const [jobs] = await db.query(
            `SELECT j.id, j.title, j.description, j.status, d.name as division 
             FROM jobs j 
             LEFT JOIN divisions d ON j.division_id = d.id 
             WHERE j.status = 'OPEN'`
        );
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
