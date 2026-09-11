import React, { useState, useEffect } from 'react'

// DATA LOWONGAN KERJA PT LISA CONCRETE INDONESIA
const initialJobs = [
  {
    id: 'LISA-JOB-001',
    title: 'Precast Civil Engineer & Drafter',
    department: 'Engineering & Technical',
    location: 'Surabaya (Head Office)',
    type: 'Full Time',
    experience: 'Min. 2-3 Tahun',
    education: 'S1 Teknik Sipil',
    deadline: '20 Oktober 2026',
    description: 'Bertanggung jawab atas kalkulasi struktur beton pracetak, shop drawing detailing (AutoCAD/Tekla Structures), dan koordinasi metode instalasi erection bersama tim proyek lapangan.',
    requirements: [
      'Pendidikan S1 Teknik Sipil (IPK min. 3.00)',
      'Menguasai software AutoCAD, Tekla Structures, ETABS, atau SAP2000',
      'Memahami standar desain beton bertulang dan prategang (SNI / ACI / JIS)',
      'Pengalaman kerja min. 2 tahun di industri precast concrete atau kontraktor sipil',
      'Mampu membaca gambar kerja konstruksi dengan teliti dan bekerja sama dengan tim marketing/produksi'
    ],
    benefits: ['Gaji Pokok & Tunjangan Posisi Menarik', 'BPJS Ketenagakerjaan & Kesehatan', 'Bonus Tahunan & Kinerja Proyek', 'Pelatihan Sertifikasi Keahlian']
  },
  {
    id: 'LISA-JOB-002',
    title: 'Quality Control (QC) Precast Inspector',
    department: 'Quality Assurance & Lab',
    location: 'Ngoro Plant (Mojokerto, Jatim)',
    type: 'Full Time',
    experience: 'Min. 2 Tahun',
    education: 'D3/S1 Teknik Sipil / Teknik Material',
    deadline: '25 Oktober 2026',
    description: 'Melakukan pengujian slump test, uji kuat tekan beton (compression test), inspeksi pembesian cetakan bekisting, serta memastikan kepatuhan standar mutu ISO 9001:2015 di unit produksi.',
    requirements: [
      'Pendidikan D3/S1 Teknik Sipil atau Teknik Kimia/Material',
      'Memahami mix design beton, slump test, curing beton, dan toleransi dimensi precast',
      'Familiar dengan prosedur audit Sistem Manajemen Mutu ISO 9001',
      'Memiliki integritas tinggi, disiplin, dan teliti terhadap standar mutu',
      'Bersedia ditempatkan di Pabrik Ngoro, Mojokerto (Jawa Timur)'
    ],
    benefits: ['Tunjangan Lokasi Pabrik & Uang Makan', 'Fasilitas Mess / Akomodasi Karyawan Pabrik', 'Asuransi Kesehatan', 'Jenjang Karir Terbuka']
  },
  {
    id: 'LISA-JOB-003',
    title: 'Technical Sales & Project Marketing Executive',
    department: 'Commercial & Marketing',
    location: 'Surabaya / Jawa Timur Area',
    type: 'Full Time',
    experience: 'Min. 2 Tahun',
    education: 'S1 Teknik Sipil / Arsitektur / Manajemen',
    deadline: '30 Oktober 2026',
    description: 'Menangani tender proyek infrastruktur (BUMN Karya & Swasta), melakukan konsultasi teknis kebutuhan produk precast kepada konsultan/kontraktor, serta mencapai target penjualan regional.',
    requirements: [
      'Pendidikan S1 Teknik Sipil, Arsitektur, atau bidang terkait',
      'Memiliki jaringan relasi yang luas dengan kontraktor, BUMN, Dinas PUPR, atau pengembang properti',
      'Kemampuan presentasi teknis, negosiasi, dan komunikasi yang persuasif',
      'Memiliki kendaraan pribadi dan SIM A aktif',
      'Target-oriented dan memiliki daya juang tinggi'
    ],
    benefits: ['Komisi Penjualan Proyek yang Sangat Menarik', 'Tunjangan Transportasi & Komunikasi', 'Peluang Pengembangan Jaringan Industri']
  },
  {
    id: 'LISA-JOB-004',
    title: 'Production Supervisor (Batching & Casting)',
    department: 'Manufacturing & Plant Operation',
    location: 'Karangasem Plant (Bali)',
    type: 'Full Time',
    experience: 'Min. 3 Tahun',
    education: 'D3 / S1 Teknik Mesin / Sipil / Industri',
    deadline: '15 November 2026',
    description: 'Mengawasi alur proses batching plant, pengecoran (casting), pelepasan cetakan (demolding), perawatan beton (steam curing), dan manajemen tenaga kerja harian pabrik.',
    requirements: [
      'Pengalaman kerja min. 3 tahun di bidang manufaktur beton atau batching plant',
      'Memahami operasional mesin batching plant, overhead crane, dan hidrolik formwork',
      'Keahlian leadership dan problem-solving lapangan yang tangguh',
      'Bersedia penempatan di Plant Karangasem, Bali'
    ],
    benefits: ['Tunjangan Penempatan Bali & Fasilitas Mess', 'BPJS Komprehensif', 'Insentif Efisiensi Produksi']
  },
  {
    id: 'LISA-JOB-005',
    title: 'Health, Safety & Environment (HSE) Officer',
    department: 'HSE & Safety',
    location: 'Ngoro Plant (Mojokerto, Jatim)',
    type: 'Full Time',
    experience: 'Min. 2 Tahun',
    education: 'D3/S1 K3 / Teknik Lingkungan / Teknik Sipil',
    deadline: '28 Oktober 2026',
    description: 'Menerapkan SMK3, inspeksi keselamatan kerja alat berat crane dan area casting pabrik, mitigasi bahaya kerja, serta pengelolaan limbah produksi ramah lingkungan.',
    requirements: [
      'Memiliki sertifikat resmi Ahli K3 Umum (Kemnaker RI) aktif',
      'Pengalaman mengelola keselamatan kerja pada pabrik manufaktur berat atau konstruksi',
      'Mampu menyusun JSA (Job Safety Analysis) dan laporan investigasi insiden',
      'Tegas, proaktif, dan berorientasi pada zero accident'
    ],
    benefits: ['Tunjangan K3 Khusus', 'Fasilitas Kesehatan Lengkap', 'Program Sertifikasi Berkelanjutan']
  }
]

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [jobs, setJobs] = useState(initialJobs)
  
  // Fetch real jobs from Database API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/jobs');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const formattedJobs = data.map(j => ({
              id: j.id.toString(), // Use DB ID
              title: j.title,
              department: j.department, // From JOIN in API
              location: j.location,
              type: j.type,
              experience: j.experience,
              education: j.education,
              deadline: j.deadline,
              description: j.description,
              requirements: j.requirements || [],
              benefits: j.benefits || []
            }));
            setJobs(formattedJobs);
          }
        }
      } catch (err) {
        console.log('Backend not connected, using fallback initialJobs');
      }
    }
    fetchJobs();
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

  // Fetch admin stats & applications
  const fetchAdminData = async () => {
    setAdminLoading(true);
    try {
      // 1. Fetch Stats
      const statsRes = await fetch('http://localhost:5000/api/applications/admin/stats');
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setAdminStats(statsData);
      }

      // 2. Fetch Applications
      const params = new URLSearchParams();
      if (adminFilterDiv !== 'all') params.append('division', adminFilterDiv);
      if (adminFilterStatus !== 'all') params.append('status', adminFilterStatus);
      if (adminSearch.trim()) params.append('search', adminSearch.trim());

      const listRes = await fetch(`http://localhost:5000/api/applications/admin/list?${params.toString()}`);
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

  // Trigger fetch when on admin tab and logged in
  useEffect(() => {
    if (activeTab === 'admin' && adminUser) {
      fetchAdminData();
    }
  }, [activeTab, adminUser, adminFilterDiv, adminFilterStatus]);

  // Handle Admin Login
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminLoginLoading(true);
    setAdminLoginError('');
    try {
      const res = await fetch('http://localhost:5000/api/applications/admin/login', {
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
      const res = await fetch(`http://localhost:5000/api/applications/${adminManageModal.id}/status`, {
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
      const res = await fetch(`http://localhost:5000/api/applications/admin/${id}`, {
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
      const res = await fetch(`http://localhost:5000/api/applications/track/${encodeURIComponent(code.toUpperCase())}`);
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

        const response = await fetch(`http://localhost:5000/api/applications?${queryParams.toString()}`, {
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
        alert('Tidak dapat terhubung ke backend. Pastikan server backend berjalan di http://localhost:5000.');
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

        const response = await fetch(`http://localhost:5000/api/applications?${queryParams.toString()}`, {
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand selection:text-white w-full max-w-full overflow-x-hidden">
      {/* TOP HEADER BAR */}
      <div className="w-full bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 overflow-hidden">
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

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleToHome(); }} className="flex items-center gap-3 group shrink-0">
              <img 
                src="https://www.lisaconcrete.com/wp-content/uploads/2020/08/logoweb-300x128.png" 
                alt="PT Lisa Concrete Logo" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col border-l-2 border-brand pl-3 whitespace-nowrap">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                  LISA CONCRETE
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider mt-0.5 whitespace-nowrap">
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
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'karir' ? 'text-brand bg-red-50 font-black' : 'hover:text-brand hover:bg-slate-50'}`}
                >
                  <span>Karir</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <svg className="w-3 h-3 text-slate-400 group-hover:text-brand group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap font-bold text-xs normal-case cursor-pointer ${
                    activeTab === 'lacak'
                      ? 'text-brand bg-red-50 font-black ring-1 ring-brand/30'
                      : 'text-slate-700 hover:text-brand hover:bg-slate-50'
                  }`}
                >
                  <svg className="w-4 h-4 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="whitespace-nowrap">Lacak Lamaran</span>
                </button>
              </div>
            </nav>

            {/* Action Buttons & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <a 
                href="#kontak" 
                onClick={() => handleJumpSection('kontak', 'kontak')}
                className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-brand/20 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="whitespace-nowrap">Kontak Kami</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-100 py-4 px-2 space-y-2 bg-white rounded-b-2xl shadow-xl animate-fade-in text-sm font-semibold">
              {/* Mobile Karir with Division Quick Filter Chips */}
              <div>
                <a 
                  href="#karir" 
                  onClick={(e) => { e.preventDefault(); handleToKarir(); }}
                  className="px-4 py-2 rounded-xl hover:bg-slate-50 text-slate-800 flex items-center justify-between"
                >
                  <span className="font-bold">Karir &amp; Rekrutmen</span>
                  <span className="text-[10px] bg-brand text-white font-bold px-2 py-0.5 rounded-full">{jobs.length} Loker</span>
                </a>
                <div className="px-4 py-1.5 grid grid-cols-1 gap-1">
                  {[
                    { dept: 'Engineering & Technical', icon: '📐' },
                    { dept: 'Quality Assurance & Lab', icon: '🔬' },
                    { dept: 'Manufacturing & Plant Operation', icon: '🏗️' },
                    { dept: 'Commercial & Marketing', icon: '💼' },
                    { dept: 'HSE & Safety', icon: '🛡️' }
                  ].map(d => (
                    <button
                      key={d.dept}
                      onClick={() => handleSelectDepartment(d.dept)}
                      className="text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-brand hover:bg-red-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>{d.icon}</span>
                      <span className="truncate">{d.dept}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleOpenTracking()}
                className={`w-full text-left px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold cursor-pointer transition-colors ${
                  activeTab === 'lacak' ? 'text-brand bg-red-50 font-black' : 'hover:bg-slate-50 text-brand'
                }`}
              >
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Lacak Lamaran
              </button>

              <a 
                href="#kontak" 
                onClick={() => handleJumpSection('kontak', 'kontak')}
                className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
              >
                Kontak Kami
              </a>
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
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">Dashboard Manajemen Pelamar</h1>
                  <p className="text-xs text-slate-500">Kelola berkas masuk, sortir per divisi, dan perbarui tahapan seleksi</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={fetchAdminData}
                    disabled={adminLoading}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className={adminLoading ? 'animate-spin' : ''}>🔄</span>
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
                                  href={`http://localhost:5000${app.cv_path}`}
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
                      href={`http://localhost:5000${adminManageModal.cv_path}`}
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
          </main>
        )
      ) : (
        <>
          {/* HERO SECTION */}
          <section id="home" className="relative w-full max-w-full bg-slate-950 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Overlay with Industrial Aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-slate-800/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Portal Karir &amp; Rekrutmen Resmi
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              BANGUN KARIR ANDA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                BERSAMA LISA CONCRETE
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl">
              PT Lisa Concrete Indonesia (member of DUSASPUN Group) mengundang talenta teknik sipil, manufaktur beton pracetak, QC, dan profesional muda berintegritas tinggi untuk berkarya dan berinovasi dalam membangun infrastruktur Indonesia.
            </p>

            {/* Quick Links & CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#karir" 
                onClick={() => handleJumpSection('karir', 'karir')}
                className="bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl shadow-brand/30 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Lihat Lowongan Kerja ({jobs.length} Posisi)</span>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button 
                onClick={() => handleOpenTracking()}
                className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-brand px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>🔍 Lacak Status Lamaran</span>
              </button>
              <a 
                href="https://www.lisaconcrete.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-amber-300 hover:text-white transition-colors flex items-center gap-1.5 font-bold px-3 py-2"
              >
                <span>🌐 Kunjungi Web Utama: www.lisaconcrete.com</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-slate-800">
              <div className="whitespace-nowrap">
                <p className="text-3xl font-black text-white">1994</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Tahun Berdiri</p>
              </div>
              <div className="whitespace-nowrap">
                <p className="text-3xl font-black text-amber-400">ISO 9001</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Sertifikasi Mutu (2004)</p>
              </div>
              <div className="whitespace-nowrap">
                <p className="text-3xl font-black text-white">2 Plant</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Ngoro &amp; Karangasem</p>
              </div>
              <div className="whitespace-nowrap">
                <p className="text-3xl font-black text-brand-light">{jobs.length} Posisi</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Loker Terbuka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI & NILAI L.I.S.A */}
      <section id="tentang" className="py-24 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand font-bold text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
                Profil Perusahaan
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Sejarah Dedikasi PT Lisa Concrete Indonesia
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong>PT Lisa Concrete Indonesia</strong> didirikan pada tahun <strong>1994</strong> dan berkembang pesat sebagai salah satu produsen beton pracetak (precast concrete) terkemuka di Indonesia di bawah naungan <strong>PT. Duta Sarana Perkasa (DUSASPUN Group)</strong>.
                </p>
                <p>
                  Perjalanan diawali dengan dedikasi tinggi memproduksi pipa beton bertulang dan elemen pracetak bermutu tinggi untuk memenuhi kebutuhan berbagai proyek infrastruktur strategis di Jawa Timur dan penjuru Indonesia. Seiring pesatnya kepercayaan publik serta mitra BUMN maupun swasta, perusahaan terus berekspansi dengan fasilitas pabrik modern di <strong>Ngoro (Mojokerto, Jawa Timur)</strong> dan fasilitas produksi di <strong>Karangasem (Bali)</strong>.
                </p>
                <p>
                  Sebagai pilar utama dari <strong>DUSASPUN Group</strong>, PT Lisa Concrete Indonesia berkomitmen menghadirkan solusi rekayasa beton pracetak berstandar mutu tertinggi ISO 9001:2015 dengan kapasitas produksi andal dan pengiriman tepat waktu untuk memajukan pembangunan nasional.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand to-amber-500 rounded-3xl transform rotate-2 scale-105 opacity-20 blur-md"></div>
                <div className="relative bg-slate-900 text-white p-8 rounded-3xl shadow-2xl border border-slate-800">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand"></span>
                    Visi &amp; Nilai Inti: "L . I . S . A"
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand text-white font-black flex items-center justify-center shrink-0 text-lg">
                        L
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Lift the livelihood of communities &amp; care for climate</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Meningkatkan taraf hidup komunitas sekitar dan berdedikasi menjaga kelestarian lingkungan serta iklim.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand text-white font-black flex items-center justify-center shrink-0 text-lg">
                        I
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Inspire positive change for country &amp; children</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Menginspirasi transformasi positif bagi kemajuan bangsa Indonesia dan generasi masa depan.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand text-white font-black flex items-center justify-center shrink-0 text-lg">
                        S
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Strengthen partnerships with all stakeholders</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Memperkokoh relasi kemitraan yang transparan, profesional, dan saling menguntungkan dengan seluruh pemangku kepentingan.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand text-white font-black flex items-center justify-center shrink-0 text-lg">
                        A
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Achieve consistent growth &amp; sustainability</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Mencapai pertumbuhan bisnis yang berkesinambungan dengan landasan inovasi teknologi beton mutakhir.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAHAPAN REKRUTMEN RESMI (6 LANGKAH SELEKSI - TANPA MCU) */}
      <section className="py-20 bg-slate-100 border-y border-slate-200 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand font-bold text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
              Transparan &amp; Terstruktur
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">
              Tahapan Seleksi Rekrutmen
            </h2>
            <p className="text-slate-600 text-sm">
              Proses seleksi penerimaan karyawan di PT Lisa Concrete Indonesia berlangsung profesional dan transparan melalui 6 tahapan resmi:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { no: '01', title: 'Administrasi & Verifikasi Dokumen', desc: 'Pemeriksaan berkas CV, portofolio, dan keaslian dokumen kualifikasi.', icon: '📄' },
              { no: '02', title: 'Wawancara HR', desc: 'Evaluasi kepribadian, integritas, dan keselarasan dengan budaya L.I.S.A.', icon: '🤝' },
              { no: '03', title: 'Wawancara User', desc: 'Uji kompetensi teknis bersama Division Lead / Engineering Manager.', icon: '👨‍💼' },
              { no: '04', title: 'Psikotes', desc: 'Evaluasi psikologis, penalaran logika, dan analisa potensi profesional.', icon: '🧠' },
              { no: '05', title: 'Offering Letter', desc: 'Pemberian penawaran resmi paket kompensasi, benefit, dan hak kerja.', icon: '✉️' },
              { no: '06', title: 'Onboarding', desc: 'Penyambutan karyawan baru, pengenalan sistem, dan serah terima tugas.', icon: '🚀' },
            ].map((st, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-brand/50 hover:shadow-xl transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{st.icon}</span>
                    <span className="text-xs font-black text-brand bg-red-50 px-2 py-0.5 rounded-md font-mono">
                      {st.no}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs mb-1.5 group-hover:text-brand transition-colors leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Menuju Web Utama www.lisaconcrete.com */}
          <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-700/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                🌐 Website Resmi Perusahaan
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
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
              className="bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand/30 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Kunjungi www.lisaconcrete.com</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* PORTAL KARIR & REKRUTMEN PT LISA CONCRETE INDONESIA */}
      <section id="karir" className="py-24 bg-slate-900 text-white relative w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand-light text-xs font-bold uppercase tracking-wider mb-3">
                Rekrutmen Resmi PT Lisa Concrete
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Tumbuh &amp; Membangun Bangsa Bersama Kami
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Kami mengundang para talenta teknik sipil, manufaktur, QC, dan profesional berintegritas tinggi untuk bergabung dalam keluarga besar PT Lisa Concrete Indonesia.
              </p>
            </div>

            {/* Quick Track Application CTA */}
            <div>
              <button 
                onClick={() => handleOpenTracking()}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <svg className="w-4 h-4 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Lacak Lamaran yang Pernah Dikirim
              </button>
            </div>
          </div>

          {/* Job Search & Filter Toolbar */}
          <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700">
              <svg className="w-4 h-4 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <div className="w-full md:w-56 flex items-center px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700">
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

            <div className="w-full md:w-56 flex items-center px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-700">
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
            {filteredJobs.length === 0 ? (
              <div className="text-center py-14 bg-slate-800/40 rounded-2xl border border-slate-700 p-8">
                <p className="text-slate-400 text-sm mb-4">Tidak ada lowongan yang sesuai kriteria pencarian.</p>
                <button 
                  onClick={() => { setSearchKeyword(''); setSelectedLocation(''); setSelectedDept(''); }}
                  className="px-4 py-2 bg-brand text-white text-xs font-bold rounded-xl"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-slate-800/80 border border-slate-700/80 hover:border-brand/60 rounded-2xl p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-800"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-brand/20 text-brand-light text-[11px] font-bold rounded-lg border border-brand/30">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Batas Lamaran: <strong>{job.deadline}</strong>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        💼 {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        🎓 {job.education}
                      </span>
                      <span className="flex items-center gap-1.5">
                        ⏳ {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold rounded-xl transition-all text-center"
                    >
                      Detail Kualifikasi
                    </button>
                    <button 
                      onClick={() => setApplyModalJob(job)}
                      className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-brand/20 text-center"
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
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center text-white font-black text-lg">
                  L
                </div>
                <div>
                  <h3 className="text-white font-black text-base tracking-wider">PT LISA CONCRETE INDONESIA</h3>
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
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Perusahaan</a></li>
                <li><a href="#karir" className="hover:text-white transition-colors">Portal Karir &amp; Lowongan</a></li>
                <li><button onClick={() => handleOpenTracking()} className="hover:text-white transition-colors text-left cursor-pointer">Lacak Status Pelamar</button></li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('admin'); window.location.hash = '#admin'; window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-amber-300 text-amber-400 font-bold transition-colors text-left cursor-pointer flex items-center gap-1"
                  >
                    <span>🔐 Portal Masuk HRD / Admin</span>
                  </button>
                </li>
                <li>
                  <a 
                    href="https://www.lisaconcrete.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-300 text-amber-400 transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>🌐 Website Utama: www.lisaconcrete.com</span>
                    <span>&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Kontak &amp; Personalia</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Email Rekrutmen: <a href="mailto:admpersonnel@lisaconcrete.com" className="text-slate-200 hover:text-white font-semibold">admpersonnel@lisaconcrete.com</a></li>
                <li>Web Utama: <a href="https://www.lisaconcrete.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">lisaconcrete.com</a></li>
                <li>Situs Induk: dusaspun.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} PT LISA CONCRETE INDONESIA. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
            <p>Your Innovative &amp; Trusted Partner</p>
          </div>
        </div>
      </footer>

      {/* MODAL: DETAIL LOWONGAN KERJA */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 bg-red-50 text-brand text-xs font-bold rounded-lg mb-2 inline-block">
                {selectedJob.department}
              </span>
              <h2 className="text-2xl font-black text-slate-900 mb-2">{selectedJob.title}</h2>
              <p className="text-xs text-slate-500 flex flex-wrap items-center gap-4">
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

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Tutup
              </button>
              <button 
                onClick={() => {
                  const job = selectedJob
                  setSelectedJob(null)
                  setApplyModalJob(job)
                }}
                className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20"
              >
                Lamar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: FORMULIR LAMAR PEKERJAAN */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setApplyModalJob(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
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
                <h3 className="text-xl font-black text-slate-900 mb-1">Formulir Lamaran Kerja</h3>
                <p className="text-xs text-slate-500 mb-6">
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

                  <div className="grid grid-cols-2 gap-4">
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
