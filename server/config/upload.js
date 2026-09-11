const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // We expect the client to send divisionName and jobTitle in the form data
        const divisionName = req.body.divisionName || 'Lainnya';
        const jobTitle = req.body.jobTitle || 'Umum';
        
        // Sanitize names for folder creation
        const safeDivision = divisionName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const safeJob = jobTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        
        // Construct path: server/uploads/division/job
        const uploadPath = path.join(__dirname, '..', 'uploads', safeDivision, safeJob);
        
        // Create directories if they don't exist
        fs.mkdirSync(uploadPath, { recursive: true });
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const applicantName = req.body.name || 'Unknown';
        const safeName = applicantName.replace(/[^a-z0-9]/gi, '_');
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        
        // Filename format: [ApplicantName]_[Timestamp].pdf
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
