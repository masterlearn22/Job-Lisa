-- Eksekusi file ini untuk membuat database dan tabel yang diperlukan

CREATE DATABASE IF NOT EXISTS hrd_job_portal;
USE hrd_job_portal;

-- Tabel Roles
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabel Users (Admin/HRD)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

-- Tabel Permissions
CREATE TABLE IF NOT EXISTS permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabel Pivot Role Permissions
CREATE TABLE IF NOT EXISTS role_permissions (
    role_id INT,
    permission_id INT,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
);

-- Tabel Divisions (Contoh: Finance, Marketing, IT)
CREATE TABLE IF NOT EXISTS divisions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Jobs (Lowongan Pekerjaan)
CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    requirements TEXT,
    division_id INT,
    status ENUM('OPEN', 'CLOSED') DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (division_id) REFERENCES divisions(id) ON DELETE SET NULL
);

-- Tabel Applicants (Profil Dasar Pelamar)
CREATE TABLE IF NOT EXISTS applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Applications (Lamaran Masuk)
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tracking_id VARCHAR(50) UNIQUE NOT NULL,
    applicant_id INT NOT NULL,
    job_id INT NOT NULL,
    status ENUM('Menunggu Review', 'Tahap Seleksi', 'Interview', 'Diterima', 'Ditolak') DEFAULT 'Menunggu Review',
    cv_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (applicant_id) REFERENCES applicants(id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- Tabel Application History (Riwayat Status)
CREATE TABLE IF NOT EXISTS application_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    notes TEXT,
    changed_by INT, -- user_id (HR) yang mengubah, bisa NULL jika auto
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE,
    FOREIGN KEY (changed_by) REFERENCES users(id) ON DELETE SET NULL
);

-- ==========================================
-- DUMMY DATA UNTUK TESTING
-- ==========================================
INSERT IGNORE INTO roles (id, name) VALUES (1, 'Admin'), (2, 'HRD');
INSERT IGNORE INTO users (id, email, password, name, role_id) VALUES (1, 'admin@perusahaan.com', 'password_hash_disini', 'Super Admin', 1);

INSERT IGNORE INTO divisions (id, name) VALUES 
(1, 'IT Development'), 
(2, 'Marketing & Sales'), 
(3, 'Finance & Accounting');

INSERT IGNORE INTO jobs (id, title, division_id, status) VALUES 
(1, 'Frontend Developer', 1, 'OPEN'),
(2, 'Backend Developer', 1, 'OPEN'),
(3, 'Digital Marketing Specialist', 2, 'OPEN'),
(4, 'Accounting Staff', 3, 'OPEN');
