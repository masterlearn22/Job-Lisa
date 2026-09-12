import React, { useState, useEffect } from 'react'

import bgFactoryHome from '../assets/factory-home.jpg'
import bgFactoryHome23 from '../assets/factory-home-23.jpg'
import bgBoxCulvert from '../assets/Box-Culvert-Monolith-Project-Pakuwon.jpg'
import bgFacadeHotel from '../assets/Facade-Hotel-Agogo-Surabaya-home.jpg'
import bgFencePanel from '../assets/Fence-Panel-GG-Magetan-2021.jpg'
import bgArch from '../assets/arch.jpg'

// Lisa Concrete Asset Slideshow untuk Hero Background
const HERO_SLIDES = [
  {
    image: bgFactoryHome,
    title: 'Fasilitas Pabrik Beton Pracetak Lisa Concrete',
    subtitle: 'Plant Ngoro (Mojokerto) & Karangasem (Bali)',
  },
  {
    image: bgFactoryHome23,
    title: 'Pusat Manufaktur & Presisi Precast',
    subtitle: 'Kapasitas Produksi Skala Besar & Bersertifikasi Mutu',
  },
  {
    image: bgBoxCulvert,
    title: 'Proyek Box Culvert Monolith Pakuwon',
    subtitle: 'Rekayasa Struktur Drainase Pracetak Terintegrasi',
  },
  {
    image: bgFacadeHotel,
    title: 'Proyek Facade Hotel Agogo Surabaya',
    subtitle: 'Solusi Rekayasa Panel Beton Arsitektural Mewah',
  },
  {
    image: bgFencePanel,
    title: 'Proyek Fence Panel Precast Magetan',
    subtitle: 'Sistem Pagar Beton Pracetak Kokoh, Cepat & Efisien',
  },
  {
    image: bgArch,
    title: 'Struktur Beton Lengkung & Girder Berat',
    subtitle: 'Inovasi Kontinu untuk Ketahanan Infrastruktur Nasional',
  },
]

// TAHAPAN SELEKSI RESMI REKRUTMEN PT LISA CONCRETE INDONESIA (Tanpa MCU)
const RECRUITMENT_STAGES = [
  {
    no: '01',
    stage: 'Tahap 01',
    shortLabel: 'Berkas',
    category: 'Administrasi',
    categoryColor: 'text-sky-700 bg-sky-50 border-sky-200/80',
    title: 'Verifikasi Dokumen',
    desc: 'Pemeriksaan berkas CV, portofolio proyek, dan keaslian dokumen kualifikasi kandidat.',
    format: 'Seleksi Berkas Online',
    iconType: 'doc'
  },
  {
    no: '02',
    stage: 'Tahap 02',
    shortLabel: 'Wawancara HR',
    category: 'Kepribadian',
    categoryColor: 'text-amber-700 bg-amber-50 border-amber-200/80',
    title: 'Wawancara HR & Budaya',
    desc: 'Evaluasi integritas, kepribadian, serta keselarasan dengan 4 Nilai Inti L.I.S.A.',
    format: 'Tatap Muka / Virtual',
    iconType: 'hr'
  },
  {
    no: '03',
    stage: 'Tahap 03',
    shortLabel: 'Uji Teknis',
    category: 'Kompetensi',
    categoryColor: 'text-red-700 bg-red-50 border-red-200/80',
    title: 'Wawancara User Teknis',
    desc: 'Uji kompetensi teknis rekayasa beton dan studi kasus bersama Division Lead.',
    format: 'Lead & Engineering Manager',
    iconType: 'tech'
  },
  {
    no: '04',
    stage: 'Tahap 04',
    shortLabel: 'Psikotes',
    category: 'Asesmen',
    categoryColor: 'text-purple-700 bg-purple-50 border-purple-200/80',
    title: 'Psikotes Terstandar',
    desc: 'Pengujian penalaran logika, analitikal numerik, dan daya tahan stres profesional.',
    format: 'Asesmen Psikologi',
    iconType: 'psy'
  },
  {
    no: '05',
    stage: 'Tahap 05',
    shortLabel: 'Offering',
    category: 'Penawaran',
    categoryColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
    title: 'Offering Letter Resmi',
    desc: 'Pemberian penawaran resmi paket kompensasi, benefit kesehatan, dan hak kerja.',
    format: 'Dokumen Resmi HRD',
    iconType: 'offer'
  },
  {
    no: '06',
    stage: 'Tahap 06',
    shortLabel: 'Onboarding',
    category: 'Penyambutan',
    categoryColor: 'text-rose-700 bg-rose-50 border-rose-200/80',
    title: 'Hari Pertama & Onboarding',
    desc: 'Penyambutan resmi karyawan baru, serah terima fasilitas, dan pengenalan sistem kerja.',
    format: 'Kantor Pusat / Plant',
    iconType: 'rocket'
  }
];

function getStageIcon(type) {
  switch (type) {
    case 'doc':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'hr':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'tech':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'psy':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'offer':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'rocket':
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

// BASE API URL (Mendukung localhost & remote backend via env)
const API_BASE_URL = (typeof window !== 'undefined' && window.__API_URL__) || 
  import.meta.env.VITE_API_BASE_URL || 
  'http://localhost:5000';

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [jobs, setJobs] = useState([])
  const [jobsLoading, setJobsLoading] = useState(true)
  const [jobsError, setJobsError] = useState(null)
  
  // Fetch real jobs from Database API (Murni dari Database MySQL, bukan dummy)
  const fetchJobs = async () => {
    setJobsLoading(true);
    setJobsError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`);
      if (res.ok) {
        const data = await res.json();
        const formattedJobs = (data || []).map(j => ({
          id: j.id.toString(), // ID asli dari database MySQL
          title: j.title,
          department: j.department || 'Umum', // Dari relasi divisions di database
          location: j.location,
          type: j.type,
          experience: j.experience,
          education: j.education,
          deadline: j.deadline,
          description: j.description,
          requirements: Array.isArray(j.requirements) ? j.requirements : [],
          benefits: Array.isArray(j.benefits) ? j.benefits : []
        }));
        setJobs(formattedJobs);
      } else {
        setJobs([]);
        setJobsError(`Gagal mengambil data dari database server (HTTP ${res.status})`);
      }
    } catch (err) {
      console.warn('Gagal koneksi ke database API:', err);
      setJobs([]);
      setJobsError('Tidak dapat terhubung ke database backend di ' + API_BASE_URL);
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Hero Background Slideshow State & Timer (Berganti otomatis setiap 5 detik)
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Search & Filters Karir
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedDept, setSelectedDept] = useState('')

  // Modals and Page state
  const [selectedJob, setSelectedJob] = useState(null)
  const [applyModalJob, setApplyModalJob] = useState(null)
  const [trackingCode, setTrackingCode] = useState('')
  const [trackedResult, setTrackedResult] = useState(null)
  const [applySuccess, setApplySuccess] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Listen to hash changes (support direct link / navigation)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#lacak') {
        setActiveTab('lacak')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#admin') {
        setActiveTab('admin')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#karir') {
        setActiveTab('karir')
      } else if (hash === '#home' || hash === '') {
        setActiveTab('home')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // ================= ADMIN DASHBOARD STATE & HANDLERS =================
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem('lisa_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [adminLoginEmail, setAdminLoginEmail] = useState('admin@perusahaan.com');
  const [adminLoginPassword, setAdminLoginPassword] = useState('admin123');
  const [adminLoginError, setAdminLoginError] = useState('');
  const [adminLoginLoading, setAdminLoginLoading] = useState(false);

  const [adminStats, setAdminStats] = useState({ 
    total: 0, 
    administrasi: 0, 
    wawancaraHR: 0, 
    wawancaraUser: 0, 
    psikotes: 0, 
    offering: 0, 
    onboarding: 0, 
    ditolak: 0, 
    divisions: [] 
  });
  const [adminApplications, setAdminApplications] = useState([]);
  const [adminFilterDiv, setAdminFilterDiv] = useState('all');
  const [adminFilterStatus, setAdminFilterStatus] = useState('all');
  const [adminSearch, setAdminSearch] = useState('');
  const [adminLoading, setAdminLoading] = useState(false);

  const [adminManageModal, setAdminManageModal] = useState(null);
  const [adminTargetStatus, setAdminTargetStatus] = useState('Administrasi & Verifikasi Dokumen');
  const [adminTargetNotes, setAdminTargetNotes] = useState('');
  const [adminStatusSaving, setAdminStatusSaving] = useState(false);

  // Admin Sub-Tab: 'applications' (Kelola Pelamar) vs 'jobs' (Kelola Lowongan)
  const [adminActiveTab, setAdminActiveTab] = useState('applications');

  // Admin Job Management States
  const [adminJobs, setAdminJobs] = useState([]);
  const [adminJobsLoading, setAdminJobsLoading] = useState(false);
  const [adminJobFilterDiv, setAdminJobFilterDiv] = useState('all');
  const [adminJobFilterStatus, setAdminJobFilterStatus] = useState('all');
  const [adminJobSearch, setAdminJobSearch] = useState('');

  // Modal Tambah / Edit Lowongan
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobModalMode, setJobModalMode] = useState('add'); // 'add' | 'edit'
  const [jobModalSaving, setJobModalSaving] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    id: null,
    title: '',
    division_id: 1,
    location: 'Surabaya (Head Office)',
    type: 'Full Time',
    experience: 'Min. 2-3 Tahun',
    education: 'S1 Teknik Sipil',
    deadline: '30 November 2026',
    status: 'OPEN',
    description: '',
    requirements: '',
    benefits: ''
  });

  // Fetch admin stats & applications
  const fetchAdminData = async () => {
    setAdminLoading(true);
    try {
      // 1. Fetch Stats
      const statsRes = await fetch(`${API_BASE_URL}/api/applications/admin/stats`);
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setAdminStats(statsData);
      }

      // 2. Fetch Applications
      const params = new URLSearchParams();
      if (adminFilterDiv !== 'all') params.append('division', adminFilterDiv);
      if (adminFilterStatus !== 'all') params.append('status', adminFilterStatus);
      if (adminSearch.trim()) params.append('search', adminSearch.trim());

      const listRes = await fetch(`${API_BASE_URL}/api/applications/admin/list?${params.toString()}`);
      if (listRes.ok) {
        const listData = await listRes.json();
        setAdminApplications(listData);
      }
    } catch (err) {
      console.log('Gagal mengambil data admin dari server:', err.message);
    } finally {
      setAdminLoading(false);
    }
  };

  // Fetch Admin All Jobs
  const fetchAdminJobs = async () => {
    setAdminJobsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/admin/all`);
      if (res.ok) {
        const data = await res.json();
        setAdminJobs(data);
      }
    } catch (err) {
      console.warn('Gagal memuat lowongan admin:', err);
    } finally {
      setAdminJobsLoading(false);
    }
  };

  // Trigger fetch when on admin tab and logged in
  useEffect(() => {
    if (activeTab === 'admin' && adminUser) {
      fetchAdminData();
      fetchAdminJobs();
    }
  }, [activeTab, adminUser, adminFilterDiv, adminFilterStatus]);

  // Handle Admin Login
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminLoginLoading(true);
    setAdminLoginError('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminLoginEmail, password: adminLoginPassword })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAdminUser(data.user);
        try { localStorage.setItem('lisa_admin_user', JSON.stringify(data.user)); } catch {}
      } else {
        setAdminLoginError(data.error || 'Email atau password salah');
      }
    } catch (err) {
      console.error(err);
      if (adminLoginEmail === 'admin@perusahaan.com' && adminLoginPassword === 'admin123') {
        const fallbackUser = { id: 1, name: 'Super Admin HRD', email: 'admin@perusahaan.com', role: 'Admin' };
        setAdminUser(fallbackUser);
        try { localStorage.setItem('lisa_admin_user', JSON.stringify(fallbackUser)); } catch {}
      } else {
        setAdminLoginError('Tidak dapat menghubungi server backend.');
      }
    } finally {
      setAdminLoginLoading(false);
    }
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    try { localStorage.removeItem('lisa_admin_user'); } catch {}
  };

  // Handle Update Status Pelamar
  const handleAdminUpdateStatus = async (e) => {
    e.preventDefault();
    if (!adminManageModal) return;
    setAdminStatusSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/${adminManageModal.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: adminTargetStatus,
          notes: adminTargetNotes
        })
      });
      if (res.ok) {
        const resData = await res.json().catch(() => ({}));
        if (resData.emailStatus?.sent) {
          alert(`Status pelamar "${adminManageModal.applicant_name}" berhasil diperbarui menjadi "${adminTargetStatus}"!\n\nEmail notifikasi resmi telah berhasil dikirimkan ke: ${adminManageModal.applicant_email}`);
        } else if (resData.emailStatus?.simulated) {
          alert(`Status pelamar "${adminManageModal.applicant_name}" berhasil diperbarui menjadi "${adminTargetStatus}" di database!\n\n⚠️ Catatan Pengiriman Email:\nEmail ke "${adminManageModal.applicant_email}" belum terkirim ke internet karena akun email pengirim (SMTP_USER & SMTP_PASS) belum disetel di file server/.env.`);
        } else {
          alert(`Status pelamar "${adminManageModal.applicant_name}" berhasil diperbarui menjadi "${adminTargetStatus}"!`);
        }
        setAdminManageModal(null);
        fetchAdminData();
      } else {
        const err = await res.json().catch(() => ({}));
        alert(`Gagal memperbarui status: ${err.error || 'Terjadi kesalahan'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi backend.');
    } finally {
      setAdminStatusSaving(false);
    }
  };

  // Handle Hapus Lamaran
  const handleAdminDeleteApp = async (id, name) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus data pelamar ${name}? Berkas CV yang tersimpan di server juga akan dihapus permanen.`)) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/admin/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchAdminData();
      } else {
        alert('Gagal menghapus lamaran.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi backend.');
    }
  };

  // ================= ADMIN JOB MANAGEMENT HANDLERS =================
  // Buka Modal Tambah Lowongan
  const handleOpenAddJobModal = () => {
    setJobModalMode('add');
    setJobFormData({
      id: null,
      title: '',
      division_id: 1,
      location: 'Surabaya (Head Office)',
      type: 'Full Time',
      experience: 'Min. 2-3 Tahun',
      education: 'S1 Teknik Sipil',
      deadline: '30 November 2026',
      status: 'OPEN',
      description: '',
      requirements: '',
      benefits: ''
    });
    setJobModalOpen(true);
  };

  // Buka Modal Edit Lowongan
  const handleOpenEditJobModal = (job) => {
    setJobModalMode('edit');
    const reqText = Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || '');
    const benText = Array.isArray(job.benefits) ? job.benefits.join('\n') : (job.benefits || '');

    setJobFormData({
      id: job.id,
      title: job.title || '',
      division_id: job.division_id || 1,
      location: job.location || 'Surabaya (Head Office)',
      type: job.type || 'Full Time',
      experience: job.experience || 'Min. 2 Tahun',
      education: job.education || 'S1',
      deadline: job.deadline || 'Terbuka',
      status: job.status || 'OPEN',
      description: job.description || '',
      requirements: reqText,
      benefits: benText
    });
    setJobModalOpen(true);
  };

  // Simpan Lowongan (Tambah Baru atau Update)
  const handleSaveJob = async (e) => {
    e.preventDefault();
    if (!jobFormData.title.trim()) {
      alert('Judul lowongan pekerjaan wajib diisi!');
      return;
    }

    setJobModalSaving(true);
    try {
      const reqList = jobFormData.requirements
        .split('\n')
        .map(r => r.trim())
        .filter(r => r.length > 0);

      const benList = jobFormData.benefits
        .split('\n')
        .map(b => b.trim())
        .filter(b => b.length > 0);

      const payload = {
        title: jobFormData.title.trim(),
        division_id: parseInt(jobFormData.division_id, 10) || 1,
        location: jobFormData.location.trim(),
        type: jobFormData.type,
        experience: jobFormData.experience.trim(),
        education: jobFormData.education.trim(),
        deadline: jobFormData.deadline.trim(),
        status: jobFormData.status,
        description: jobFormData.description.trim(),
        requirements: reqList,
        benefits: benList
      };

      const isEdit = jobModalMode === 'edit' && jobFormData.id;
      const url = isEdit 
        ? `${API_BASE_URL}/api/jobs/${jobFormData.id}`
        : `${API_BASE_URL}/api/jobs`;
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert(isEdit ? `Lowongan "${jobFormData.title}" berhasil diperbarui!` : `Lowongan baru "${jobFormData.title}" berhasil ditambahkan!`);
        setJobModalOpen(false);
        fetchAdminJobs();
        fetchJobs(); // Update public listing
      } else {
        const errJson = await res.json().catch(() => ({}));
        alert(`Gagal menyimpan lowongan: ${errJson.error || 'Terjadi kesalahan'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi server backend.');
    } finally {
      setJobModalSaving(false);
    }
  };

  // Toggle Cepat Status Lowongan (Buka / Tutup)
  const handleToggleJobStatus = async (job) => {
    const nextStatus = job.status === 'OPEN' ? 'CLOSED' : 'OPEN';
    const actionLabel = nextStatus === 'CLOSED' ? 'menutup lowongan' : 'mengaktifkan kembali lowongan';
    
    if (!window.confirm(`Apakah Anda yakin ingin ${actionLabel} "${job.title}"?`)) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/${job.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      if (res.ok) {
        fetchAdminJobs();
        fetchJobs();
      } else {
        alert('Gagal mengubah status lowongan.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi backend.');
    }
  };

  // Hapus Lowongan Kerja
  const handleDeleteJob = async (job) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus lowongan "${job.title}" secara permanen?`)) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/${job.id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        alert(`Lowongan "${job.title}" berhasil dihapus.`);
        fetchAdminJobs();
        fetchJobs();
      } else {
        alert('Gagal menghapus lowongan.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi backend.');
    }
  };

  // Filter Admin Jobs
  const filteredAdminJobs = adminJobs.filter(job => {
    const matchKeyword = (job.title || '').toLowerCase().includes(adminJobSearch.toLowerCase()) ||
                         (job.location || '').toLowerCase().includes(adminJobSearch.toLowerCase()) ||
                         (job.department || '').toLowerCase().includes(adminJobSearch.toLowerCase());
    const matchDiv = adminJobFilterDiv === 'all' || job.department === adminJobFilterDiv || job.division_id?.toString() === adminJobFilterDiv;
    const matchStatus = adminJobFilterStatus === 'all' || job.status === adminJobFilterStatus;
    return matchKeyword && matchDiv && matchStatus;
  });

  // Filter Jobs
  const filteredJobs = jobs.filter(job => {
    const matchKeyword = job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchKeyword.toLowerCase())
    const matchLocation = selectedLocation === '' || job.location.toLowerCase().includes(selectedLocation.toLowerCase())
    const matchDept = selectedDept === '' || job.department === selectedDept
    return matchKeyword && matchLocation && matchDept
  })

  // 6 Tahapan Seleksi Resmi PT Lisa Concrete Indonesia Sesuai Dokumen
  const OFFICIAL_RECRUITMENT_STAGES = [
    { 
      num: 1, 
      label: 'Administrasi & Verifikasi Dokumen', 
      desc: 'Pemeriksaan berkas CV, portofolio, dan keaslian dokumen kualifikasi.' 
    },
    { 
      num: 2, 
      label: 'Wawancara HR', 
      desc: 'Evaluasi kepribadian, integritas, dan keselarasan dengan budaya L.I.S.A.' 
    },
    { 
      num: 3, 
      label: 'Wawancara User', 
      desc: 'Uji kompetensi teknis bersama Division Lead / Engineering Manager.' 
    },
    { 
      num: 4, 
      label: 'Psikotes', 
      desc: 'Evaluasi psikologis, penalaran logika, dan analisa potensi profesional.' 
    },
    { 
      num: 5, 
      label: 'Offering Letter', 
      desc: 'Pemberian penawaran resmi paket kompensasi, benefit, dan hak kerja.' 
    },
    { 
      num: 6, 
      label: 'Onboarding', 
      desc: 'Penyambutan karyawan baru, pengenalan sistem, dan serah terima tugas.' 
    }
  ];

  // Helper untuk Membangun Status Tracking Berdasarkan 6 Tahapan Resmi
  const buildTrackingState = (appData, history = []) => {
    const isRejected = (appData.status || '').includes('Tolak') || 
                       (appData.status || '').includes('Tidak Lolos') || 
                       (appData.status || '').includes('Gugur');

    let currentStep = 1;
    const st = appData.status || '';
    if (st.includes('Administrasi') || st.includes('Review')) currentStep = 1;
    else if (st.includes('Wawancara HR')) currentStep = 2;
    else if (st.includes('Wawancara User')) currentStep = 3;
    else if (st.includes('Psikotes')) currentStep = 4;
    else if (st.includes('Offering')) currentStep = 5;
    else if (st.includes('Onboarding') || st === 'Diterima') currentStep = 6;

    const latestHistory = history.length > 0 ? history[0] : null;

    const steps = OFFICIAL_RECRUITMENT_STAGES.map(stage => {
      let isDone = false;
      let isActive = false;
      let isStepRejected = false;
      let stageDate = '-';
      let stageNote = '-';

      const matchedHist = history.find(h => 
        (h.status || '').toLowerCase().includes(stage.label.toLowerCase().slice(0, 8))
      );
      if (matchedHist) {
        stageDate = new Date(matchedHist.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        stageNote = matchedHist.notes || '-';
      }

      if (isRejected) {
        if (stage.num < currentStep) {
          isDone = true;
        } else if (stage.num === currentStep) {
          isStepRejected = true;
          stageDate = 'Tidak Lolos';
          stageNote = latestHistory?.notes || 'Kualifikasi saat ini belum memenuhi kriteria kebutuhan divisi.';
        } else {
          stageDate = 'Tahapan Berhenti';
        }
      } else {
        if (stage.num < currentStep) {
          isDone = true;
          if (stageDate === '-') stageDate = 'Selesai';
        } else if (stage.num === currentStep) {
          if (currentStep === 6 && st === 'Onboarding') {
            isDone = true;
            stageDate = 'Resmi Onboarding';
            stageNote = latestHistory?.notes || 'Selamat bergabung dengan keluarga besar PT Lisa Concrete Indonesia!';
          } else {
            isActive = true;
            stageDate = 'Sedang Berjalan';
            stageNote = latestHistory?.notes || 'Berkas/tahapan Anda sedang aktif dievaluasi oleh tim seleksi.';
          }
        } else {
          stageDate = stage.num === currentStep + 1 ? 'Tahap Berikutnya' : 'Menunggu Tahapan Sebelumnya';
        }
      }

      return {
        num: stage.num,
        label: stage.label,
        desc: stage.desc,
        done: isDone,
        active: isActive,
        rejected: isStepRejected,
        date: stageDate,
        note: stageNote
      };
    });

    let interviewDetails = null;
    if ((currentStep === 2 || currentStep === 3) && !isRejected) {
      interviewDetails = {
        interviewer: currentStep === 3 ? 'Division Lead / Engineering Manager' : 'HRD & Recruitment Specialist',
        platform: 'Kantor Pusat Surabaya / Ruang Rapat Lt. 2 (atau Google Meet)',
        notes: latestHistory?.notes || 'Harap mempersiapkan berkas dokumen asli, portofolio kerja, serta hadir 15 menit sebelum jadwal.',
        date: latestHistory ? new Date(latestHistory.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB' : 'Jadwal dikonfirmasi via email'
      };
    }

    return {
      code: appData.tracking_id,
      name: appData.applicant_name,
      jobTitle: appData.job_title,
      department: appData.division_name || 'Umum',
      location: 'Surabaya (Head Office)',
      submittedDate: new Date(appData.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: isRejected ? 'Tidak Lolos Seleksi' : (currentStep === 6 ? 'Diterima - Onboarding' : `Tahap ${appData.status} (Sedang Berjalan)`),
      currentStep,
      totalSteps: 6,
      isRejected,
      interviewDetails,
      steps
    };
  };

  // Open Full Tracking Page (with optional demo prefill)
  const handleOpenTracking = (sample = false) => {
    setActiveTab('lacak')
    setMobileMenuOpen(false)
    window.location.hash = '#lacak'
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (sample) {
      setTrackingCode('LISA-2026-0891')
      setTrackedResult({
        code: 'LISA-2026-0891',
        name: 'Budi Santoso, S.T.',
        jobTitle: 'Precast Civil Engineer & Drafter',
        department: 'Engineering & Technical',
        location: 'Surabaya (Head Office)',
        submittedDate: '04 September 2026',
        status: 'Tahap Wawancara User (Sedang Berjalan)',
        currentStep: 3,
        totalSteps: 6,
        isRejected: false,
        interviewDetails: {
          interviewer: 'Ir. Hendra Gunawan (Lead Engineering Manager)',
          platform: 'Kantor Pusat Surabaya / Ruang Rapat Lt. 2 (atau Google Meet)',
          notes: 'Harap mempersiapkan portofolio gambar kerja precast AutoCAD/Tekla dan dokumen asli ijazah.',
          date: '12 September 2026, 10:00 WIB'
        },
        steps: [
          { 
            num: 1, 
            label: 'Administrasi & Verifikasi Dokumen', 
            desc: 'Pemeriksaan berkas CV, portofolio, dan keaslian dokumen kualifikasi.',
            done: true, 
            date: '05 Sep 2026',
            note: 'Lolos kualifikasi administrasi & dokumen'
          },
          { 
            num: 2, 
            label: 'Wawancara HR', 
            desc: 'Evaluasi kepribadian, integritas, dan keselarasan dengan budaya L.I.S.A.',
            done: true, 
            date: '08 Sep 2026',
            note: 'Direkomendasikan lanjut ke tes kompetensi User'
          },
          { 
            num: 3, 
            label: 'Wawancara User', 
            desc: 'Uji kompetensi teknis bersama Division Lead / Engineering Manager.',
            done: false, 
            active: true, 
            date: '12 Sep 2026 (Sedang Berjalan)',
            note: 'Jadwal telah dikonfirmasi via email dan WhatsApp tim personalia'
          },
          { 
            num: 4, 
            label: 'Psikotes', 
            desc: 'Evaluasi psikologis, penalaran logika, dan analisa potensi profesional.',
            done: false, 
            date: 'Menunggu Hasil Wawancara User',
            note: 'Akan dijadwalkan otomatis setelah hasil evaluasi user dirilis'
          },
          { 
            num: 5, 
            label: 'Offering Letter', 
            desc: 'Pemberian penawaran resmi paket kompensasi, benefit, dan hak kerja.',
            done: false, 
            date: 'Tahap Berikutnya',
            note: '-'
          },
          { 
            num: 6, 
            label: 'Onboarding', 
            desc: 'Penyambutan karyawan baru, pengenalan sistem, dan serah terima tugas.',
            done: false, 
            date: 'Tahap Akhir',
            note: '-'
          }
        ]
      })
    }
  }

  // Track Application Handler (Sinkronisasi Database & Demo Mock)
  const handleTrackApplication = async (e) => {
    if (e) e.preventDefault()
    const code = trackingCode.trim()
    if (!code) {
      handleOpenTracking(true)
      return
    }

    if (code.toUpperCase() === 'LISA-2026-0891') {
      handleOpenTracking(true)
      return
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/track/${encodeURIComponent(code.toUpperCase())}`);
      if (res.ok) {
        const data = await res.json();
        const tracked = buildTrackingState(data.application, data.history || []);
        setTrackedResult(tracked);
      } else {
        alert(`Kode Lacak "${code}" tidak ditemukan di database. Silakan periksa kembali Tracking ID Anda.`);
      }
    } catch (err) {
      console.warn('Backend tidak terhubung, menampilkan preview demo:', err);
      handleOpenTracking(true);
    }
  }

  // Handle Apply Form
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applyTrackingResult, setApplyTrackingResult] = useState('')
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false)
  const [duplicatePrompt, setDuplicatePrompt] = useState(null)

  const handleApplySubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    // Ekstrak ID integer dari ID string mock (contoh: LISA-JOB-001 -> 1)
    let jobId = 1; 
    if (applyModalJob && applyModalJob.id) {
       const match = applyModalJob.id.toString().match(/\d+/);
       if (match) jobId = parseInt(match[0], 10);
    }
    
    const division = applyModalJob?.department || '';
    const title = applyModalJob?.title || '';
    const applicantName = formData.get('name') || '';

    formData.set('job_id', jobId);
    formData.set('divisionName', division);
    formData.set('jobTitle', title);

    try {
        // Kirim info divisi dan judul lowongan via URL query agar Multer langsung membacanya
        const queryParams = new URLSearchParams({
            divisionName: division,
            jobTitle: title,
            name: applicantName,
            job_id: jobId
        });

        const response = await fetch(`${API_BASE_URL}/api/applications?${queryParams.toString()}`, {
            method: 'POST',
            body: formData,
        });
        
        if (response.ok) {
            const data = await response.json();
            setApplyTrackingResult(data.tracking_id);
            setIsUpdateSuccess(data.isUpdated || false);
            setApplySuccess(true);
            setTimeout(() => {
              setApplySuccess(false)
              setIsUpdateSuccess(false)
              setApplyModalJob(null)
              setApplyTrackingResult('')
            }, 8000)
        } else if (response.status === 409) {
            const errJson = await response.json().catch(() => ({}));
            // Munculkan Verifikasi Konfirmasi Pembaruan Data
            setDuplicatePrompt({
                tracking_id: errJson.tracking_id,
                message: errJson.message,
                formData: formData,
                division: division,
                title: title,
                applicantName: applicantName,
                jobId: jobId
            });
        } else {
            const errJson = await response.json().catch(() => ({}));
            alert(`Gagal mengirim lamaran: ${errJson.error || response.statusText || 'Terjadi kesalahan pada server'}`);
        }
    } catch (error) {
        console.error(error);
        alert(`Tidak dapat terhubung ke backend. Pastikan server backend berjalan di ${API_BASE_URL}.`);
    } finally {
        setIsSubmitting(false);
    }
  }

  // Handle Konfirmasi Pembaruan (Update Lamaran & CV Lama)
  const handleConfirmUpdate = async () => {
    if (!duplicatePrompt) return;
    setIsSubmitting(true);
    try {
        const { formData, division, title, applicantName, jobId } = duplicatePrompt;
        formData.set('confirmUpdate', 'true');

        const queryParams = new URLSearchParams({
            divisionName: division,
            jobTitle: title,
            name: applicantName,
            job_id: jobId,
            confirmUpdate: 'true'
        });

        const response = await fetch(`${API_BASE_URL}/api/applications?${queryParams.toString()}`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            setDuplicatePrompt(null);
            setApplyTrackingResult(data.tracking_id);
            setIsUpdateSuccess(true);
            setApplySuccess(true);
            setTimeout(() => {
              setApplySuccess(false);
              setIsUpdateSuccess(false);
              setApplyModalJob(null);
              setApplyTrackingResult('');
            }, 8000);
        } else {
            const errJson = await response.json().catch(() => ({}));
            alert(`Gagal memperbarui lamaran: ${errJson.error || response.statusText || 'Terjadi kesalahan'}`);
        }
    } catch (error) {
        console.error(error);
        alert('Tidak dapat menghubungi backend.');
    } finally {
        setIsSubmitting(false);
    }
  }

  // Navigation and Filter Helpers
  const handleToHome = () => {
    setActiveTab('home')
    setMobileMenuOpen(false)
    window.location.hash = '#home'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToKarir = () => {
    setActiveTab('karir')
    setSelectedDept('')
    setMobileMenuOpen(false)
    window.location.hash = '#karir'
    setTimeout(() => {
      const karirEl = document.getElementById('karir')
      if (karirEl) {
        karirEl.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 50)
  }

  const handleSelectDepartment = (dept) => {
    setSelectedDept(dept)
    setActiveTab('karir')
    setMobileMenuOpen(false)
    window.location.hash = '#karir'
    setTimeout(() => {
      const karirEl = document.getElementById('karir')
      if (karirEl) {
        karirEl.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  const handleJumpSection = (id, tabName) => {
    setActiveTab(tabName)
    setMobileMenuOpen(false)
    window.location.hash = `#${id}`
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand selection:text-white w-full max-w-full overflow-x-clip">
      {/* TOP HEADER BAR (Hidden on mobile for clean sticky navbar) */}
      <div className="hidden sm:block w-full bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ISO 9001:2015 Certified Since 2004
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Member of <strong>DUSASPUN Group</strong></span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href="https://www.lisaconcrete.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-300 hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>🌐 Web Utama: www.lisaconcrete.com</span>
              <span>&rarr;</span>
            </a>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a 
              href="mailto:admpersonnel@lisaconcrete.com" 
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              ✉️ admpersonnel@lisaconcrete.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - Always Sticky Top on Mobile and Desktop */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleToHome(); }} className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
              <img 
                src="https://www.lisaconcrete.com/wp-content/uploads/2020/08/logoweb-300x128.png" 
                alt="PT Lisa Concrete Logo" 
                className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col border-l-2 border-brand pl-2 sm:pl-3 whitespace-nowrap min-w-0">
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors duration-300 leading-none truncate">
                  LISA CONCRETE
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-slate-500 group-hover:text-slate-700 tracking-wider mt-0.5 whitespace-nowrap transition-colors">
                  PT. Lisa Concrete Indonesia
                </span>
              </div>
            </a>

            {/* Desktop Navigation - All 1 Line Strictly No Wrap with Interactive Hover Popovers */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 font-bold text-xs uppercase tracking-wider text-slate-700">

              {/* KARIR WITH INTERACTIVE HOVER DROPDOWN (LOKER PER DIVISI) */}
              <div className="relative group py-2">
                <a 
                  href="#karir" 
                  onClick={(e) => { e.preventDefault(); handleToKarir(); }}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${activeTab === 'karir' ? 'text-brand bg-red-50 font-black' : 'hover:text-red-600 hover:bg-red-50/60 hover:scale-105'}`}
                >
                  <span>Karir</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse group-hover:bg-red-500 transition-colors"></span>
                  <svg className="w-3 h-3 text-slate-400 group-hover:text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Hover Dropdown displaying available Job Divisions */}
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 text-left normal-case">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Rekrutmen Resmi</span>
                        <h4 className="text-xs font-black text-slate-900">Lowongan Karir per Divisi</h4>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {jobs.length} Posisi Dibuka
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 mb-2">
                      Pilih divisi di bawah untuk melihat lowongan yang tersedia:
                    </p>

                    <div className="space-y-1.5">
                      {[
                        { dept: 'Engineering & Technical', icon: '📐', roles: 'Precast Civil Engineer & Drafter', loc: 'Surabaya (Head Office)' },
                        { dept: 'Quality Assurance & Lab', icon: '🔬', roles: 'QC Precast Inspector', loc: 'Ngoro Plant (Mojokerto)' },
                        { dept: 'Manufacturing & Plant Operation', icon: '🏗️', roles: 'Production Supervisor (Batching & Casting)', loc: 'Karangasem Plant (Bali)' },
                        { dept: 'Commercial & Marketing', icon: '💼', roles: 'Technical Sales & Project Marketing', loc: 'Surabaya / Jatim Area' },
                        { dept: 'HSE & Safety', icon: '🛡️', roles: 'Health, Safety & Environment (HSE) Officer', loc: 'Ngoro Plant (Mojokerto)' },
                      ].map((item) => (
                        <button
                          key={item.dept}
                          onClick={() => handleSelectDepartment(item.dept)}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-red-50/70 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-red-100 cursor-pointer"
                        >
                          <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-brand group-hover/item:text-white flex items-center justify-center text-sm shrink-0 transition-colors shadow-xs">
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <p className="text-xs font-bold text-slate-800 group-hover/item:text-brand truncate">
                                {item.dept}
                              </p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                1 Posisi
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 font-medium truncate mt-0.5">
                              {item.roles}
                            </p>
                            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                              📍 {item.loc}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => { setSelectedDept(''); handleToKarir(); }}
                        className="text-[11px] font-bold text-brand hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Lihat Semua {jobs.length} Posisi</span>
                        <span>&rarr;</span>
                      </button>
                      <button
                        onClick={() => handleOpenTracking()}
                        className="text-[10px] font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>🔍 Lacak Lamaran</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* LACAK LAMARAN BUTTON */}
              <div className="relative py-2">
                <button 
                  onClick={() => handleOpenTracking()}
                  className={`px-3.5 py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap font-bold text-xs normal-case cursor-pointer group ${
                    activeTab === 'lacak'
                      ? 'text-brand bg-red-50 font-black ring-1 ring-brand/30'
                      : 'text-slate-700 hover:text-red-600 hover:bg-red-50/60 hover:scale-105'
                  }`}
                >
                  <svg className="w-4 h-4 text-brand group-hover:text-red-600 group-hover:scale-110 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="whitespace-nowrap">Lacak Lamaran</span>
                </button>
              </div>
            </nav>

            {/* Action Buttons & Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Kontak Kami - Desktop Only (Keeps mobile navbar clean & uncrowded) */}
              <a 
                href="#kontak" 
                onClick={() => handleJumpSection('kontak', 'kontak')}
                className="hidden md:inline-flex group bg-brand hover:bg-red-600 active:scale-95 text-white px-4 lg:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-brand/20 hover:shadow-red-600/40 hover:scale-105 items-center gap-2 whitespace-nowrap shrink-0"
              >
                <svg className="w-4 h-4 shrink-0 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="whitespace-nowrap">Kontak Kami</span>
              </a>

              {/* Mobile Hamburger Button - High visibility & easy tap target */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-95 border border-slate-200 transition-all flex items-center justify-center cursor-pointer shadow-xs"
                aria-label="Toggle Menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-100 py-3 px-2 space-y-1.5 bg-white rounded-b-2xl shadow-xl animate-fade-in text-sm font-semibold max-h-[80vh] overflow-y-auto">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleToHome(); setMobileMenuOpen(false); }}
                className="px-3.5 py-2 rounded-xl hover:bg-slate-50 text-slate-800 flex items-center gap-2.5 font-bold"
              >
                <span>🏠</span>
                <span>Beranda</span>
              </a>

              <a 
                href="#tentang" 
                onClick={(e) => { e.preventDefault(); handleJumpSection('tentang', 'tentang'); setMobileMenuOpen(false); }}
                className="px-3.5 py-2 rounded-xl hover:bg-slate-50 text-slate-800 flex items-center gap-2.5 font-bold"
              >
                <span>🏢</span>
                <span>Tentang PT Lisa Concrete</span>
              </a>

              {/* Mobile Karir with Division Quick Filter Chips */}
              <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-100">
                <a 
                  href="#karir" 
                  onClick={(e) => { e.preventDefault(); handleToKarir(); setMobileMenuOpen(false); }}
                  className="px-2.5 py-1.5 rounded-xl hover:bg-white text-slate-900 flex items-center justify-between"
                >
                  <span className="font-bold flex items-center gap-2">
                    <span>💼</span>
                    <span>Karir &amp; Rekrutmen</span>
                  </span>
                  <span className="text-[10px] bg-brand text-white font-bold px-2 py-0.5 rounded-full">{jobs.length} Loker</span>
                </a>
                <div className="mt-1 space-y-1">
                  {[
                    { dept: 'Engineering & Technical', icon: '📐' },
                    { dept: 'Quality Assurance & Lab', icon: '🔬' },
                    { dept: 'Manufacturing & Plant Operation', icon: '🏗️' },
                    { dept: 'Commercial & Marketing', icon: '💼' },
                    { dept: 'HSE & Safety', icon: '🛡️' }
                  ].map(d => (
                    <button
                      key={d.dept}
                      onClick={() => { handleSelectDepartment(d.dept); setMobileMenuOpen(false); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-brand hover:bg-white flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>{d.icon}</span>
                      <span className="truncate">{d.dept}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { handleOpenTracking(); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3.5 py-2 rounded-xl flex items-center gap-2.5 font-bold cursor-pointer transition-colors ${
                  activeTab === 'lacak' ? 'text-brand bg-red-50 font-black' : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Lacak Lamaran</span>
              </button>

              <a 
                href="#kontak" 
                onClick={() => { handleJumpSection('kontak', 'kontak'); setMobileMenuOpen(false); }}
                className="px-3.5 py-2 rounded-xl hover:bg-slate-50 text-slate-800 flex items-center gap-2.5 font-bold"
              >
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Kontak Kami</span>
              </a>

              {/* Web Utama External Link */}
              <div className="pt-2 border-t border-slate-100">
                <a 
                  href="https://www.lisaconcrete.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3.5 py-2 rounded-xl bg-slate-900 text-amber-300 hover:text-white flex items-center justify-between text-xs font-bold transition-colors"
                >
                  <span>🌐 Kunjungi Web Utama</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CONDITIONAL CONTENT: DEDICATED LACAK LAMARAN PAGE vs HOME/KARIR PORTAL */}
      {activeTab === 'lacak' ? (
        <main className="min-h-screen bg-slate-50 py-8 sm:py-12 animate-fade-in flex-1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Breadcrumb & Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <button 
                  onClick={handleToHome}
                  className="hover:text-brand flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>🏠</span>
                  <span>Beranda</span>
                </button>
                <span>/</span>
                <button 
                  onClick={handleToKarir}
                  className="hover:text-brand cursor-pointer transition-colors"
                >
                  Karir &amp; Rekrutmen
                </button>
                <span>/</span>
                <span className="text-slate-900 font-bold">Lacak Status Lamaran</span>
              </div>

              <button 
                onClick={handleToKarir}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-brand hover:border-brand transition-all shadow-xs cursor-pointer"
              >
                <span>&larr;</span>
                <span>Kembali ke Lowongan Kerja</span>
              </button>
            </div>

            {/* Hero Header Box */}
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b1b36] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden mb-8">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-brand/40 text-brand-light text-[11px] font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Sistem Informasi Rekrutmen Resmi
                </span>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
                  Lacak Status Rekrutmen Pelamar
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Pantau seluruh perkembangan tahapan seleksi berkas hingga penawaran kerja secara transparan dan berkala. Masukkan nomor registrasi lamaran atau alamat email Anda di bawah ini.
                </p>
              </div>
            </div>

            {/* Search Bar Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-5 sm:p-7 mb-8">
              <form onSubmit={handleTrackApplication} className="space-y-3">
                <label className="block text-xs sm:text-sm font-bold text-slate-900">
                  Cari Berkas Lamaran Anda
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      🔍
                    </span>
                    <input 
                      type="text" 
                      value={trackingCode}
                      onChange={(e) => setTrackingCode(e.target.value)}
                      placeholder="Masukkan Nomor Registrasi (misal: LISA-2026-0891) atau Email Anda" 
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none text-xs sm:text-sm transition-all"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-7 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Cek Status</span>
                    <span>&rarr;</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500">
                  <span>Format nomor registrasi: <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono font-semibold">LISA-2026-0891</code></span>
                  <button
                    type="button"
                    onClick={() => handleOpenTracking(true)}
                    className="text-brand font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>⚡ Coba Contoh Data Pelamar (Simulasi)</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Tracked Result View or Initial Info Cards */}
            {trackedResult ? (
              <div className="space-y-6 animate-fade-in">
                {/* Candidate Profile Summary Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white font-black text-xl flex items-center justify-center shadow-md shadow-brand/20 shrink-0">
                        {trackedResult.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-lg sm:text-xl font-black text-slate-900">
                            {trackedResult.name}
                          </h2>
                          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 font-bold text-[10px] rounded-md uppercase tracking-wider">
                            {trackedResult.code}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-600">
                          Posisi: <span className="text-brand font-black">{trackedResult.jobTitle}</span>
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Divisi {trackedResult.department} • Penempatan {trackedResult.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0 bg-amber-50/80 md:bg-transparent p-4 md:p-0 rounded-2xl border border-amber-200/60 md:border-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Status Terkini
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-black text-xs rounded-full border ${
                        trackedResult.isRejected
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-amber-100 text-amber-900 border-amber-300'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${trackedResult.isRejected ? 'bg-rose-600' : 'bg-amber-500 animate-pulse'}`}></span>
                        {trackedResult.status}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Tgl Pengajuan: {trackedResult.submittedDate}
                      </span>
                    </div>
                  </div>

                  {/* Overall Progress Meter */}
                  <div className="pt-6">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                      <span>
                        {trackedResult.isRejected 
                          ? 'Tahapan Berhenti: Belum Lolos Seleksi' 
                          : `Tahapan Seleksi: ${trackedResult.steps.filter(s => s.done).length} dari ${trackedResult.totalSteps || 6} Tahap Selesai`}
                      </span>
                      <span className={trackedResult.isRejected ? 'text-rose-600 font-black' : 'text-brand font-black'}>
                        {trackedResult.isRejected 
                          ? 'Tidak Lolos' 
                          : `${Math.round((trackedResult.steps.filter(s => s.done).length / (trackedResult.totalSteps || 6)) * 100)}% Selesai`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-200">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          trackedResult.isRejected 
                            ? 'bg-rose-500' 
                            : 'bg-gradient-to-r from-brand via-amber-500 to-emerald-500'
                        }`} 
                        style={{ width: `${trackedResult.isRejected ? 100 : Math.max(12, Math.round((trackedResult.steps.filter(s => s.done).length / (trackedResult.totalSteps || 6)) * 100))}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Active Stage Callout Details (Wawancara User) */}
                {trackedResult.interviewDetails && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50/60 border border-red-200/80 rounded-3xl p-6 sm:p-7 shadow-xs">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                        📌
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-black text-slate-900 text-sm sm:text-base">
                            Informasi Wawancara User &amp; Evaluasi Teknis
                          </h3>
                          <span className="px-2 py-0.5 bg-red-100 text-brand text-[10px] font-bold rounded">
                            Tahap Berjalan
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-4">
                          Tim personalia telah mengonfirmasi jadwal sesi wawancara teknis Anda dengan rincian sebagai berikut:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white/90 p-4 rounded-2xl border border-red-100 mb-3">
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">Jadwal Sesi</p>
                            <p className="font-bold text-slate-900 mt-0.5">🗓️ {trackedResult.interviewDetails.date}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">Pewawancara</p>
                            <p className="font-bold text-slate-900 mt-0.5">👤 {trackedResult.interviewDetails.interviewer}</p>
                          </div>
                          <div className="sm:col-span-2 pt-2 border-t border-slate-100">
                            <p className="text-[10px] uppercase font-bold text-slate-400">Lokasi / Media Pertemuan</p>
                            <p className="font-bold text-slate-900 mt-0.5">📍 {trackedResult.interviewDetails.platform}</p>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-600 bg-amber-50 p-3 rounded-xl border border-amber-200/80 leading-relaxed">
                          💡 <strong>Catatan Persiapan:</strong> {trackedResult.interviewDetails.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stepper Breakdown: 6 Official Stages */}
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
                  <h3 className="font-black text-base text-slate-900 mb-6 flex items-center gap-2">
                    <span>📋</span>
                    <span>Rincian 6 Tahap Seleksi Resmi PT Lisa Concrete Indonesia</span>
                  </h3>

                  <div className="space-y-4">
                    {trackedResult.steps.map((step, idx) => (
                      <div 
                        key={idx}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          step.rejected
                            ? 'bg-rose-50/70 border-rose-300 ring-2 ring-rose-200'
                            : step.done
                              ? 'bg-emerald-50/40 border-emerald-200'
                              : step.active
                                ? 'bg-red-50/50 border-brand ring-2 ring-brand/20 shadow-sm'
                                : 'bg-slate-50 border-slate-200 opacity-75'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 mt-0.5 ${
                            step.rejected
                              ? 'bg-rose-600 text-white shadow-xs'
                              : step.done
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : step.active
                                  ? 'bg-brand text-white animate-pulse shadow-md shadow-brand/30'
                                  : 'bg-slate-200 text-slate-500'
                          }`}>
                            {step.rejected ? '✕' : step.done ? '✓' : step.num}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className={`text-xs sm:text-sm font-black ${
                                step.rejected ? 'text-rose-700' : step.active ? 'text-brand' : 'text-slate-900'
                              }`}>
                                {step.label}
                              </h4>
                              {step.rejected && (
                                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded-full">
                                  Tidak Lolos
                                </span>
                              )}
                              {step.done && (
                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                                  Selesai
                                </span>
                              )}
                              {step.active && (
                                <span className="px-2 py-0.5 bg-red-100 text-brand text-[10px] font-bold rounded-full animate-pulse">
                                  Sedang Berjalan
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed max-w-xl">
                              {step.desc}
                            </p>
                            {step.note && step.note !== '-' && (
                              <p className={`text-[11px] font-semibold mt-1 ${step.rejected ? 'text-rose-600' : 'text-slate-600'}`}>
                                Catatan: {step.note}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                          <p className="text-[10px] uppercase font-bold text-slate-400">Jadwal / Status</p>
                          <p className={`text-xs font-bold mt-0.5 ${
                            step.rejected ? 'text-rose-700 font-black' : step.active ? 'text-brand font-black' : step.done ? 'text-emerald-700' : 'text-slate-500'
                          }`}>
                            {step.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Tools & Help Box */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => { setTrackedResult(null); setTrackingCode(''); }}
                      className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      🔍 Lacak Pelamar Lain
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      🖨️ Cetak / Simpan PDF
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center sm:text-right">
                    Butuh bantuan tim personalia? Hubungi <a href="mailto:admpersonnel@lisaconcrete.com" className="text-brand font-bold hover:underline">admpersonnel@lisaconcrete.com</a>
                  </p>
                </div>
              </div>
            ) : (
              /* Initial Info & Help Guide (before tracking) */
              <div className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 font-black flex items-center justify-center text-lg mb-4">
                      ⚡
                    </div>
                    <h3 className="font-black text-slate-900 text-sm mb-2">Transparan &amp; Real-Time</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Setiap pembaruan status seleksi berkas hingga jadwal wawancara diinput langsung oleh tim HR personalia secara berkala.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brand font-black flex items-center justify-center text-lg mb-4">
                      🛡️
                    </div>
                    <h3 className="font-black text-slate-900 text-sm mb-2">6 Tahap Seleksi Resmi</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Alur seleksi jelas dan terukur: Berkas &rarr; Wawancara HR &rarr; Wawancara User &rarr; Psikotes &rarr; Offering &rarr; Onboarding.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 font-black flex items-center justify-center text-lg mb-4">
                      ⭐
                    </div>
                    <h3 className="font-black text-slate-900 text-sm mb-2">100% Bebas Biaya</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      PT Lisa Concrete Indonesia tidak pernah memungut biaya apapun dari pelamar dalam bentuk akomodasi, tiket, maupun registrasi.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                  <h3 className="font-black text-base text-slate-900 mb-4">
                    Panduan Cara Melacak Status Lamaran
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Cek Konfirmasi Lamaran</p>
                        <p className="text-slate-500 leading-relaxed">Periksa email masuk atau WhatsApp konfirmasi setelah Anda mengirimkan lamaran kerja.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Ketik Nomor Registrasi / Email</p>
                        <p className="text-slate-500 leading-relaxed">Salin Nomor Registrasi (LISA-XXXXXX) atau cukup gunakan alamat email aktif Anda.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Tekan "Cek Status"</p>
                        <p className="text-slate-500 leading-relaxed">Sistem akan menampilkan secara lengkap tahapan seleksi beserta jadwal wawancara.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">Ingin melihat contoh format status pelamar?</p>
                    <button
                      type="button"
                      onClick={() => handleOpenTracking(true)}
                      className="px-5 py-2.5 bg-brand/10 hover:bg-brand text-brand hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Lihat Simulasi Contoh Pelamar &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      ) : activeTab === 'admin' ? (
        !adminUser ? (
          /* LOGIN SCREEN FOR HRD ADMIN */
          <main className="min-h-screen bg-slate-900 py-16 px-4 flex items-center justify-center flex-1">
            <div className="max-w-md w-full bg-slate-950/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm text-white">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-3 shadow-lg shadow-brand/30">
                  L
                </div>
                <h2 className="text-xl font-black tracking-tight">Portal HRD &amp; Personalia</h2>
                <p className="text-xs text-slate-400 mt-1">Masuk untuk mengelola berkas pelamar &amp; unduh CV</p>
              </div>

              {adminLoginError && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/80 border border-red-800/80 text-red-300 text-xs text-center font-medium">
                  {adminLoginError}
                </div>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Email Administrator HRD</label>
                  <input 
                    type="email" 
                    value={adminLoginEmail}
                    onChange={(e) => setAdminLoginEmail(e.target.value)}
                    required
                    placeholder="admin@perusahaan.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Password</label>
                  <input 
                    type="password" 
                    value={adminLoginPassword}
                    onChange={(e) => setAdminLoginPassword(e.target.value)}
                    required
                    placeholder="••••••••" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-xs"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={adminLoginLoading}
                    className="w-full py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl shadow-lg shadow-brand/25 transition-all text-xs disabled:opacity-50 cursor-pointer"
                  >
                    {adminLoginLoading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}
                  </button>
                </div>

                <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-center">
                  <p>Kredensial Default:</p>
                  <p className="font-mono text-amber-400 font-bold mt-0.5">admin@perusahaan.com / admin123</p>
                </div>

                <div className="text-center pt-2">
                  <button 
                    type="button" 
                    onClick={handleToHome}
                    className="text-slate-400 hover:text-white transition-colors text-[11px] cursor-pointer"
                  >
                    &larr; Kembali ke Beranda Publik
                  </button>
                </div>
              </form>
            </div>
          </main>
        ) : (
          /* MAIN ADMIN DASHBOARD VIEW */
          <main className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 flex-1">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* TOP BAR DASHBOARD */}
              <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sistem Rekrutmen Terpadu</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    {adminActiveTab === 'applications' ? 'Dashboard Manajemen Pelamar' : 'Kelola Lowongan Pekerjaan'}
                  </h1>
                  <p className="text-xs text-slate-500">
                    {adminActiveTab === 'applications'
                      ? 'Kelola berkas masuk, sortir per divisi, dan perbarui tahapan seleksi'
                      : 'Tambah lowongan baru, kelola persyaratan kerja, dan atur status penerimaan pelamar'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => {
                      fetchAdminData();
                      fetchAdminJobs();
                    }}
                    disabled={adminLoading || adminJobsLoading}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className={adminLoading || adminJobsLoading ? 'animate-spin' : ''}>🔄</span>
                    <span>Refresh Data</span>
                  </button>

                  <button 
                    onClick={handleToHome}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    🌐 Lihat Web Publik
                  </button>

                  <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-bold text-slate-800">{adminUser.name}</p>
                      <p className="text-[10px] text-brand font-semibold">{adminUser.role || 'HRD'}</p>
                    </div>
                    <button 
                      onClick={handleAdminLogout}
                      className="px-3 py-2 bg-red-50 hover:bg-red-100 text-brand rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      title="Keluar"
                    >
                      Logout 🚪
                    </button>
                  </div>
                </div>
              </div>

              {/* TAB SWITCHER: MANAJEMEN PELAMAR vs KELOLA LOWONGAN */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-1">
                <button
                  onClick={() => setAdminActiveTab('applications')}
                  className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    adminActiveTab === 'applications'
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span>📁</span>
                  <span>Manajemen Berkas Pelamar ({adminStats.total || adminApplications.length})</span>
                </button>

                <button
                  onClick={() => {
                    setAdminActiveTab('jobs');
                    fetchAdminJobs();
                  }}
                  className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    adminActiveTab === 'jobs'
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span>💼</span>
                  <span>Kelola Lowongan Pekerjaan ({adminJobs.length})</span>
                </button>
              </div>

              {adminActiveTab === 'applications' ? (
                <>
                  {/* METRICS STATS CARDS (6 TAHAPAN RESMI REKRUTMEN + TOTAL & DITOLAK) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Total Pelamar</span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{adminStats.total}</p>
                  <span className="text-[10px] text-slate-500">Semua berkas</span>
                </div>

                <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-amber-700 tracking-wider">01. Administrasi</span>
                  <p className="text-xl sm:text-2xl font-black text-amber-700 mt-1">{adminStats.administrasi}</p>
                  <span className="text-[10px] text-amber-600">Verifikasi CV</span>
                </div>

                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-blue-700 tracking-wider">02. Wawancara HR</span>
                  <p className="text-xl sm:text-2xl font-black text-blue-700 mt-1">{adminStats.wawancaraHR}</p>
                  <span className="text-[10px] text-blue-600">Interview HR</span>
                </div>

                <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-indigo-700 tracking-wider">03. Wawancara User</span>
                  <p className="text-xl sm:text-2xl font-black text-indigo-700 mt-1">{adminStats.wawancaraUser}</p>
                  <span className="text-[10px] text-indigo-600">Tes Teknis</span>
                </div>

                <div className="bg-purple-50/70 p-3.5 rounded-2xl border border-purple-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-purple-700 tracking-wider">04. Psikotes</span>
                  <p className="text-xl sm:text-2xl font-black text-purple-700 mt-1">{adminStats.psikotes}</p>
                  <span className="text-[10px] text-purple-600">Uji Psikologis</span>
                </div>

                <div className="bg-cyan-50/70 p-3.5 rounded-2xl border border-cyan-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-cyan-700 tracking-wider">05. Offering</span>
                  <p className="text-xl sm:text-2xl font-black text-cyan-700 mt-1">{adminStats.offering}</p>
                  <span className="text-[10px] text-cyan-600">Penawaran Kerja</span>
                </div>

                <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 tracking-wider">06. Onboarding</span>
                  <p className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">{adminStats.onboarding}</p>
                  <span className="text-[10px] text-emerald-600">Karyawan Baru</span>
                </div>

                <div className="bg-rose-50/70 p-3.5 rounded-2xl border border-rose-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-rose-700 tracking-wider">Tidak Lolos</span>
                  <p className="text-xl sm:text-2xl font-black text-rose-700 mt-1">{adminStats.ditolak}</p>
                  <span className="text-[10px] text-rose-600">Belum sesuai</span>
                </div>
              </div>

              {/* FILTER & SEARCH BAR */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  {/* Filter Divisi */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Divisi:</span>
                    <select 
                      value={adminFilterDiv}
                      onChange={(e) => setAdminFilterDiv(e.target.value)}
                      className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand cursor-pointer"
                    >
                      <option value="all">Semua Divisi ({adminStats.divisions?.length || 0})</option>
                      {adminStats.divisions?.map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filter Status */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Tahapan:</span>
                    <select 
                      value={adminFilterStatus}
                      onChange={(e) => setAdminFilterStatus(e.target.value)}
                      className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand cursor-pointer"
                    >
                      <option value="all">Semua Tahapan Status</option>
                      <option value="Administrasi & Verifikasi Dokumen">01. Administrasi &amp; Verifikasi Dokumen</option>
                      <option value="Wawancara HR">02. Wawancara HR</option>
                      <option value="Wawancara User">03. Wawancara User</option>
                      <option value="Psikotes">04. Psikotes</option>
                      <option value="Offering Letter">05. Offering Letter</option>
                      <option value="Onboarding">06. Onboarding</option>
                      <option value="Tidak Lolos">Tidak Lolos / Ditolak</option>
                    </select>
                  </div>
                </div>

                {/* Search Box */}
                <div className="w-full md:w-80 relative">
                  <input 
                    type="text"
                    value={adminSearch}
                    onChange={(e) => setAdminSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchAdminData()}
                    placeholder="Cari nama, ID lacak, email..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand"
                  />
                  <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
                </div>
              </div>

              {/* TABEL DATA PELAMAR */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                    Daftar Berkas Masuk ({adminApplications.length} Pelamar)
                  </h3>
                  <span className="text-[11px] text-slate-500">Klik "Kelola Status" untuk update atau jadwalkan interview</span>
                </div>

                {adminLoading ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <span>Memuat data pelamar dari database...</span>
                  </div>
                ) : adminApplications.length === 0 ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    <p className="text-3xl mb-2">📁</p>
                    <p className="font-bold text-slate-600">Belum ada pelamar yang sesuai dengan kriteria filter.</p>
                    <p className="text-[11px] mt-1 text-slate-400">Silakan ubah filter atau tunggu pendaftaran baru masuk.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">ID Registrasi</th>
                          <th className="py-3 px-4">Pelamar &amp; Kontak</th>
                          <th className="py-3 px-4">Posisi Dilamar</th>
                          <th className="py-3 px-4">Divisi Folder</th>
                          <th className="py-3 px-4">Tanggal Masuk</th>
                          <th className="py-3 px-4">Berkas CV</th>
                          <th className="py-3 px-4">Status Seleksi</th>
                          <th className="py-3 px-4 text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {adminApplications.map((app) => {
                          const statusColors = {
                            'Administrasi & Verifikasi Dokumen': 'bg-amber-50 text-amber-700 border-amber-200',
                            'Wawancara HR': 'bg-blue-50 text-blue-700 border-blue-200',
                            'Wawancara User': 'bg-indigo-50 text-indigo-700 border-indigo-200',
                            'Psikotes': 'bg-purple-50 text-purple-700 border-purple-200',
                            'Offering Letter': 'bg-cyan-50 text-cyan-700 border-cyan-200',
                            'Onboarding': 'bg-emerald-50 text-emerald-700 border-emerald-200',
                            'Tidak Lolos': 'bg-rose-50 text-rose-700 border-rose-200',
                            'Ditolak': 'bg-rose-50 text-rose-700 border-rose-200',
                            // Legacy mapping
                            'Menunggu Review': 'bg-amber-50 text-amber-700 border-amber-200',
                            'Tahap Seleksi': 'bg-blue-50 text-blue-700 border-blue-200',
                            'Interview': 'bg-indigo-50 text-indigo-700 border-indigo-200',
                            'Diterima': 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          };
                          const badgeStyle = statusColors[app.status] || 'bg-slate-50 text-slate-700 border-slate-200';

                          return (
                            <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3.5 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                                {app.tracking_id}
                              </td>
                              <td className="py-3.5 px-4">
                                <p className="font-bold text-slate-900">{app.applicant_name}</p>
                                <p className="text-[11px] text-slate-500">{app.applicant_email}</p>
                                <p className="text-[11px] text-slate-400">WA: {app.applicant_phone || '-'}</p>
                              </td>
                              <td className="py-3.5 px-4 font-semibold text-slate-800">
                                {app.job_title}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="px-2.5 py-1 bg-slate-100 rounded-lg text-[11px] font-semibold text-slate-600 inline-block">
                                  📁 {app.division_name || 'Umum'}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                                {new Date(app.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <a 
                                  href={`${API_BASE_URL}${app.cv_path}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-brand rounded-xl font-bold text-[11px] border border-red-200 transition-colors"
                                >
                                  <span>📄</span>
                                  <span>Buka CV</span>
                                </a>
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border inline-block ${badgeStyle}`}>
                                  {app.status}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-center whitespace-nowrap">
                                <div className="inline-flex items-center gap-2">
                                  <button
                                    onClick={() => {
                                      setAdminManageModal(app);
                                      setAdminTargetStatus(app.status);
                                      setAdminTargetNotes('');
                                    }}
                                    className="px-3 py-1.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl text-xs transition-colors shadow-xs cursor-pointer"
                                  >
                                    Kelola Status
                                  </button>
                                  <button
                                    onClick={() => handleAdminDeleteApp(app.id, app.applicant_name)}
                                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                                    title="Hapus Lamaran"
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* KELOLA LOWONGAN PEKERJAAN VIEW */
            <>
              {/* METRICS STATS CARDS UNTUK LOWONGAN */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Total Lowongan</span>
                  <p className="text-2xl font-black text-slate-900 mt-1">{adminJobs.length}</p>
                  <span className="text-[11px] text-slate-500">Semua formasi jabatan</span>
                </div>

                <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 tracking-wider">Lowongan Aktif</span>
                  <p className="text-2xl font-black text-emerald-700 mt-1">
                    {adminJobs.filter(j => j.status === 'OPEN').length}
                  </p>
                  <span className="text-[11px] text-emerald-600">Terbuka untuk pelamar (OPEN)</span>
                </div>

                <div className="bg-slate-100/90 p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-slate-600 tracking-wider">Lowongan Ditutup</span>
                  <p className="text-2xl font-black text-slate-800 mt-1">
                    {adminJobs.filter(j => j.status === 'CLOSED').length}
                  </p>
                  <span className="text-[11px] text-slate-500">Pendaftaran ditutup (CLOSED)</span>
                </div>

                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-blue-700 tracking-wider">Total Berkas Terdaftar</span>
                  <p className="text-2xl font-black text-blue-700 mt-1">
                    {adminJobs.reduce((acc, curr) => acc + (parseInt(curr.applicant_count) || 0), 0)}
                  </p>
                  <span className="text-[11px] text-blue-600">Pelamar di seluruh lowongan</span>
                </div>
              </div>

              {/* FILTER & ACTION BAR */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleOpenAddJobModal}
                    className="px-4 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>➕</span>
                    <span>Tambah Lowongan Baru</span>
                  </button>

                  {/* Filter Divisi */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Divisi:</span>
                    <select
                      value={adminJobFilterDiv}
                      onChange={(e) => setAdminJobFilterDiv(e.target.value)}
                      className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand cursor-pointer"
                    >
                      <option value="all">Semua Divisi</option>
                      {(adminStats.divisions && adminStats.divisions.length > 0 ? adminStats.divisions : [
                        { id: 1, name: 'Teknik Sipil & Proyek' },
                        { id: 2, name: 'Produksi Beton & Operasional Pabrik' },
                        { id: 3, name: 'Quality Assurance & Quality Control' },
                        { id: 4, name: 'Kesehatan & Keselamatan Kerja (K3)' },
                        { id: 5, name: 'Engineering & Estimator' },
                        { id: 6, name: 'Pemasaran & Administrasi Proyek' }
                      ]).map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filter Status */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Status:</span>
                    <select
                      value={adminJobFilterStatus}
                      onChange={(e) => setAdminJobFilterStatus(e.target.value)}
                      className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand cursor-pointer"
                    >
                      <option value="all">Semua Status</option>
                      <option value="OPEN">🟢 Terbuka (OPEN)</option>
                      <option value="CLOSED">🔴 Ditutup (CLOSED)</option>
                    </select>
                  </div>
                </div>

                {/* Search Box */}
                <div className="w-full md:w-72 relative">
                  <input
                    type="text"
                    value={adminJobSearch}
                    onChange={(e) => setAdminJobSearch(e.target.value)}
                    placeholder="Cari nama lowongan, divisi, lokasi..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand"
                  />
                  <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
                </div>
              </div>

              {/* TABEL DATA LOWONGAN */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div>
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                      Daftar Formasi Lowongan Pekerjaan ({filteredAdminJobs.length} Posisi)
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Kelola lowongan aktif untuk tayang di halaman karir publik secara otomatis.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenAddJobModal}
                    className="px-3 py-1.5 bg-brand/10 hover:bg-brand/20 text-brand rounded-xl font-bold text-xs transition-colors cursor-pointer hidden sm:flex items-center gap-1.5"
                  >
                    <span>➕ Buat Lowongan Baru</span>
                  </button>
                </div>

                {adminJobsLoading ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <span>Memuat daftar lowongan pekerjaan...</span>
                  </div>
                ) : filteredAdminJobs.length === 0 ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    <p className="text-3xl mb-2">💼</p>
                    <p className="font-bold text-slate-600">Tidak ada data lowongan pekerjaan.</p>
                    <p className="text-[11px] mt-1 text-slate-400">Klik tombol "Tambah Lowongan Baru" di atas untuk menambahkan formasi posisi kerja.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Posisi &amp; Kualifikasi</th>
                          <th className="py-3 px-4">Divisi</th>
                          <th className="py-3 px-4">Lokasi &amp; Tipe</th>
                          <th className="py-3 px-4">Batas Lamaran</th>
                          <th className="py-3 px-4 text-center">Pelamar Masuk</th>
                          <th className="py-3 px-4 text-center">Status Pendaftaran</th>
                          <th className="py-3 px-4 text-center">Aksi HR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {filteredAdminJobs.map((job) => (
                          <tr key={job.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900 text-sm">{job.title}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 flex flex-wrap items-center gap-1.5">
                                <span>🎓 {job.education || 'S1 / D4'}</span>
                                <span>•</span>
                                <span>⏳ {job.experience || 'Min. 1-2 Tahun'}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-bold border border-slate-200 inline-block">
                                🏢 {job.division || job.department}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <div className="font-semibold text-slate-800">📍 {job.location}</div>
                              <div className="text-[11px] text-slate-400">{job.type}</div>
                            </td>
                            <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">
                              📅 {job.deadline || 'Terbuka'}
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-bold rounded-full text-[11px] border border-blue-200">
                                {job.applicant_count || 0} Berkas
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <button
                                onClick={() => handleToggleJobStatus(job)}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                                  job.status === 'OPEN'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                    : 'bg-slate-100 text-slate-500 border-slate-300 hover:bg-slate-200'
                                }`}
                                title="Klik untuk Buka/Tutup Lowongan Langsung"
                              >
                                <span className={`w-2 h-2 rounded-full ${job.status === 'OPEN' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                                <span>{job.status === 'OPEN' ? '🟢 DIBUKA' : '🔴 DITUTUP'}</span>
                              </button>
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  onClick={() => handleOpenEditJobModal(job)}
                                  className="px-3 py-1.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1"
                                  title="Edit Lowongan"
                                >
                                  <span>✏️</span>
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteJob(job)}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                                  title="Hapus Lowongan Permanen"
                                >
                                  🗑️
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

            {/* MODAL KELOLA STATUS & JADWAL INTERVIEW */}
            {adminManageModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
                <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl text-slate-800 border border-slate-200">
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">Kelola Berkas Pelamar</span>
                      <h3 className="text-lg font-black text-slate-900">{adminManageModal.applicant_name}</h3>
                      <p className="text-xs text-slate-500">Melamar untuk: <strong>{adminManageModal.job_title}</strong></p>
                    </div>
                    <button 
                      onClick={() => setAdminManageModal(null)}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 text-sm cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mb-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs flex justify-between items-center">
                    <div>
                      <p className="text-slate-500 text-[11px]">Kode Lacak Pelamar:</p>
                      <p className="font-mono font-bold text-slate-800">{adminManageModal.tracking_id}</p>
                    </div>
                    <a 
                      href={`${API_BASE_URL}${adminManageModal.cv_path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-brand text-brand rounded-xl font-bold text-xs flex items-center gap-1 shadow-xs"
                    >
                      <span>📄 Buka File CV</span>
                    </a>
                  </div>

                  <form onSubmit={handleAdminUpdateStatus} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Perbarui Status Tahapan *</label>
                      <select 
                        value={adminTargetStatus}
                        onChange={(e) => setAdminTargetStatus(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-brand cursor-pointer"
                      >
                        <option value="Administrasi & Verifikasi Dokumen">01. Administrasi &amp; Verifikasi Dokumen</option>
                        <option value="Wawancara HR">02. Wawancara HR</option>
                        <option value="Wawancara User">03. Wawancara User</option>
                        <option value="Psikotes">04. Psikotes</option>
                        <option value="Offering Letter">05. Offering Letter</option>
                        <option value="Onboarding">06. Onboarding</option>
                        <option value="Tidak Lolos">Tidak Lolos / Ditolak</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Catatan / Jadwal Interview (Akan dikirim ke Email Pelamar):
                      </label>
                      <textarea 
                        rows="3"
                        value={adminTargetNotes}
                        onChange={(e) => setAdminTargetNotes(e.target.value)}
                        placeholder="Contoh: Selamat! Anda diundang untuk wawancara teknis pada Kamis, 18 Oktober 2026 jam 10:00 WIB via Google Meet link: meet.google.com/xyz..."
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand"
                      ></textarea>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-[11px] text-blue-700 flex items-start gap-2">
                      <span>💡</span>
                      <div>
                        <p className="font-bold">Notifikasi Email Otomatis</p>
                        <p className="text-blue-600 mt-0.5">
                          Sistem akan mengirimkan email resmi ke <strong>{adminManageModal.applicant_email}</strong>. Pastikan akun email pengirim telah dikonfigurasi di <code>server/.env</code> agar email terkirim langsung ke internet.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button 
                        type="button" 
                        onClick={() => setAdminManageModal(null)}
                        className="px-4 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit" 
                        disabled={adminStatusSaving}
                        className="px-5 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold shadow-md shadow-brand/20 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {adminStatusSaving ? 'Menyimpan & Mengirim Email...' : 'Simpan & Kirim Update'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* MODAL TAMBAH / EDIT LOWONGAN */}
            {jobModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
                <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl text-slate-800 border border-slate-200 my-8">
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 mb-5">
                    <div>
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
                        {jobModalMode === 'edit' ? 'Edit Formasi Lowongan' : 'Tambah Lowongan Pekerjaan Baru'}
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        {jobModalMode === 'edit' ? `Edit: ${jobFormData.title}` : 'Formulir Lowongan Kerja Baru'}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Posisi yang disimpan akan otomatis disinkronisasi ke katalog karir publik.
                      </p>
                    </div>
                    <button 
                      onClick={() => setJobModalOpen(false)}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 text-sm cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSaveJob} className="space-y-4 text-xs">
                    {/* Baris 1: Judul Posisi & Divisi */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Nama Posisi / Jabatan *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobFormData.title}
                          onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                          placeholder="Contoh: Civil Site Engineer"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Departemen / Divisi *
                        </label>
                        <select
                          value={jobFormData.division_id}
                          onChange={(e) => setJobFormData({ ...jobFormData, division_id: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand cursor-pointer"
                        >
                          {(adminStats.divisions && adminStats.divisions.length > 0 ? adminStats.divisions : [
                            { id: 1, name: 'Teknik Sipil & Proyek' },
                            { id: 2, name: 'Produksi Beton & Operasional Pabrik' },
                            { id: 3, name: 'Quality Assurance & Quality Control' },
                            { id: 4, name: 'Kesehatan & Keselamatan Kerja (K3)' },
                            { id: 5, name: 'Engineering & Estimator' },
                            { id: 6, name: 'Pemasaran & Administrasi Proyek' }
                          ]).map((d) => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Baris 2: Lokasi Penempatan, Tipe Kerja, Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Lokasi Penempatan *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobFormData.location}
                          onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                          placeholder="Contoh: Surabaya / Proyek IKN"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Tipe Ikatan Kerja *
                        </label>
                        <select
                          value={jobFormData.type}
                          onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand cursor-pointer"
                        >
                          <option value="Full Time">Full Time</option>
                          <option value="Kontrak Proyek">Kontrak Proyek</option>
                          <option value="Internship / Magang">Internship / Magang</option>
                          <option value="Part Time">Part Time</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Status Penerimaan *
                        </label>
                        <select
                          value={jobFormData.status}
                          onChange={(e) => setJobFormData({ ...jobFormData, status: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand cursor-pointer"
                        >
                          <option value="OPEN">🟢 DIBUKA (OPEN)</option>
                          <option value="CLOSED">🔴 DITUTUP (CLOSED)</option>
                        </select>
                      </div>
                    </div>

                    {/* Baris 3: Pendidikan, Pengalaman, Batas Lamaran */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Minimal Pendidikan *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobFormData.education}
                          onChange={(e) => setJobFormData({ ...jobFormData, education: e.target.value })}
                          placeholder="Contoh: S1 Teknik Sipil"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Pengalaman Kerja *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobFormData.experience}
                          onChange={(e) => setJobFormData({ ...jobFormData, experience: e.target.value })}
                          placeholder="Contoh: Min. 2 Tahun / Fresh Graduate"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Batas Waktu Lamaran *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobFormData.deadline}
                          onChange={(e) => setJobFormData({ ...jobFormData, deadline: e.target.value })}
                          placeholder="Contoh: 30 November 2026"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:outline-none focus:border-brand"
                        />
                      </div>
                    </div>

                    {/* Ringkasan Pekerjaan */}
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Deskripsi &amp; Gambaran Tugas Pekerjaan *
                      </label>
                      <textarea
                        rows="3"
                        required
                        value={jobFormData.description}
                        onChange={(e) => setJobFormData({ ...jobFormData, description: e.target.value })}
                        placeholder="Jelaskan peran utama dan tanggung jawab posisi pekerjaan ini..."
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand"
                      ></textarea>
                    </div>

                    {/* Kualifikasi / Persyaratan (Per Baris) */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block font-bold text-slate-700">
                          Kualifikasi &amp; Persyaratan (Pisahkan setiap poin dengan baris baru / Enter) *
                        </label>
                        <span className="text-[10px] text-slate-400">1 baris = 1 butir kualifikasi</span>
                      </div>
                      <textarea
                        rows="4"
                        value={jobFormData.requirements}
                        onChange={(e) => setJobFormData({ ...jobFormData, requirements: e.target.value })}
                        placeholder="Contoh:
Pria/Wanita, Usia maks. 32 tahun
Pengalaman min. 2 tahun di bidang fabrikasi pracetak
Menguasai AutoCAD dan SAP2000
Bersedia ditempatkan di unit proyek luar kota"
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand font-mono"
                      ></textarea>
                    </div>

                    {/* Benefit / Fasilitas (Per Baris) */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block font-bold text-slate-700">
                          Benefit &amp; Fasilitas Kerja (Opsional, pisahkan setiap poin dengan Enter)
                        </label>
                        <span className="text-[10px] text-slate-400">1 baris = 1 butir fasilitas</span>
                      </div>
                      <textarea
                        rows="3"
                        value={jobFormData.benefits}
                        onChange={(e) => setJobFormData({ ...jobFormData, benefits: e.target.value })}
                        placeholder="Contoh:
Gaji kompetitif + Tunjangan Proyek
BPJS Kesehatan & Ketenagakerjaan
Akomodasi & mess proyek
Jenjang karir profesional di DUSASPUN Group"
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand font-mono"
                      ></textarea>
                    </div>

                    <div className="pt-3 flex justify-end gap-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setJobModalOpen(false)}
                        className="px-4 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={jobModalSaving}
                        className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold shadow-md shadow-brand/20 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {jobModalSaving ? 'Menyimpan Lowongan...' : (jobModalMode === 'edit' ? 'Simpan Perubahan' : 'Terbitkan Lowongan Baru')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </main>
        )
      ) : (
        <>
          {/* HERO SECTION */}
          <section id="home" className="relative w-full max-w-full bg-slate-950 text-white pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
            {/* Animated Lisa Concrete Background Slideshow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === heroSlide;
                return (
                  <div
                    key={idx}
                    className={`hero-bg-slide ${
                      isActive ? 'hero-bg-active opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="hero-bg-image"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                );
              })}

              {/* Subtle Natural Tint (Menjaga foto tetap terang & jelas terlihat, tanpa penutup tebal) */}
              <div className="absolute inset-0 bg-slate-950/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/15 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent z-10"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {/* Badge Rekrutmen */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-inner transition-all duration-300 hover:border-red-500 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-950/50 hover:scale-105 cursor-pointer group select-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300"></span>
                  <span className="transition-colors duration-300 group-hover:text-white">Portal Karir &amp; Rekrutmen Resmi</span>
                </div>

                {/* Headline: Berubah Merah saat Dilewati Kursor - Responsive Size for Mobile */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-white select-none">
                  <span className="inline-block transition-all duration-300 hover:text-red-500 hover:scale-[1.02] origin-left cursor-pointer">
                    BANGUN KARIR ANDA
                  </span> <br />
                  <span className="inline-block transition-all duration-300 hover:text-red-500 hover:scale-[1.02] origin-left cursor-pointer">
                    BERSAMA LISA CONCRETE
                  </span>
                </h1>

                {/* Deskripsi dengan Interactive Keyword Hover */}
                <p className="text-sm sm:text-base md:text-lg text-white/95 font-medium mb-6 sm:mb-10 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] transition-colors duration-300">
                  <span className="transition-all duration-300 hover:text-red-400 hover:underline decoration-red-500/50 underline-offset-4 cursor-pointer">
                    PT Lisa Concrete Indonesia (member of DUSASPUN Group)
                  </span>{' '}
                  mengundang talenta{' '}
                  <span className="transition-colors duration-300 hover:text-red-400 font-semibold cursor-pointer">teknik sipil</span>,{' '}
                  <span className="transition-colors duration-300 hover:text-red-400 font-semibold cursor-pointer">manufaktur beton pracetak</span>,{' '}
                  <span className="transition-colors duration-300 hover:text-red-400 font-semibold cursor-pointer">QC</span>, dan profesional muda berintegritas tinggi untuk berkarya dan berinovasi dalam membangun infrastruktur Indonesia.
                </p>

                {/* Quick Links & CTA Buttons - Responsive Stack on Mobile */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a 
                    href="#karir" 
                    onClick={() => handleJumpSection('karir', 'karir')}
                    className="w-full sm:w-auto justify-center group bg-brand hover:bg-red-600 active:scale-95 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-red-600/40 hover:scale-105 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <span className="transition-colors duration-300 group-hover:text-white">Lihat Lowongan Kerja ({jobs.length} Posisi)</span>
                    <svg 
                      className="w-4 h-4 shrink-0 text-white/80 transition-all duration-300 group-hover:text-white group-hover:translate-x-1.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <button 
                    onClick={() => handleOpenTracking()}
                    className="w-full sm:w-auto justify-center group bg-slate-900/90 hover:bg-red-950/80 active:scale-95 text-slate-200 hover:text-white border border-slate-600 hover:border-red-500 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer shadow-lg shadow-black/30 hover:shadow-red-900/40 hover:scale-105 backdrop-blur-sm"
                  >
                    <svg 
                      className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="transition-colors duration-300 group-hover:text-white">Lacak Status Lamaran</span>
                  </button>
                  <a 
                    href="https://www.lisaconcrete.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="justify-center sm:justify-start group text-xs text-amber-300 hover:text-white transition-all duration-300 flex items-center gap-2 font-bold px-3 py-2 drop-shadow-md hover:translate-x-1"
                  >
                    <svg 
                      className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-white transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="transition-colors duration-300 group-hover:text-red-400">Kunjungi Web Utama: www.lisaconcrete.com</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-amber-300 group-hover:text-white">&rarr;</span>
                  </a>
                </div>

                {/* Metrics: Micro-cards dengan Hover Glow & Red Accent - Responsive on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-700/60 drop-shadow-md">
                  <div className="group p-3 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:backdrop-blur-md hover:border hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/40 hover:-translate-y-1 cursor-pointer">
                    <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      1994
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider mt-1 font-semibold drop-shadow-sm group-hover:text-white transition-colors duration-300">
                      Tahun Berdiri
                    </p>
                  </div>
                  <div className="group p-3 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:backdrop-blur-md hover:border hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/40 hover:-translate-y-1 cursor-pointer">
                    <p className="text-2xl sm:text-3xl font-black text-amber-400 group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      ISO 9001
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider mt-1 font-semibold drop-shadow-sm group-hover:text-white transition-colors duration-300">
                      Sertifikasi Mutu (2004)
                    </p>
                  </div>
                  <div className="group p-3 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:backdrop-blur-md hover:border hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/40 hover:-translate-y-1 cursor-pointer">
                    <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      2 Plant
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider mt-1 font-semibold drop-shadow-sm group-hover:text-white transition-colors duration-300">
                      Ngoro &amp; Karangasem
                    </p>
                  </div>
                  <div className="group p-3 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:backdrop-blur-md hover:border hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/40 hover:-translate-y-1 cursor-pointer">
                    <p className="text-2xl sm:text-3xl font-black text-brand-light group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {jobs.length} Posisi
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider mt-1 font-semibold drop-shadow-sm group-hover:text-white transition-colors duration-300">
                      Loker Terbuka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicator Bar & Live Project Caption - Responsive Stack */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
              <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl bg-slate-900/70 hover:bg-slate-900/90 backdrop-blur-md border border-slate-800/80 hover:border-red-500/50 transition-all duration-300 text-xs shadow-lg hover:shadow-red-950/30">
                <div className="flex items-center gap-2 overflow-hidden w-full sm:w-auto">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 group-hover:bg-red-500 transition-colors duration-300"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 group-hover:bg-red-500 transition-colors duration-300"></span>
                  </span>
                  <span className="font-semibold text-slate-400 group-hover:text-slate-200 transition-colors duration-300 shrink-0 text-[11px] sm:text-xs">
                    Showcase:
                  </span>
                  <span className="text-amber-300 font-bold truncate transition-all duration-300 hover:text-red-400 cursor-pointer text-[11px] sm:text-xs">
                    {HERO_SLIDES[heroSlide]?.title}
                  </span>
                  <span className="text-slate-500 hidden md:inline">&mdash;</span>
                  <span className="text-slate-400 hidden md:inline truncate group-hover:text-slate-300 transition-colors duration-300">
                    {HERO_SLIDES[heroSlide]?.subtitle}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroSlide(idx)}
                        aria-label={`Slide ${idx + 1}: ${slide.title}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === heroSlide 
                            ? 'w-7 sm:w-8 bg-gradient-to-r from-red-500 to-amber-500 shadow-sm shadow-red-500/50' 
                            : 'w-2 bg-slate-700 hover:bg-red-500 hover:scale-125 hover:w-4'
                        }`}
                        title={slide.title}
                      />
                    ))}
                  </div>
                  <span className="ml-1 font-mono text-[10px] sm:text-[11px] text-slate-400 group-hover:text-white font-medium transition-colors duration-300">
                    {String(heroSlide + 1).padStart(2, '0')}/{String(HERO_SLIDES.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </section>

      {/* TENTANG KAMI & NILAI L.I.S.A */}
      <section id="tentang" className="py-14 sm:py-24 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="inline-block text-brand hover:text-white font-bold text-xs uppercase tracking-widest bg-red-50 hover:bg-red-600 px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs hover:scale-105">
                Profil Perusahaan
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 hover:text-red-600 leading-tight transition-colors duration-300 cursor-pointer">
                Sejarah Dedikasi PT Lisa Concrete Indonesia
              </h2>
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p className="transition-colors duration-300 hover:text-slate-900">
                  <strong className="hover:text-red-600 transition-colors cursor-pointer">PT Lisa Concrete Indonesia</strong> didirikan pada tahun <strong className="hover:text-red-600 transition-colors cursor-pointer">1994</strong> dan berkembang pesat sebagai salah satu produsen beton pracetak (precast concrete) terkemuka di Indonesia di bawah naungan <strong className="hover:text-red-600 transition-colors cursor-pointer">PT. Duta Sarana Perkasa (DUSASPUN Group)</strong>.
                </p>
                <p className="transition-colors duration-300 hover:text-slate-900">
                  Perjalanan diawali dengan dedikasi tinggi memproduksi pipa beton bertulang dan elemen pracetak bermutu tinggi untuk memenuhi kebutuhan berbagai proyek infrastruktur strategis di Jawa Timur dan penjuru Indonesia. Seiring pesatnya kepercayaan publik serta mitra BUMN maupun swasta, perusahaan terus berekspansi dengan fasilitas pabrik modern di <strong className="hover:text-red-600 transition-colors cursor-pointer">Ngoro (Mojokerto, Jawa Timur)</strong> dan fasilitas produksi di <strong className="hover:text-red-600 transition-colors cursor-pointer">Karangasem (Bali)</strong>.
                </p>
                <p className="transition-colors duration-300 hover:text-slate-900">
                  Sebagai pilar utama dari <strong className="hover:text-red-600 transition-colors cursor-pointer">DUSASPUN Group</strong>, PT Lisa Concrete Indonesia berkomitmen menghadirkan solusi rekayasa beton pracetak berstandar mutu tertinggi ISO 9001:2015 dengan kapasitas produksi andal dan pengiriman tepat waktu untuk memajukan pembangunan nasional.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand to-amber-500 rounded-3xl transform rotate-2 scale-105 opacity-20 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                <div className="relative bg-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800 hover:border-red-500/60 hover:shadow-red-950/40 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-black text-white hover:text-red-400 mb-5 sm:mb-6 flex items-center gap-2.5 transition-colors duration-300 cursor-pointer">
                    <span className="w-3 h-3 rounded-full bg-brand group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300"></span>
                    Visi &amp; Nilai Inti: "L . I . S . A"
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-1.5 sm:-mx-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-800/80 hover:border hover:border-red-500/40 hover:scale-[1.02] cursor-pointer group/item">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand group-hover/item:bg-red-600 group-hover/item:scale-110 text-white font-black flex items-center justify-center shrink-0 text-base sm:text-lg transition-all duration-300 shadow-md">
                        L
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover/item:text-red-400 text-xs sm:text-sm transition-colors duration-300">Lift the livelihood of communities &amp; care for climate</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 group-hover/item:text-slate-300 mt-0.5 transition-colors duration-300">Meningkatkan taraf hidup komunitas sekitar dan berdedikasi menjaga kelestarian lingkungan serta iklim.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-1.5 sm:-mx-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-800/80 hover:border hover:border-red-500/40 hover:scale-[1.02] cursor-pointer group/item">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand group-hover/item:bg-red-600 group-hover/item:scale-110 text-white font-black flex items-center justify-center shrink-0 text-base sm:text-lg transition-all duration-300 shadow-md">
                        I
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover/item:text-red-400 text-xs sm:text-sm transition-colors duration-300">Inspire positive change for country &amp; children</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 group-hover/item:text-slate-300 mt-0.5 transition-colors duration-300">Menginspirasi transformasi positif bagi kemajuan bangsa Indonesia dan generasi masa depan.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-1.5 sm:-mx-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-800/80 hover:border hover:border-red-500/40 hover:scale-[1.02] cursor-pointer group/item">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand group-hover/item:bg-red-600 group-hover/item:scale-110 text-white font-black flex items-center justify-center shrink-0 text-base sm:text-lg transition-all duration-300 shadow-md">
                        S
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover/item:text-red-400 text-xs sm:text-sm transition-colors duration-300">Strengthen partnerships with all stakeholders</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 group-hover/item:text-slate-300 mt-0.5 transition-colors duration-300">Memperkokoh relasi kemitraan yang transparan, profesional, dan saling menguntungkan dengan seluruh pemangku kepentingan.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-1.5 sm:-mx-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-800/80 hover:border hover:border-red-500/40 hover:scale-[1.02] cursor-pointer group/item">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand group-hover/item:bg-red-600 group-hover/item:scale-110 text-white font-black flex items-center justify-center shrink-0 text-base sm:text-lg transition-all duration-300 shadow-md">
                        A
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover/item:text-red-400 text-xs sm:text-sm transition-colors duration-300">Achieve consistent growth &amp; sustainability</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 group-hover/item:text-slate-300 mt-0.5 transition-colors duration-300">Mencapai pertumbuhan bisnis yang berkesinambungan dengan landasan inovasi teknologi beton mutakhir.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAHAPAN REKRUTMEN RESMI - ULTRA MODERN CONNECTED ROADMAP (NO EMOJIS, HIGH-END CORPORATE BENTO CARDS) */}
      <section id="tahapan" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 w-full max-w-full overflow-hidden relative">
        {/* Subtle Architectural Blueprint Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/70 text-brand text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs hover:bg-brand hover:text-white transition-all duration-300 cursor-pointer hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span>Roadmap Seleksi Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 hover:text-red-600 tracking-tight transition-colors duration-300 cursor-pointer">
              Tahapan Seleksi Rekrutmen
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Proses seleksi penerimaan talenta PT Lisa Concrete Indonesia berlangsung terstruktur, transparan, dan berbasis kompetensi melalui 6 tahapan resmi tanpa pungutan biaya apapun:
            </p>
          </div>

          {/* DESKTOP VIEW: Connected Flow Track & 6 Modern Bento Cards */}
          <div className="hidden lg:block">
            {/* Horizontal Milestone Tracker */}
            <div className="max-w-6xl mx-auto mb-10 px-6 relative">
              <div className="relative flex items-center justify-between">
                {/* Continuous connection track */}
                <div className="absolute left-8 right-8 top-4 -translate-y-1/2 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-500 opacity-60"></div>
                </div>

                {RECRUITMENT_STAGES.map((st, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group/node cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 group-hover/node:border-brand group-hover/node:bg-brand group-hover/node:text-white text-slate-700 font-mono text-xs font-black flex items-center justify-center shadow-md transition-all duration-300 group-hover/node:scale-115">
                      {st.no}
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 group-hover/node:text-brand mt-2 transition-colors whitespace-nowrap">
                      {st.shortLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Bento Modern Cards Grid */}
            <div className="grid grid-cols-6 gap-3.5 xl:gap-4 relative">
              {RECRUITMENT_STAGES.map((st, idx) => (
                <div 
                  key={idx}
                  className="relative bg-white rounded-2xl border border-slate-200/90 hover:border-red-400 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Top illuminated gradient micro-accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-amber-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Faint architectural watermark numeral in corner */}
                  <span className="absolute -bottom-3 -right-1 font-mono font-black text-6xl text-slate-100 group-hover:text-red-50/70 select-none pointer-events-none transition-colors duration-300">
                    {st.no}
                  </span>

                  <div className="relative z-10">
                    {/* Icon & Stage Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand/20 transition-all duration-300">
                        {getStageIcon(st.iconType)}
                      </div>
                      <span className="font-mono text-[10px] font-black text-slate-400 group-hover:text-brand bg-slate-100 group-hover:bg-red-50 border border-slate-200/60 group-hover:border-red-200 px-2 py-0.5 rounded-md transition-all">
                        {st.stage}
                      </span>
                    </div>

                    {/* Category Chip */}
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mb-2 transition-colors ${st.categoryColor}`}>
                      {st.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-black text-slate-900 text-xs sm:text-sm group-hover:text-red-600 transition-colors leading-snug">
                      {st.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-600 group-hover:text-slate-700 leading-relaxed mt-2 transition-colors">
                      {st.desc}
                    </p>
                  </div>

                  {/* Micro Footer */}
                  <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-medium text-slate-500 truncate">{st.format}</span>
                    <span className="font-bold text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all shrink-0 ml-1">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE & TABLET VIEW: Connected Vertical Timeline Pipeline */}
          <div className="lg:hidden relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-brand before:via-amber-400 before:to-emerald-500 before:opacity-50">
            {RECRUITMENT_STAGES.map((st, idx) => (
              <div key={idx} className="relative group cursor-pointer">
                {/* Timeline Node on the Left Track */}
                <div className="absolute -left-6 sm:-left-8 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand text-brand font-mono font-black text-[10px] flex items-center justify-center shadow-xs group-hover:scale-125 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {st.no}
                </div>

                {/* Modern Bento Card on the Right */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-red-400 transition-all duration-300 overflow-hidden relative">
                  {/* Top illuminated line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-amber-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Faint watermark number in corner */}
                  <span className="absolute -bottom-3 -right-1 font-mono font-black text-6xl text-slate-100/70 group-hover:text-red-50/70 select-none pointer-events-none transition-colors duration-300">
                    {st.no}
                  </span>

                  <div className="relative z-10 flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:scale-105 transition-all duration-300 shadow-xs">
                      {getStageIcon(st.iconType)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${st.categoryColor}`}>
                          {st.category}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-brand bg-slate-50 px-2 py-0.5 rounded">
                          {st.stage}
                        </span>
                      </div>
                      <h3 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                        {st.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {st.desc}
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-slate-500 font-medium">{st.format}</span>
                        <span className="font-bold text-brand group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Menuju Web Utama www.lisaconcrete.com */}
          <div className="mt-12 sm:mt-16 relative overflow-hidden bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 group">
            {/* Ambient gradient glow in corner */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand/30 transition-all duration-500"></div>

            <div className="relative z-10 max-w-xl text-center md:text-left">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                Website Resmi Perusahaan
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-400 transition-colors duration-300 cursor-pointer">
                Mencari Katalog Produk &amp; Portofolio Proyek?
              </h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Website ini difokuskan sebagai Portal Karir &amp; Rekrutmen. Informasi lengkap mengenai katalog produk beton pracetak dan portofolio proyek nasional dapat diakses langsung pada situs korporat utama kami.
              </p>
            </div>
            <a 
              href="https://www.lisaconcrete.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 w-full md:w-auto justify-center bg-brand hover:bg-red-600 active:scale-95 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-red-600/40 hover:scale-105 flex items-center gap-2 whitespace-nowrap shrink-0 group/btn"
            >
              <span>Kunjungi www.lisaconcrete.com</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* PORTAL KARIR & REKRUTMEN PT LISA CONCRETE INDONESIA */}
      <section id="karir" className="py-14 sm:py-24 bg-slate-900 text-white relative w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand/20 hover:bg-red-600 hover:text-white border border-brand/40 text-brand-light text-xs font-bold uppercase tracking-wider mb-3 transition-all duration-300 cursor-pointer hover:scale-105">
                Rekrutmen Resmi PT Lisa Concrete
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white hover:text-red-400 transition-colors duration-300 cursor-pointer">
                Tumbuh &amp; Membangun Bangsa Bersama Kami
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Kami mengundang para talenta teknik sipil, manufaktur, QC, dan profesional berintegritas tinggi untuk bergabung dalam keluarga besar PT Lisa Concrete Indonesia.
              </p>
            </div>

            {/* Quick Track Application CTA */}
            <div>
              <button 
                onClick={() => handleOpenTracking()}
                className="w-full sm:w-auto justify-center group bg-slate-800 hover:bg-slate-700 hover:border-red-500 hover:text-white text-slate-200 border border-slate-700 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-105 shadow-md hover:shadow-red-950/40"
              >
                <svg className="w-4 h-4 text-brand-light group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Lacak Lamaran yang Pernah Dikirim</span>
              </button>
            </div>
          </div>

          {/* Job Search & Filter Toolbar */}
          <div className="bg-slate-800/90 border border-slate-700 hover:border-red-500/50 p-3 sm:p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-2.5 sm:gap-3 transition-all duration-300">
            <div className="flex-1 flex items-center px-3 sm:px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
              <svg className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Cari judul posisi (misal: Civil Engineer, QC, Drafter)..."
                className="w-full bg-transparent border-none focus:outline-none text-xs text-white placeholder-slate-400"
              />
            </div>

            <div className="w-full md:w-56 flex items-center px-3 sm:px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none text-xs text-slate-300 cursor-pointer"
              >
                <option value="" className="bg-slate-900">Semua Penempatan</option>
                <option value="Surabaya" className="bg-slate-900">Surabaya (Head Office)</option>
                <option value="Ngoro" className="bg-slate-900">Ngoro Plant (Mojokerto)</option>
                <option value="Bali" className="bg-slate-900">Bali (Karangasem Plant)</option>
              </select>
            </div>

            <div className="w-full md:w-56 flex items-center px-3 sm:px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
              <select 
                value={selectedDept} 
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none text-xs text-slate-300 cursor-pointer"
              >
                <option value="" className="bg-slate-900">Semua Divisi</option>
                <option value="Engineering & Technical" className="bg-slate-900">Engineering & Technical</option>
                <option value="Quality Assurance & Lab" className="bg-slate-900">Quality Assurance & Lab</option>
                <option value="Commercial & Marketing" className="bg-slate-900">Commercial & Marketing</option>
                <option value="Manufacturing & Plant Operation" className="bg-slate-900">Manufacturing Plant</option>
                <option value="HSE & Safety" className="bg-slate-900">HSE & Safety</option>
              </select>
            </div>
          </div>

          {/* Job Listings Cards */}
          <div className="space-y-4">
            {jobsLoading ? (
              <div className="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-700 p-8">
                <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-slate-300 font-bold text-sm">Menghubungkan ke Database MySQL...</p>
                <p className="text-slate-500 text-xs mt-1">Mengambil formasi lowongan kerja resmi</p>
              </div>
            ) : jobsError ? (
              <div className="text-center py-12 bg-rose-950/30 rounded-2xl border border-rose-800/50 p-8">
                <p className="text-3xl mb-2">⚠️</p>
                <p className="text-rose-400 font-bold text-sm mb-1">{jobsError}</p>
                <p className="text-slate-400 text-xs max-w-md mx-auto mb-4 leading-relaxed">
                  Pastikan server backend Node.js aktif di <code>http://localhost:5000</code>. Jika membuka melalui GitHub Pages (HTTPS), browser memblokir request HTTP lokal (Mixed Content). Anda dapat membuka web secara lokal di <code>http://localhost:5173</code> atau mengizinkan Insecure Content di setelan browser.
                </p>
                <button
                  onClick={fetchJobs}
                  className="px-4 py-2 bg-brand hover:bg-red-600 text-white text-xs font-bold rounded-xl cursor-pointer shadow-md transition-all duration-300 hover:scale-105"
                >
                  Coba Hubungkan Ulang 🔄
                </button>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-14 bg-slate-800/40 rounded-2xl border border-slate-700 p-8">
                <p className="text-slate-400 text-sm mb-4">
                  {jobs.length === 0
                    ? 'Belum ada lowongan pekerjaan aktif di database saat ini.'
                    : 'Tidak ada lowongan yang sesuai kriteria pencarian.'}
                </p>
                {jobs.length > 0 && (
                  <button 
                    onClick={() => { setSearchKeyword(''); setSelectedLocation(''); setSelectedDept(''); }}
                    className="px-4 py-2 bg-brand hover:bg-red-600 text-white text-xs font-bold rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-slate-800/80 border border-slate-700/80 hover:border-red-500 hover:bg-slate-800 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-950/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 sm:px-3 py-1 bg-brand/20 group-hover:bg-red-600 group-hover:text-white text-brand-light text-[11px] font-bold rounded-lg border border-brand/30 group-hover:border-red-500 transition-all duration-300">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                        Batas Lamaran: <strong>{job.deadline}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 mb-2 transition-colors duration-300">
                      {job.title}
                    </h3>

                    <p className="text-xs text-slate-300 group-hover:text-slate-200 line-clamp-2 mb-4 leading-relaxed transition-colors">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                        💼 {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                        🎓 {job.education}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                        ⏳ {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full sm:w-auto">
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-slate-700 hover:bg-slate-600 hover:text-white hover:scale-105 text-slate-200 text-xs font-bold rounded-xl transition-all duration-300 text-center cursor-pointer shadow-xs"
                    >
                      Detail Kualifikasi
                    </button>
                    <button 
                      onClick={() => setApplyModalJob(job)}
                      className="w-full sm:w-auto px-6 py-2.5 bg-brand hover:bg-red-600 hover:scale-105 active:scale-95 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-md shadow-brand/20 hover:shadow-red-600/40 text-center cursor-pointer"
                    >
                      Lamar Sekarang
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      </>
      )}

      {/* FOOTER */}
      <footer id="kontak" className="w-full max-w-full overflow-hidden bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 bg-brand group-hover:bg-red-600 group-hover:scale-110 rounded-lg flex items-center justify-center text-white font-black text-lg transition-all duration-300 shadow-md">
                  L
                </div>
                <div>
                  <h3 className="text-white group-hover:text-red-400 font-black text-base tracking-wider transition-colors duration-300">
                    PT LISA CONCRETE INDONESIA
                  </h3>
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                    A Member of DUSASPUN Group
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed">
                Produsen beton pracetak terkemuka berstandar mutu ISO 9001 sejak 1994. Kanal ini dikhususkan sebagai portal resmi informasi karir dan rekrutmen pegawai.
              </p>
              <p className="text-slate-500 text-[11px]">
                Surabaya (Head Office) • Ngoro (Plant) • Bali (Branch &amp; Plant)
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Navigasi Portal</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#tentang" className="hover:text-red-400 hover:translate-x-1.5 transition-all duration-200 inline-block">Tentang Perusahaan</a></li>
                <li><a href="#karir" className="hover:text-red-400 hover:translate-x-1.5 transition-all duration-200 inline-block">Portal Karir &amp; Lowongan</a></li>
                <li><button onClick={() => handleOpenTracking()} className="hover:text-red-400 hover:translate-x-1.5 transition-all duration-200 text-left cursor-pointer inline-block">Lacak Status Pelamar</button></li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('admin'); window.location.hash = '#admin'; window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-red-400 text-amber-400 font-bold transition-all duration-200 text-left cursor-pointer flex items-center gap-1 hover:translate-x-1.5"
                  >
                    <span>🔐 Portal Masuk HRD / Admin</span>
                  </button>
                </li>
                <li>
                  <a 
                    href="https://www.lisaconcrete.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-red-400 text-amber-400 transition-all duration-200 flex items-center gap-1 font-semibold hover:translate-x-1.5"
                  >
                    <span>Website Utama: www.lisaconcrete.com</span>
                    <span>&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Kontak &amp; Personalia</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Email Rekrutmen: <a href="mailto:admpersonnel@lisaconcrete.com" className="text-slate-200 hover:text-red-400 font-semibold transition-colors duration-200">admpersonnel@lisaconcrete.com</a></li>
                <li>Web Utama: <a href="https://www.lisaconcrete.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-400 transition-colors duration-200">lisaconcrete.com</a></li>
                <li>Situs Induk: <span className="hover:text-red-400 transition-colors cursor-pointer">dusaspun.com</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} PT LISA CONCRETE INDONESIA. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="hover:text-slate-300 transition-colors">Your Innovative &amp; Trusted Partner</p>
          </div>
        </div>
      </footer>

      {/* MODAL: DETAIL LOWONGAN KERJA */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-5 sm:mb-6">
              <span className="px-3 py-1 bg-red-50 text-brand text-xs font-bold rounded-lg mb-2 inline-block">
                {selectedJob.department}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">{selectedJob.title}</h2>
              <p className="text-xs text-slate-500 flex flex-wrap items-center gap-3 sm:gap-4">
                <span>📍 {selectedJob.location}</span>
                <span>💼 {selectedJob.type}</span>
                <span>🎓 {selectedJob.education}</span>
                <span>⏳ {selectedJob.experience}</span>
              </p>
            </div>

            <div className="space-y-6 text-xs text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">Deskripsi Pekerjaan:</h4>
                <p className="leading-relaxed text-slate-600">{selectedJob.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">Kualifikasi &amp; Persyaratan:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">Benefit &amp; Fasilitas:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  {selectedJob.benefits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-2.5 sm:gap-3">
              <button 
                onClick={() => setSelectedJob(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Tutup
              </button>
              <button 
                onClick={() => {
                  const job = selectedJob
                  setSelectedJob(null)
                  setApplyModalJob(job)
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20 cursor-pointer"
              >
                Lamar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: FORMULIR LAMAR PEKERJAAN */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setApplyModalJob(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              ✕
            </button>

            {applySuccess ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {isUpdateSuccess ? 'Data & CV Berhasil Diperbarui!' : 'Lamaran Berhasil Terkirim!'}
                </h3>
                <p className="text-slate-600 text-xs max-w-md mx-auto">
                  {isUpdateSuccess 
                    ? <>Berkas dan CV terbaru Anda untuk posisi <strong>{applyModalJob.title}</strong> telah diperbarui dan menggantikan berkas lama di sistem HRD kami.</>
                    : <>Berkas lamaran untuk posisi <strong>{applyModalJob.title}</strong> di PT Lisa Concrete Indonesia telah masuk ke sistem HRD kami.</>
                  }
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-xl inline-block text-xs font-mono text-slate-600">
                  Kode Pelacakan Anda: <strong>{applyTrackingResult || `LISA-${Math.floor(100000 + Math.random() * 900000)}`}</strong>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">Formulir Lamaran Kerja</h3>
                <p className="text-xs text-slate-500 mb-5 sm:mb-6">
                  Posisi: <strong className="text-brand">{applyModalJob.title}</strong> ({applyModalJob.location})
                </p>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <input type="hidden" name="divisionName" value={applyModalJob.department || ''} />
                  <input type="hidden" name="jobTitle" value={applyModalJob.title || ''} />
                  <input type="hidden" name="job_id" value={applyModalJob.id || ''} />

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Sesuai KTP *</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      placeholder="Masukkan nama lengkap" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Aktif *</label>
                      <input 
                        required 
                        name="email"
                        type="email" 
                        placeholder="nama@email.com" 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nomor WhatsApp *</label>
                      <input 
                        required 
                        name="phone"
                        type="tel" 
                        placeholder="08xxxxxxxxxx" 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Pendidikan &amp; Universitas / Politeknik *</label>
                    <input 
                      required 
                      name="education"
                      type="text" 
                      placeholder="Contoh: S1 Teknik Sipil - Institut Teknologi Sepuluh Nopember (ITS)" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Upload Resume / CV (Format PDF, Maks. 5MB) *</label>
                    <input 
                      required 
                      name="cvFile"
                      type="file" 
                      accept=".pdf" 
                      className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
                    />
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button 
                      type="button" 
                      disabled={isSubmitting}
                      onClick={() => setApplyModalJob(null)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <span>Kirim Lamaran</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: VERIFIKASI KONFIRMASI PEMBARUAN DATA (2x VERIFIKASI) */}
      {duplicatePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-slate-800 border border-amber-200">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4 text-2xl font-bold shadow-inner">
              ⚠️
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">
              Konfirmasi Pembaruan Data
            </h3>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Email Anda sudah terdaftar pada lowongan ini dengan Kode Lacak: <strong className="text-brand bg-red-50 px-2 py-0.5 rounded font-mono">{duplicatePrompt.tracking_id}</strong>.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-5 text-[11px] text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Tindakan ini akan:</p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Memperbarui data profil Anda di database.</li>
                <li><strong>Menghapus file CV lama</strong> Anda dari server.</li>
                <li>Menyimpan file CV baru yang Anda lampirkan.</li>
                <li>Mempertahankan Kode Lacak yang sama (tidak membuat data ganda).</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 text-xs">
              <button 
                type="button" 
                disabled={isSubmitting}
                onClick={() => setDuplicatePrompt(null)}
                className="px-4 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50"
              >
                Batal
              </button>
              <button 
                type="button" 
                disabled={isSubmitting}
                onClick={handleConfirmUpdate}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold shadow-md shadow-amber-600/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Memperbarui...</span>
                  </>
                ) : (
                  <span>Ya, Perbarui Berkas Lamaran</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
