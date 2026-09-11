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

-- Tabel Jobs (Lowongan Pekerjaan Lengkap)
CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    requirements JSON,
    benefits JSON,
    division_id INT,
    location VARCHAR(200) DEFAULT 'Surabaya (Head Office)',
    type VARCHAR(50) DEFAULT 'Full Time',
    experience VARCHAR(100),
    education VARCHAR(100),
    deadline VARCHAR(100),
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
-- DUMMY DATA UNTUK TESTING (Berdasarkan Desain Frontend)
-- ==========================================
INSERT IGNORE INTO roles (id, name) VALUES (1, 'Admin'), (2, 'HRD');
INSERT IGNORE INTO users (id, email, password, name, role_id) VALUES (1, 'admin@perusahaan.com', 'password_hash_disini', 'Super Admin', 1);

INSERT IGNORE INTO divisions (id, name) VALUES 
(1, 'Engineering & Technical'), 
(2, 'Quality Assurance & Lab'), 
(3, 'Commercial & Marketing'),
(4, 'Manufacturing & Plant Operation'),
(5, 'HSE & Safety');

INSERT IGNORE INTO jobs (id, title, division_id, status, description, requirements, benefits, location, type, experience, education, deadline) VALUES 
(1, 'Precast Civil Engineer & Drafter', 1, 'OPEN', 'Bertanggung jawab atas kalkulasi struktur beton pracetak, shop drawing detailing (AutoCAD/Tekla Structures), dan koordinasi metode instalasi erection bersama tim proyek lapangan.', '["Pendidikan S1 Teknik Sipil (IPK min. 3.00)", "Menguasai software AutoCAD, Tekla Structures, ETABS, atau SAP2000", "Memahami standar desain beton bertulang dan prategang (SNI / ACI / JIS)", "Pengalaman kerja min. 2 tahun di industri precast concrete atau kontraktor sipil", "Mampu membaca gambar kerja konstruksi dengan teliti dan bekerja sama dengan tim marketing/produksi"]', '["Gaji Pokok & Tunjangan Posisi Menarik", "BPJS Ketenagakerjaan & Kesehatan", "Bonus Tahunan & Kinerja Proyek", "Pelatihan Sertifikasi Keahlian"]', 'Surabaya (Head Office)', 'Full Time', 'Min. 2-3 Tahun', 'S1 Teknik Sipil', '20 Oktober 2026'),
(2, 'Quality Control (QC) Precast Inspector', 2, 'OPEN', 'Melakukan pengujian slump test, uji kuat tekan beton (compression test), inspeksi pembesian cetakan bekisting, serta memastikan kepatuhan standar mutu ISO 9001:2015 di unit produksi.', '["Pendidikan D3/S1 Teknik Sipil atau Teknik Kimia/Material", "Memahami mix design beton, slump test, curing beton, dan toleransi dimensi precast", "Familiar dengan prosedur audit Sistem Manajemen Mutu ISO 9001", "Memiliki integritas tinggi, disiplin, dan teliti terhadap standar mutu", "Bersedia ditempatkan di Pabrik Ngoro, Mojokerto (Jawa Timur)"]', '["Tunjangan Lokasi Pabrik & Uang Makan", "Fasilitas Mess / Akomodasi Karyawan Pabrik", "Asuransi Kesehatan", "Jenjang Karir Terbuka"]', 'Ngoro Plant (Mojokerto, Jatim)', 'Full Time', 'Min. 2 Tahun', 'D3/S1 Teknik Sipil / Teknik Material', '25 Oktober 2026'),
(3, 'Technical Sales & Project Marketing Executive', 3, 'OPEN', 'Menangani tender proyek infrastruktur (BUMN Karya & Swasta), melakukan konsultasi teknis kebutuhan produk precast kepada konsultan/kontraktor, serta mencapai target penjualan regional.', '["Pendidikan S1 Teknik Sipil, Arsitektur, atau bidang terkait", "Memiliki jaringan relasi yang luas dengan kontraktor, BUMN, Dinas PUPR, atau pengembang properti", "Kemampuan presentasi teknis, negosiasi, dan komunikasi yang persuasif", "Memiliki kendaraan pribadi dan SIM A aktif", "Target-oriented dan memiliki daya juang tinggi"]', '["Komisi Penjualan Proyek yang Sangat Menarik", "Tunjangan Transportasi & Komunikasi", "Peluang Pengembangan Jaringan Industri"]', 'Surabaya / Jawa Timur Area', 'Full Time', 'Min. 2 Tahun', 'S1 Teknik Sipil / Arsitektur / Manajemen', '30 Oktober 2026');
