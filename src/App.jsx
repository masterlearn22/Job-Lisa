import React, { useState } from 'react'

// DATA PRODUK BETON PRACETAK PT LISA CONCRETE INDONESIA
const productsData = [
  {
    id: 'prod-1',
    name: 'Box Culvert Monolith & RCBC',
    category: 'Drainase & Saluran',
    image: './images/products/box_culvert_1789013343710.jpg',
    desc: 'Saluran beton pracetak berbentuk kotak berongga untuk gorong-gorong, crossing saluran air, dan jembatan bawah tanah berdaya dukung beban berat.',
    specs: ['Dimensi: 400x400 mm s/d 4000x4000 mm', 'Mutu Beton: K-350 / fc 30 MPa s/d K-500', 'Sistem Joint: Male-Female Socket dengan Mastic Sealant', 'Aplikasi: Underpass, Crossing Drainase Tol, Saluran Primer']
  },
  {
    id: 'prod-2',
    name: 'U-Ditch & U-Gutter + Cover',
    category: 'Drainase & Saluran',
    image: './images/products/u_ditch_drain_1789013402878.jpg',
    desc: 'Saluran air terbuka penampang U yang dapat dilengkapi dengan cover plat beton heavy duty maupun light duty untuk bahu jalan.',
    specs: ['Tipe: Light Duty & Heavy Duty (Bisa dilalui kendaraan)', 'Dimensi: Lebar 300 mm s/d 2000 mm', 'Standar Mutu: ISO 9001 - K-350', 'Aplikasi: Drainase kawasan industri, perumahan, dan jalan raya']
  },
  {
    id: 'prod-3',
    name: 'CCSP (Concrete Corrugated Sheet Pile)',
    category: 'Pondasi & Dinding Penahan',
    image: './images/products/ccsp_sheet_pile_1789013633460.jpg',
    desc: 'Turap beton bergelombang prategang (prestress) untuk penahan tanah bantaran sungai, tebing, dermaga, dan tanggul pelabuhan.',
    specs: ['Tipe: W-325, W-350, W-400, W-450, W-500, W-600', 'Teknologi: Prestressing Strand JIS G 3536', 'Panjang: 6 meter s/d 18 meter per segmen', 'Aplikasi: Revetment sungai, dermaga maritim, penahan longsor']
  },
  {
    id: 'prod-4',
    name: 'Mini Pile (Square Prestressed Piles)',
    category: 'Pondasi & Dinding Penahan',
    image: './images/products/mini_piles_concrete_1789013422800.jpg',
    desc: 'Pondasi tiang pancang beton prategang penampang persegi dengan daya dukung tinggi untuk gedung, pabrik, dan perumahan.',
    specs: ['Ukuran Standar: 20x20 cm dan 25x25 cm', 'Kapasitas Beban: 25 - 45 Ton per tiang', 'Mutu Beton: K-450 / K-500', 'Sistem Sambungan: Joint Plat Baja Las Ujung']
  },
  {
    id: 'prod-5',
    name: 'I-Girder (Balok Jembatan Pracetak)',
    category: 'Struktur Infrastruktur',
    image: './images/products/bridge_i_girder_1789013383822.jpg',
    desc: 'Balok prategang penampang I untuk jembatan bentang panjang dan flyover dengan tingkat presisi tinggi dan durability prima.',
    specs: ['Bentang (Span): 16 meter s/d 40 meter', 'Tinggi Balok: H-90, H-125, H-170, H-210 cm', 'Metode: Post-Tensioning System', 'Aplikasi: Jembatan Tol, Flyover Jalan Nasional']
  },
  {
    id: 'prod-6',
    name: 'Pipa Beton (RCP & NRCP)',
    category: 'Drainase & Saluran',
    image: './images/products/concrete_pipes_1789013598484.jpg',
    desc: 'Pipa beton bertulang (Reinforced Concrete Pipe) dan non-bertulang dengan proses pemadatan sentrifugal/vibrasi presisi.',
    specs: ['Diameter: Dia. 300 mm s/d 2000 mm', 'Tipe Joint: Spigot & Socket / Flush Joint', 'Standar: ASTM C-76 / SNI 03-6368', 'Aplikasi: Gorong-gorong drainase, saluran limbah kota']
  },
  {
    id: 'prod-7',
    name: 'Tetrapod (Breakwater Pelindung Pantai)',
    category: 'Khusus & Maritim',
    image: './images/products/concrete_tetrapods_1789013619034.jpg',
    desc: 'Struktur beton berkaki empat penahan abrasi pantai yang saling mengunci untuk memecah energi gelombang laut di pelabuhan dan pesisir.',
    specs: ['Bobot Satuan: 1 Ton s/d 10 Ton', 'Mutu Beton: K-350 Tahan Sulfat & Air Laut', 'Aplikasi: Breakwater dermaga, pelabuhan, tanggul pesisir']
  },
  {
    id: 'prod-8',
    name: 'Road Barrier (Pembatas Jalan Beton)',
    category: 'Khusus & Maritim',
    image: './images/products/road_barrier_1789013363306.jpg',
    desc: 'Pembatas jalur jalan raya tipe New Jersey & Osaka dengan interlocking connection yang kokoh dan aman bagi pengguna jalan.',
    specs: ['Tipe: Osaka Type & New Jersey Barrier', 'Dimensi Standar: Panjang 100-200 cm, Tinggi 80 cm', 'Aplikasi: Median jalan tol, batas jalur proyek, gerbang tol']
  },
  {
    id: 'prod-9',
    name: 'Pagar Panel Beton Knock-Down',
    category: 'Struktur Infrastruktur',
    image: './images/products/precast_fence_panel_1789013441770.jpg',
    desc: 'Sistem pagar pembatas modular panel dan kolom beton bertulang yang cepat dirakit untuk kawasan industri dan lahan perkebunan.',
    specs: ['Ukuran Daun Panel: 240 x 40 x 5 cm', 'Tinggi Pagar: 160 cm s/d 320 cm', 'Struktur: Interlocking groove panel dengan kolom H', 'Aplikasi: Pengamanan perimeter pabrik, pergudangan, perumahan']
  }
]

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

// DATA PORTOFOLIO PROYEK
const projectsList = [
  {
    title: 'Proyek Box Culvert Monolith Kawasan Pakuwon',
    client: 'Pakuwon Group',
    location: 'Surabaya, Jawa Timur',
    year: '2020 - 2021',
    product: 'Box Culvert Monolith & RCBC Heavy Duty',
    desc: 'Pengadaan dan instalasi ratusan unit saluran box culvert monolith penampang besar untuk sistem drainase terpadu kawasan komersial & residensial Pakuwon Surabaya.'
  },
  {
    title: 'Facade Dinding Beton Arsitektural Hotel Agogo',
    client: 'Agogo Hotel Management',
    location: 'Surabaya, Jawa Timur',
    year: '2021 - 2022',
    product: 'Precast Architectural Facade Panel',
    desc: 'Penyediaan panel facade beton pracetak presisi tinggi dengan finishing estetis untuk fasad eksterior gedung bertingkat modern di Surabaya.'
  },
  {
    title: 'Pagar Panel Beton Kawasan Industri Gudang Garam',
    client: 'PT Gudang Garam Tbk',
    location: 'Magetan, Jawa Timur',
    year: '2021',
    product: 'Pagar Panel Beton Knockdown & Kolom H',
    desc: 'Pemasangan perimeter pengamanan pagar panel beton modular sepanjang ribuan meter di area fasilitas industri dan logistik Magetan.'
  },
  {
    title: 'Proyek Pelabuhan & Tambang Batulicin',
    client: 'Konsorsium Rekayasa Infrastruktur',
    location: 'Batulicin, Kalimantan Selatan',
    year: '2021 - 2022',
    product: 'CCSP (Corrugated Sheet Pile) & Pipa Beton',
    desc: 'Pemasangan turap CCSP prestressed untuk perkuatan dinding tebing dermaga dan pipa beton heavy duty untuk saluran pembuangan kawasan tambang.'
  },
  {
    title: 'Drainase Jalan Nasional & Wilayah Denpasar',
    client: 'Dinas PUPR Provinsi Bali',
    location: 'Denpasar & Karangasem, Bali',
    year: '2022 - 2024',
    product: 'U-Ditch & U-Gutter + Heavy Duty Cover',
    desc: 'Suplai produk saluran pracetak berstandar mutu tinggi untuk mengatasi genangan dan peremajaan sistem drainase perkotaan Bali.'
  }
]

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [jobs] = useState(initialJobs)
  const [products] = useState(productsData)
  
  // Search & Filters Karir
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedDept, setSelectedDept] = useState('')

  // Product Category Filter
  const [prodCategory, setProdCategory] = useState('Semua')

  // Modals state
  const [selectedJob, setSelectedJob] = useState(null)
  const [applyModalJob, setApplyModalJob] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [trackingModalOpen, setTrackingModalOpen] = useState(false)
  const [trackingCode, setTrackingCode] = useState('')
  const [trackedResult, setTrackedResult] = useState(null)
  const [applySuccess, setApplySuccess] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectScrollMode, setProjectScrollMode] = useState('vertical')
  const [isProjectPaused, setIsProjectPaused] = useState(false)

  // Filter Jobs
  const filteredJobs = jobs.filter(job => {
    const matchKeyword = job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchKeyword.toLowerCase())
    const matchLocation = selectedLocation === '' || job.location.toLowerCase().includes(selectedLocation.toLowerCase())
    const matchDept = selectedDept === '' || job.department === selectedDept
    return matchKeyword && matchLocation && matchDept
  })

  // Filter Products
  const filteredProducts = prodCategory === 'Semua' 
    ? products 
    : products.filter(p => p.category === prodCategory)

  // Track Application Handler
  const handleTrackApplication = (e) => {
    e.preventDefault()
    if (!trackingCode.trim()) return
    setTrackedResult({
      code: trackingCode.toUpperCase(),
      name: 'Budi Santoso, S.T.',
      jobTitle: 'Precast Civil Engineer & Drafter',
      submittedDate: '04 September 2026',
      status: 'Tahap Tes Teknis & Wawancara HR',
      currentStep: 2,
      steps: [
        { label: 'Administrasi & Verifikasi Dokumen', done: true, date: '05 Sep 2026' },
        { label: 'Tes Gambar CAD / Teknis & Psikotes Online', done: true, date: '08 Sep 2026' },
        { label: 'Wawancara HR & Profiling (Sedang Berjalan)', done: false, active: true, date: '12 Sep 2026' },
        { label: 'Wawancara User (Engineering Manager)', done: false, date: 'Menunggu Hasil HR' },
        { label: 'Pemeriksaan Kesehatan (MCU)', done: false, date: '-' },
        { label: 'Offering Letter & Penandatanganan Kontrak', done: false, date: '-' }
      ]
    })
  }

  // Handle Apply Form
  const handleApplySubmit = (e) => {
    e.preventDefault()
    setApplySuccess(true)
    setTimeout(() => {
      setApplySuccess(false)
      setApplyModalJob(null)
    }, 2800)
  }

  // Navigation and Filter Helpers
  const handleSelectDepartment = (dept) => {
    setSelectedDept(dept)
    setActiveTab('karir')
    setMobileMenuOpen(false)
    const karirEl = document.getElementById('karir')
    if (karirEl) {
      karirEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectCategory = (cat) => {
    setProdCategory(cat)
    setActiveTab('produk')
    setMobileMenuOpen(false)
    const prodEl = document.getElementById('produk')
    if (prodEl) {
      prodEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleJumpSection = (id, tabName) => {
    setActiveTab(tabName)
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
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
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1">
              📞 +62 31 7326070
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1">
              ✉️ marketing@lisaconcrete.com
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            {/* Logo */}
            <a href="#home" onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="flex items-center gap-3 group shrink-0">
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
              {/* BERANDA */}
              <div className="relative py-2">
                <a 
                  href="#home" 
                  onClick={() => handleJumpSection('home', 'home')}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1 ${activeTab === 'home' ? 'text-brand bg-red-50 font-black' : 'hover:text-brand hover:bg-slate-50'}`}
                >
                  <span>Beranda</span>
                </a>
              </div>

              {/* TENTANG KAMI WITH HOVER DROPDOWN */}
              <div className="relative group py-2">
                <a 
                  href="#tentang" 
                  onClick={() => handleJumpSection('tentang', 'tentang')}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${activeTab === 'tentang' ? 'text-brand bg-red-50 font-black' : 'hover:text-brand hover:bg-slate-50'}`}
                >
                  <span>Tentang Kami</span>
                  <svg className="w-3 h-3 text-slate-400 group-hover:text-brand group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Hover Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 text-left normal-case">
                    <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Profil Perusahaan</span>
                        <h4 className="text-xs font-black text-slate-900">PT Lisa Concrete Indonesia</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Est. 1994</span>
                    </div>
                    <div className="space-y-1">
                      <a 
                        href="#tentang" 
                        onClick={() => handleJumpSection('tentang', 'tentang')}
                        className="p-2.5 rounded-xl hover:bg-red-50/60 flex items-start gap-3 transition-colors block group/sub border border-transparent hover:border-red-100"
                      >
                        <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover/sub:bg-brand group-hover/sub:text-white flex items-center justify-center text-sm shrink-0 transition-colors">🏢</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover/sub:text-brand">Sejarah &amp; Rekayasa Mutu</p>
                          <p className="text-[11px] text-slate-500">Pilar utama DUSASPUN Group sejak 1994</p>
                        </div>
                      </a>
                      <a 
                        href="#tentang" 
                        onClick={() => handleJumpSection('tentang', 'tentang')}
                        className="p-2.5 rounded-xl hover:bg-red-50/60 flex items-start gap-3 transition-colors block group/sub border border-transparent hover:border-red-100"
                      >
                        <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover/sub:bg-brand group-hover/sub:text-white flex items-center justify-center text-sm shrink-0 transition-colors">⭐</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover/sub:text-brand">Nilai Budaya L.I.S.A</p>
                          <p className="text-[11px] text-slate-500">Loyal, Innovative, Sinergy, Action</p>
                        </div>
                      </a>
                      <a 
                        href="#kontak" 
                        onClick={() => handleJumpSection('kontak', 'kontak')}
                        className="p-2.5 rounded-xl hover:bg-red-50/60 flex items-start gap-3 transition-colors block group/sub border border-transparent hover:border-red-100"
                      >
                        <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover/sub:bg-brand group-hover/sub:text-white flex items-center justify-center text-sm shrink-0 transition-colors">🏭</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover/sub:text-brand">Fasilitas Pabrik &amp; Kantor</p>
                          <p className="text-[11px] text-slate-500">Head Office Surabaya, Plant Ngoro &amp; Bali</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRODUK WITH HOVER DROPDOWN */}
              <div className="relative group py-2">
                <a 
                  href="#produk" 
                  onClick={() => { setActiveTab('produk'); setProdCategory('Semua'); }}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${activeTab === 'produk' ? 'text-brand bg-red-50 font-black' : 'hover:text-brand hover:bg-slate-50'}`}
                >
                  <span>Produk</span>
                  <svg className="w-3 h-3 text-slate-400 group-hover:text-brand group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Hover Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 text-left normal-case">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Katalog Beton Pracetak</span>
                        <h4 className="text-xs font-black text-slate-900">Kategori Produk Unggulan</h4>
                      </div>
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-200">
                        9 Produk Standar ISO
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { cat: 'Drainase & Saluran', icon: '🌊', count: '3 Produk', desc: 'Box Culvert, U-Ditch Drain, Pipa Beton' },
                        { cat: 'Pondasi & Dinding Penahan', icon: '🧱', count: '2 Produk', desc: 'CCSP Sheet Pile, Square Mini Pile' },
                        { cat: 'Struktur Infrastruktur', icon: '🌉', count: '3 Produk', desc: 'Bridge I-Girder, Road Barrier, Pagar Panel' },
                        { cat: 'Khusus & Maritim', icon: '⚓', count: '1 Produk', desc: 'Concrete Tetrapod Pemecah Ombak' },
                      ].map((item) => (
                        <button
                          key={item.cat}
                          onClick={() => handleSelectCategory(item.cat)}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-red-50/60 transition-colors flex items-start gap-3 group/prod border border-transparent hover:border-red-100 cursor-pointer"
                        >
                          <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover/prod:bg-brand group-hover/prod:text-white flex items-center justify-center text-sm shrink-0 transition-colors">
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-bold text-slate-800 group-hover/prod:text-brand truncate">
                                {item.cat}
                              </p>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {item.count}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleSelectCategory('Semua')}
                        className="text-[11px] font-bold text-brand hover:underline cursor-pointer"
                      >
                        Buka Semua 9 Produk Precast &rarr;
                      </button>
                      <a
                        href="#kontak"
                        onClick={() => handleJumpSection('kontak', 'kontak')}
                        className="text-[10px] font-bold text-slate-600 hover:text-brand bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg"
                      >
                        Minta Penawaran
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROYEK WITH HOVER DROPDOWN */}
              <div className="relative group py-2">
                <a 
                  href="#proyek" 
                  onClick={() => handleJumpSection('proyek', 'proyek')}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${activeTab === 'proyek' ? 'text-brand bg-red-50 font-black' : 'hover:text-brand hover:bg-slate-50'}`}
                >
                  <span>Proyek</span>
                  <svg className="w-3 h-3 text-slate-400 group-hover:text-brand group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Hover Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 text-left normal-case">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Portofolio &amp; Pengalaman</span>
                        <h4 className="text-xs font-black text-slate-900">Proyek Unggulan Nasional</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">
                        1.000+ Proyek
                      </span>
                    </div>

                    <div className="space-y-1">
                      {projectsList.map((prj, i) => (
                        <a
                          key={i}
                          href="#proyek"
                          onClick={() => handleJumpSection('proyek', 'proyek')}
                          className="p-2 rounded-xl hover:bg-red-50/60 flex items-center justify-between gap-3 transition-colors block group/p border border-transparent hover:border-red-100"
                        >
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800 group-hover/p:text-brand truncate">
                              {prj.title}
                            </p>
                            <p className="text-[10px] text-slate-500 truncate mt-0.5">
                              📍 {prj.location} • Klien: <span className="font-semibold text-slate-700">{prj.client}</span>
                            </p>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold shrink-0 bg-slate-100 px-1.5 py-0.5 rounded">
                            {prj.year}
                          </span>
                        </a>
                      ))}
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <a
                        href="#proyek"
                        onClick={() => handleJumpSection('proyek', 'proyek')}
                        className="block text-center text-[11px] font-bold text-brand hover:underline"
                      >
                        Lihat Banner Animasi Portofolio &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* KARIR WITH INTERACTIVE HOVER DROPDOWN (LOKER PER DIVISI) */}
              <div className="relative group py-2">
                <a 
                  href="#karir" 
                  onClick={() => { setActiveTab('karir'); setSelectedDept(''); }}
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
                        onClick={() => { setSelectedDept(''); handleJumpSection('karir', 'karir'); }}
                        className="text-[11px] font-bold text-brand hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Lihat Semua {jobs.length} Posisi</span>
                        <span>&rarr;</span>
                      </button>
                      <button
                        onClick={() => setTrackingModalOpen(true)}
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
                  onClick={() => setTrackingModalOpen(true)}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:text-brand hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap font-bold text-xs normal-case cursor-pointer"
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
              <a 
                href="#home" 
                onClick={() => handleJumpSection('home', 'home')}
                className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
              >
                Beranda
              </a>
              <a 
                href="#tentang" 
                onClick={() => handleJumpSection('tentang', 'tentang')}
                className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
              >
                Tentang Kami
              </a>
              <a 
                href="#produk" 
                onClick={() => handleJumpSection('produk', 'produk')}
                className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
              >
                Produk Pracetak
              </a>
              <a 
                href="#proyek" 
                onClick={() => handleJumpSection('proyek', 'proyek')}
                className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
              >
                Proyek
              </a>

              {/* Mobile Karir with Division Quick Filter Chips */}
              <div className="pt-2 border-t border-slate-100">
                <a 
                  href="#karir" 
                  onClick={() => { setSelectedDept(''); handleJumpSection('karir', 'karir'); }}
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
                onClick={() => { setTrackingModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-slate-50 text-brand flex items-center gap-2 font-bold cursor-pointer"
              >
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Lacak Lamaran
              </button>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative w-full max-w-full bg-slate-950 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Overlay with Industrial Aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-slate-800/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
              Produsen Beton Pracetak Terpercaya Sejak 1994
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              SOLUSI BETON PRACETAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                INOVATIF &amp; BERKUALITAS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl">
              PT Lisa Concrete Indonesia menghadirkan produk precast berstandar mutu internasional ISO 9001 dengan keunggulan inovasi dan teknologi DUSASPUN Group untuk membangun infrastruktur Indonesia yang kokoh, tangguh, dan berkelanjutan.
            </p>

            {/* Quick Links & CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#produk" 
                className="bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl shadow-brand/30 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Jelajahi Produk Pracetak</span>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#karir" 
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-brand px-6 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
              >
                Peluang Karir ({jobs.length} Lowongan)
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
                <p className="text-3xl font-black text-brand-light">1.000+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Proyek Terselesaikan</p>
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

      {/* KATALOG PRODUK PRACETAK */}
      <section id="produk" className="py-24 bg-slate-100 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-brand font-bold text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
              Katalog Produk Resmi
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-2">
              Produk Beton Pracetak Unggulan
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mb-6">
              Diproduksi dengan mesin berteknologi presisi tinggi dan formula beton berkekuatan tinggi.
            </p>

            {/* Category Filter Tabs - Strictly 1 Single Row */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 flex-nowrap">
              {['Semua', 'Drainase & Saluran', 'Pondasi & Dinding Penahan', 'Struktur Infrastruktur', 'Khusus & Maritim'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProdCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    prodCategory === cat
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand/40 hover:shadow-2xl transition-all flex flex-col group"
              >
                <div className="h-52 relative overflow-hidden bg-slate-200">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-brand transition-colors mb-2">
                      {prod.name}
                    </h3>
                    <p className="text-slate-600 text-xs line-clamp-3 mb-4 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button 
                      onClick={() => setSelectedProduct(prod)}
                      className="text-xs font-bold text-slate-700 hover:text-brand transition-colors"
                    >
                      Lihat Spesifikasi &rarr;
                    </button>
                    <a 
                      href="#kontak" 
                      className="px-4 py-2 bg-slate-100 hover:bg-brand hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all"
                    >
                      Minta Penawaran
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO PROYEK (SATU BARIS HORIZONTAL SCROLL OTOMATIS) */}
      <section id="proyek" className="py-24 bg-white overflow-hidden w-full max-w-full min-w-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand font-bold text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
              Track Record Teruji
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">
              Portofolio Proyek Terkemuka
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Kepercayaan dari BUMN Karya, konglomerasi industri, pengembang properti papan atas, dan pemerintah daerah di seluruh Indonesia.
            </p>

            {/* Status & Quick Control */}
            <div className="mt-6 inline-flex items-center gap-3 p-1.5 px-4 bg-slate-50 rounded-full border border-slate-200 text-xs">
              <span className="flex items-center gap-2 font-bold text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Bergerak Otomatis (1 Baris Horizontal)</span>
              </span>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => setIsProjectPaused(!isProjectPaused)}
                className="font-bold text-brand hover:text-brand-dark transition-colors flex items-center gap-1"
                title={isProjectPaused ? 'Jalankan Animasi' : 'Jeda Animasi'}
              >
                {isProjectPaused ? '▶ Lanjutkan Gerakan' : '⏸ Jeda Gerakan'}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-2.5 italic">
              * Arahkan kursor mouse ke kartu untuk menjeda dan membaca detail proyek.
            </p>
          </div>
        </div>

        {/* FULL-WIDTH SEAMLESS HORIZONTAL MARQUEE */}
        <div className="relative overflow-hidden py-4 w-full max-w-full min-w-0">
          {/* Edge Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>

          {/* Continuous Moving Track */}
          <div 
            className="flex gap-6 animate-scroll-horizontal pause-on-hover w-max"
            style={{ animationPlayState: isProjectPaused ? 'paused' : undefined }}
          >
            {[...projectsList, ...projectsList].map((prj, i) => (
              <div 
                key={i} 
                className="w-[340px] sm:w-[390px] p-7 rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-brand/60 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shrink-0 group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-3.5">
                    <span className="font-black text-brand text-xs uppercase tracking-wider bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
                      📍 {prj.location}
                    </span>
                    <span className="bg-slate-200/80 text-slate-600 px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold">
                      {prj.year}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-lg group-hover:text-brand transition-colors mb-2 leading-snug">
                    {prj.title}
                  </h3>

                  <p className="text-xs text-slate-500 mb-3 font-semibold flex items-center gap-1">
                    <span>Klien:</span>
                    <strong className="text-slate-800">{prj.client}</strong>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {prj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                  <span className="inline-block bg-white text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-slate-200 group-hover:border-brand/30 truncate max-w-[240px]">
                    📦 {prj.product}
                  </span>
                  <span className="text-xs font-bold text-brand group-hover:translate-x-1 transition-transform shrink-0">
                    &rarr;
                  </span>
                </div>
              </div>
            ))}
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
                onClick={() => setTrackingModalOpen(true)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap"
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

      {/* LOKASI PABRIK & KANTOR (FACILITIES) */}
      <section id="kontak" className="py-24 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
              Jangkauan &amp; Fasilitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
              Kantor Pusat &amp; Fasilitas Manufaktur
            </h2>
            <p className="text-slate-600 text-sm">
              Didukung kantor representatif dan lokasi pabrik strategis untuk menjamin kelancaran suplai ke seluruh wilayah Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Surabaya Head Office */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand font-black flex items-center justify-center text-xl mb-6">
                🏢
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Head Office (Surabaya)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Jl. Raya Kupang Jaya 1E, Surabaya, Jawa Timur 60189 - Indonesia.
              </p>
              <div className="text-xs text-slate-500 space-y-1 pt-4 border-t border-slate-200">
                <p><strong>Telepon:</strong> +62 31 7326070</p>
                <p><strong>Faks:</strong> +62 31 7326071</p>
                <p><strong>Email:</strong> marketing@lisaconcrete.com</p>
              </div>
            </div>

            {/* Ngoro Plant */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand font-black flex items-center justify-center text-xl mb-6">
                🏭
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Ngoro Manufacturing Plant</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Desa Wates Negoro, Kec. Ngoro, Mojokerto, Jawa Timur (Kawasan Industri Ngoro).
              </p>
              <div className="text-xs text-slate-500 space-y-1 pt-4 border-t border-slate-200">
                <p><strong>Fasilitas:</strong> Batching Plant Kapasitas Besar, Steam Curing, Stockyard Terbuka</p>
                <p><strong>Produksi:</strong> Box Culvert, CCSP, U-Ditch, I-Girder</p>
              </div>
            </div>

            {/* Bali Branch & Plant */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand font-black flex items-center justify-center text-xl mb-6">
                🌴
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Branch Office &amp; Plant (Bali)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                <strong>Kantor:</strong> Jl. Noja No. 147, Kesiman Petilan, Denpasar Timur, Bali 80237.<br />
                <strong>Plant:</strong> Karangasem, Bali.
              </p>
              <div className="text-xs text-slate-500 space-y-1 pt-4 border-t border-slate-200">
                <p><strong>Melayani:</strong> Suplai Proyek Wilayah Bali &amp; Nusa Tenggara</p>
                <p><strong>Produk:</strong> U-Ditch, Pipa Beton, Pagar Panel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-full overflow-hidden bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
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
                Produsen beton pracetak terkemuka berstandar mutu ISO 9001 sejak 1994. Menghadirkan solusi konstruksi kokoh, ramah lingkungan, dan terpercaya untuk pembangunan negeri.
              </p>
              <p className="text-slate-500 text-[11px]">
                Surabaya (Head Office) • Ngoro (Plant) • Bali (Branch &amp; Plant)
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Navigasi Cepat</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Perusahaan</a></li>
                <li><a href="#produk" className="hover:text-white transition-colors">Katalog Beton Pracetak</a></li>
                <li><a href="#proyek" className="hover:text-white transition-colors">Daftar Proyek Nasional</a></li>
                <li><a href="#karir" className="hover:text-white transition-colors">Portal Karir &amp; Lowongan</a></li>
                <li><button onClick={() => setTrackingModalOpen(true)} className="hover:text-white transition-colors text-left">Lacak Status Pelamar</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Kontak &amp; Dukungan</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Tel: +62 31 7326070</li>
                <li>Marketing: marketing@lisaconcrete.com</li>
                <li>Rekrutmen HR: hrd@lisaconcrete.com</li>
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

      {/* MODAL: DETAIL PRODUK */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <span className="px-3 py-1 bg-red-50 text-brand text-xs font-bold rounded-lg mb-2 inline-block">
              {selectedProduct.category}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{selectedProduct.name}</h3>
            
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full h-56 object-cover rounded-2xl mb-6"
            />

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedProduct.desc}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Spesifikasi &amp; Fitur Teknis:</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5">
                {selectedProduct.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Tutup
              </button>
              <a 
                href="#kontak" 
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20"
              >
                Hubungi Marketing
              </a>
            </div>
          </div>
        </div>
      )}

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
                <h3 className="text-2xl font-black text-slate-900 mb-2">Lamaran Berhasil Terkirim!</h3>
                <p className="text-slate-600 text-xs max-w-md mx-auto">
                  Berkas lamaran untuk posisi <strong>{applyModalJob.title}</strong> di PT Lisa Concrete Indonesia telah masuk ke sistem HRD kami.
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-xl inline-block text-xs font-mono text-slate-600">
                  Kode Pelacakan Anda: <strong>LISA-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Formulir Lamaran Kerja</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Posisi: <strong className="text-brand">{applyModalJob.title}</strong> ({applyModalJob.location})
                </p>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Sesuai KTP *</label>
                    <input 
                      required 
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
                        type="email" 
                        placeholder="nama@email.com" 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nomor WhatsApp *</label>
                      <input 
                        required 
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
                      type="text" 
                      placeholder="Contoh: S1 Teknik Sipil - Institut Teknologi Sepuluh Nopember (ITS)" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Upload Resume / CV (Format PDF, Maks. 5MB) *</label>
                    <input 
                      required 
                      type="file" 
                      accept=".pdf" 
                      className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
                    />
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button 
                      type="button" 
                      onClick={() => setApplyModalJob(null)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20"
                    >
                      Kirim Lamaran
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: LACAK STATUS LAMARAN */}
      {trackingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => { setTrackingModalOpen(false); setTrackedResult(null); }}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-2">Lacak Status Rekrutmen Pelamar</h3>
            <p className="text-xs text-slate-500 mb-6">
              Masukkan Nomor Registrasi Lamaran atau Email yang didaftarkan pada sistem rekrutmen PT Lisa Concrete.
            </p>

            <form onSubmit={handleTrackApplication} className="flex gap-2 mb-6">
              <input 
                type="text" 
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Contoh: LISA-123456 atau email Anda" 
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand focus:outline-none text-xs"
                required
              />
              <button 
                type="submit"
                className="px-5 py-2.5 bg-brand text-white rounded-xl text-xs font-bold hover:bg-brand-dark transition-all"
              >
                Cek Status
              </button>
            </form>

            {trackedResult && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex justify-between items-start mb-4 border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{trackedResult.name}</h4>
                    <p className="text-[11px] text-slate-500">{trackedResult.jobTitle}</p>
                  </div>
                  <span className="text-[11px] bg-amber-100 text-amber-900 font-bold px-3 py-1 rounded-full">
                    {trackedResult.status}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {trackedResult.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                        step.done 
                          ? 'bg-emerald-600 text-white font-bold' 
                          : step.active 
                            ? 'bg-brand text-white font-bold animate-pulse' 
                            : 'bg-slate-200 text-slate-400'
                      }`}>
                        {step.done ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold ${step.active ? 'text-brand' : 'text-slate-800'}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-slate-400">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
