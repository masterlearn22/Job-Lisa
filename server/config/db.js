const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'hrd_job_portal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Use promises wrapper
const db = pool.promise();

module.exports = db;
