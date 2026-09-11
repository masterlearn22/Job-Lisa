const nodemailer = require('nodemailer');
require('dotenv').config();

// Helper untuk cek apakah kredensial SMTP sudah disetel
const isConfigured = () => {
    return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
};

const getTransporter = () => {
    if (!isConfigured()) {
        return null;
    }
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT, 10) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

const sendEmail = async (to, subject, text, html) => {
    const transporter = getTransporter();

    if (!transporter) {
        console.warn(`\n[EMAIL NOTICE - MODE LOKAL / DEMO]`);
        console.warn(`Akun email pengirim (SMTP_USER & SMTP_PASS) belum disetel di server/.env.`);
        console.warn(`Tujuan: ${to}`);
        console.warn(`Subjek: ${subject}`);
        console.warn(`Pesan tidak dikirim ke internet, tetapi alur sistem tetap berjalan normal.\n`);
        return { simulated: true, to, subject };
    }

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM || `"HRD PT Lisa Concrete Indonesia" <${process.env.SMTP_USER}>`,
            to,
            subject,
            text,
            html
        });
        console.log("Email berhasil dikirim: %s ke %s", info.messageId, to);
        return { simulated: false, messageId: info.messageId, to };
    } catch (error) {
        console.error("Gagal mengirim email via SMTP: ", error.message);
        throw error;
    }
};

module.exports = { sendEmail, isConfigured };
