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

// Serve static files (CV Uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const jobRoutes = require('./routes/jobRoutes');

// API Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/jobs', jobRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static frontend build from 'public'
const frontendPath = path.join(__dirname, 'public');
app.use(express.static(frontendPath));

// Catch-all fallback to serve React index.html for SPA
app.use((req, res) => {
    const indexPath = path.join(frontendPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            res.status(200).send('Job Portal API is running');
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
