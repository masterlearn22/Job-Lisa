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

const jobRoutes = require('./routes/jobRoutes');

// API Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/jobs', jobRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
