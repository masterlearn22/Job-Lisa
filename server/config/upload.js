const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Helper to sanitize folder and file names safely for Windows/Linux
const cleanName = (str, fallback = 'Umum') => {
    if (Array.isArray(str)) str = str[0];
    if (!str || typeof str !== 'string') return fallback;
    const cleaned = str.replace(/[<>:"/\\|?*]/g, '').trim();
    return cleaned || fallback;
};

// Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Check query parameters first (reliable in multipart streams), fallback to body
        const rawDivision = req.query.divisionName || req.body.divisionName || 'Lainnya';
        const rawJob = req.query.jobTitle || req.body.jobTitle || 'Umum';
        
        const divisionFolder = cleanName(rawDivision, 'Lainnya');
        const jobFolder = cleanName(rawJob, 'Umum');
        
        // Construct path: server/uploads/Nama_Divisi/Nama_Posisi
        const uploadPath = path.join(__dirname, '..', 'uploads', divisionFolder, jobFolder);
        
        // Create directories if they don't exist
        fs.mkdirSync(uploadPath, { recursive: true });
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const rawName = req.query.name || req.body.name || 'Pelamar';
        const safeName = cleanName(rawName, 'Pelamar').replace(/\s+/g, '_');
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        
        // Filename format: [Nama_Pelamar]_[Timestamp].pdf
        cb(null, `${safeName}_${timestamp}${ext}`);
    }
});

// File filter to allow only specific formats (PDF, DOC, DOCX)
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
        cb(null, true);
    } else {
        cb(new Error('Hanya file PDF, DOC, atau DOCX yang diperbolehkan!'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

module.exports = upload;
