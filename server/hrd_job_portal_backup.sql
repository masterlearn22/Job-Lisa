-- ====================================================
-- DATABASE EXPORT: hrd_job_portal
-- PT Lisa Concrete Indonesia - Portal Rekrutmen
-- Tanggal Export: 11/9/2026, 14.12.20
-- ====================================================

CREATE DATABASE IF NOT EXISTS `hrd_job_portal` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `hrd_job_portal`;

-- ----------------------------------------------------
-- Struktur tabel: `applicants`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `applicants`;
CREATE TABLE `applicants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `applicants` (3 baris)
INSERT INTO `applicants` (`id`, `name`, `email`, `phone`, `created_at`) VALUES (1, 'Surya Dwi Satria', 'suryafc349@gmail.com', '085730033426', '2026-09-11 02:26:40');
INSERT INTO `applicants` (`id`, `name`, `email`, `phone`, `created_at`) VALUES (2, 'Samson Dwi Hartono', 'hartono@gmail.com', '085830387736', '2026-09-11 03:00:27');
INSERT INTO `applicants` (`id`, `name`, `email`, `phone`, `created_at`) VALUES (3, 'Antony Garera', 'kevaschris1@gmail.com', '085730033426', '2026-09-11 03:52:17');

-- ----------------------------------------------------
-- Struktur tabel: `application_history`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `application_history`;
CREATE TABLE `application_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `application_id` int NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `notes` text,
  `changed_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `application_id` (`application_id`),
  KEY `changed_by` (`changed_by`),
  CONSTRAINT `application_history_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`) ON DELETE CASCADE,
  CONSTRAINT `application_history_ibfk_2` FOREIGN KEY (`changed_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `application_history` (11 baris)
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (1, 1, 'Administrasi & Verifikasi Dokumen', 'Lamaran diajukan', NULL, '2026-09-11 02:26:40');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (2, 2, 'Administrasi & Verifikasi Dokumen', 'Lamaran diajukan', NULL, '2026-09-11 02:41:37');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (3, 3, 'Administrasi & Verifikasi Dokumen', 'Lamaran diajukan', NULL, '2026-09-11 03:00:27');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (4, 1, 'Wawancara HR', 'Lolos berkas', NULL, '2026-09-11 03:36:14');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (5, 1, 'Wawancara User', 'Status diubah ke Wawancara User', NULL, '2026-09-11 03:40:33');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (6, 1, 'Wawancara User', 'Lanjut tes user', NULL, '2026-09-11 03:46:39');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (7, 1, 'Psikotes', 'Lanjut psikotes', NULL, '2026-09-11 03:47:04');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (8, 4, 'Administrasi & Verifikasi Dokumen', 'Pendaftaran baru diterima, berkas dalam verifikasi', NULL, '2026-09-11 03:52:17');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (9, 4, 'Administrasi & Verifikasi Dokumen', 'Status diubah ke Administrasi & Verifikasi Dokumen', NULL, '2026-09-11 03:54:02');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (10, 1, 'Wawancara User', 'Status diubah ke Wawancara User', NULL, '2026-09-11 06:39:27');
INSERT INTO `application_history` (`id`, `application_id`, `status`, `notes`, `changed_by`, `created_at`) VALUES (11, 4, 'Wawancara HR', 'Status diubah ke Wawancara HR', NULL, '2026-09-11 06:40:27');

-- ----------------------------------------------------
-- Struktur tabel: `applications`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `applications`;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tracking_id` varchar(50) NOT NULL,
  `applicant_id` int NOT NULL,
  `job_id` int NOT NULL,
  `status` varchar(100) DEFAULT 'Administrasi & Verifikasi Dokumen',
  `cv_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tracking_id` (`tracking_id`),
  KEY `applicant_id` (`applicant_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`applicant_id`) REFERENCES `applicants` (`id`) ON DELETE CASCADE,
  CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `applications` (4 baris)
INSERT INTO `applications` (`id`, `tracking_id`, `applicant_id`, `job_id`, `status`, `cv_path`, `created_at`, `updated_at`) VALUES (1, 'APP-6B6235A5', 1, 1, 'Wawancara User', '/uploads/lainnya/umum/Surya_Dwi_Satria_1789093600020.pdf', '2026-09-11 02:26:40', '2026-09-11 06:39:27');
INSERT INTO `applications` (`id`, `tracking_id`, `applicant_id`, `job_id`, `status`, `cv_path`, `created_at`, `updated_at`) VALUES (2, 'APP-A7FECDCE', 1, 2, 'Administrasi & Verifikasi Dokumen', '/uploads/Quality Assurance & Lab/Quality Control (QC) Precast Inspector/Surya_Hectiztour_1789094497443.pdf', '2026-09-11 02:41:37', '2026-09-11 03:29:28');
INSERT INTO `applications` (`id`, `tracking_id`, `applicant_id`, `job_id`, `status`, `cv_path`, `created_at`, `updated_at`) VALUES (3, 'APP-1CDB302B', 2, 3, 'Administrasi & Verifikasi Dokumen', '/uploads/Commercial & Marketing/Technical Sales & Project Marketing Executive/Samson_Dwi_Hartono_1789095627861.pdf', '2026-09-11 03:00:27', '2026-09-11 03:29:28');
INSERT INTO `applications` (`id`, `tracking_id`, `applicant_id`, `job_id`, `status`, `cv_path`, `created_at`, `updated_at`) VALUES (4, 'APP-CC2114C2', 3, 2, 'Wawancara HR', '/uploads/Quality Assurance & Lab/Quality Control (QC) Precast Inspector/Antony_Garera_1789098737056.pdf', '2026-09-11 03:52:17', '2026-09-11 06:40:27');

-- ----------------------------------------------------
-- Struktur tabel: `divisions`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `divisions`;
CREATE TABLE `divisions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `divisions` (5 baris)
INSERT INTO `divisions` (`id`, `name`, `created_at`) VALUES (1, 'Engineering & Technical', '2026-09-11 02:18:01');
INSERT INTO `divisions` (`id`, `name`, `created_at`) VALUES (2, 'Quality Assurance & Lab', '2026-09-11 02:18:01');
INSERT INTO `divisions` (`id`, `name`, `created_at`) VALUES (3, 'Commercial & Marketing', '2026-09-11 02:18:01');
INSERT INTO `divisions` (`id`, `name`, `created_at`) VALUES (4, 'Manufacturing & Plant Operation', '2026-09-11 02:18:01');
INSERT INTO `divisions` (`id`, `name`, `created_at`) VALUES (5, 'HSE & Safety', '2026-09-11 02:18:01');

-- ----------------------------------------------------
-- Struktur tabel: `jobs`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` text,
  `requirements` json DEFAULT NULL,
  `benefits` json DEFAULT NULL,
  `division_id` int DEFAULT NULL,
  `location` varchar(200) DEFAULT 'Surabaya (Head Office)',
  `type` varchar(50) DEFAULT 'Full Time',
  `experience` varchar(100) DEFAULT NULL,
  `education` varchar(100) DEFAULT NULL,
  `deadline` varchar(100) DEFAULT NULL,
  `status` enum('OPEN','CLOSED') DEFAULT 'OPEN',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `division_id` (`division_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `jobs` (3 baris)
INSERT INTO `jobs` (`id`, `title`, `description`, `requirements`, `benefits`, `division_id`, `location`, `type`, `experience`, `education`, `deadline`, `status`, `created_at`) VALUES (1, 'Precast Civil Engineer & Drafter', 'Bertanggung jawab atas kalkulasi struktur beton pracetak, shop drawing detailing (AutoCAD/Tekla Structures), dan koordinasi metode instalasi erection bersama tim proyek lapangan.', '["Pendidikan S1 Teknik Sipil (IPK min. 3.00)","Menguasai software AutoCAD, Tekla Structures, ETABS, atau SAP2000","Memahami standar desain beton bertulang dan prategang (SNI / ACI / JIS)","Pengalaman kerja min. 2 tahun di industri precast concrete atau kontraktor sipil","Mampu membaca gambar kerja konstruksi dengan teliti dan bekerja sama dengan tim marketing/produksi"]', '["Gaji Pokok & Tunjangan Posisi Menarik","BPJS Ketenagakerjaan & Kesehatan","Bonus Tahunan & Kinerja Proyek","Pelatihan Sertifikasi Keahlian"]', 1, 'Surabaya (Head Office)', 'Full Time', 'Min. 2-3 Tahun', 'S1 Teknik Sipil', '20 Oktober 2026', 'OPEN', '2026-09-11 02:18:01');
INSERT INTO `jobs` (`id`, `title`, `description`, `requirements`, `benefits`, `division_id`, `location`, `type`, `experience`, `education`, `deadline`, `status`, `created_at`) VALUES (2, 'Quality Control (QC) Precast Inspector', 'Melakukan pengujian slump test, uji kuat tekan beton (compression test), inspeksi pembesian cetakan bekisting, serta memastikan kepatuhan standar mutu ISO 9001:2015 di unit produksi.', '["Pendidikan D3/S1 Teknik Sipil atau Teknik Kimia/Material","Memahami mix design beton, slump test, curing beton, dan toleransi dimensi precast","Familiar dengan prosedur audit Sistem Manajemen Mutu ISO 9001","Memiliki integritas tinggi, disiplin, dan teliti terhadap standar mutu","Bersedia ditempatkan di Pabrik Ngoro, Mojokerto (Jawa Timur)"]', '["Tunjangan Lokasi Pabrik & Uang Makan","Fasilitas Mess / Akomodasi Karyawan Pabrik","Asuransi Kesehatan","Jenjang Karir Terbuka"]', 2, 'Ngoro Plant (Mojokerto, Jatim)', 'Full Time', 'Min. 2 Tahun', 'D3/S1 Teknik Sipil / Teknik Material', '25 Oktober 2026', 'OPEN', '2026-09-11 02:18:01');
INSERT INTO `jobs` (`id`, `title`, `description`, `requirements`, `benefits`, `division_id`, `location`, `type`, `experience`, `education`, `deadline`, `status`, `created_at`) VALUES (3, 'Technical Sales & Project Marketing Executive', 'Menangani tender proyek infrastruktur (BUMN Karya & Swasta), melakukan konsultasi teknis kebutuhan produk precast kepada konsultan/kontraktor, serta mencapai target penjualan regional.', '["Pendidikan S1 Teknik Sipil, Arsitektur, atau bidang terkait","Memiliki jaringan relasi yang luas dengan kontraktor, BUMN, Dinas PUPR, atau pengembang properti","Kemampuan presentasi teknis, negosiasi, dan komunikasi yang persuasif","Memiliki kendaraan pribadi dan SIM A aktif","Target-oriented dan memiliki daya juang tinggi"]', '["Komisi Penjualan Proyek yang Sangat Menarik","Tunjangan Transportasi & Komunikasi","Peluang Pengembangan Jaringan Industri"]', 3, 'Surabaya / Jawa Timur Area', 'Full Time', 'Min. 2 Tahun', 'S1 Teknik Sipil / Arsitektur / Manajemen', '30 Oktober 2026', 'OPEN', '2026-09-11 02:18:01');

-- ----------------------------------------------------
-- Struktur tabel: `permissions`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------------------
-- Struktur tabel: `role_permissions`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `role_permissions`;
CREATE TABLE `role_permissions` (
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------------------
-- Struktur tabel: `roles`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `roles` (2 baris)
INSERT INTO `roles` (`id`, `name`) VALUES (1, 'Admin');
INSERT INTO `roles` (`id`, `name`) VALUES (2, 'HRD');

-- ----------------------------------------------------
-- Struktur tabel: `users`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data tabel: `users` (1 baris)
INSERT INTO `users` (`id`, `email`, `password`, `name`, `role_id`, `created_at`) VALUES (1, 'admin@perusahaan.com', 'password_hash_disini', 'Super Admin', 1, '2026-09-11 02:18:01');

