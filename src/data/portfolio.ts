const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const portfolioData = {
  name: 'Evan Dwi',
  role: 'Pengembang Full Stack & Desainer',
  shortBio: 'Membangun aplikasi web modern yang indah dengan teknologi terbaru. Bersemangat menciptakan pengalaman pengguna yang luar biasa dan arsitektur kode yang bersih.',
  description:
    'Saya seorang pengembang full stack yang fokus pada menciptakan pengalaman digital yang menarik. Dengan keahlian di React, Next.js, dan teknologi web modern, saya mengubah ide menjadi solusi yang dapat diskalakan. Selain coding, saya juga bersemangat tentang sistem desain dan membimbing pengembang junior.',
  email: 'andrawijaya167@gmail.com',
  location: 'Indonesia',
  cvUrl: '#',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/say_the_name1?igsh=d3g5ZzdoenBxeXZu',
    whatsapp: 'https://wa.me/6285895423665',
  },
}

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'React' },
      { name: 'Next.js', icon: 'Next.js' },
      { name: 'TypeScript', icon: 'TypeScript' },
      { name: 'TailwindCSS', icon: 'Tailwind' },
      { name: 'Framer Motion', icon: 'Framer' },
      { name: 'Redux', icon: 'Redux' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'Node.js' },
      { name: 'Express', icon: 'Express' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' },
      { name: 'GraphQL', icon: 'GraphQL' },
      { name: 'REST API', icon: 'Code' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', icon: 'Mobile' },
      { name: 'Flutter', icon: 'Mobile' },
      { name: 'Expo', icon: 'Code' },
      { name: 'Firebase', icon: 'Database' },
    ],
  },
  {
    category: 'Alat & DevOps',
    items: [
      { name: 'Git', icon: 'Code' },
      { name: 'Docker', icon: 'Code' },
      { name: 'AWS', icon: 'Cloud' },
      { name: 'CI/CD', icon: 'Code' },
      { name: 'Vercel', icon: 'Cloud' },
      { name: 'Figma', icon: 'Palette' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Arduino Uno',
    description: 'Proyek praktik Arduino Uno dengan sensor dan kontrol LED, memperlihatkan pemahaman dasar mikrokontroler dan pemrograman elektronik.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['Arduino', 'Elektronik', 'Pemrograman', 'Sensor'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    title: 'Pembuatan Website Portofolio',
    description: 'Website portofolio personal yang dirancang untuk menampilkan pengalaman, proyek, dan kemampuan secara profesional.',
    image: `${basePath}/asset_images/ai.jpg`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    title: 'Mikrotik Network Configuration',
    description: 'Konfigurasi jaringan menggunakan Mikrotik untuk mengelola routing, firewall, dan manajemen bandwidth di lingkungan lokal.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    tags: ['Mikrotik', 'Routing', 'Firewall', 'Jaringan'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 4,
    title: 'LAN Infrastructure',
    description: 'Perancangan dan implementasi infrastruktur LAN untuk mendukung konektivitas stabil dan perangkat jaringan yang terorganisir.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: ['LAN', 'Switch', 'Kabel UTP', 'Topologi'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 5,
    title: 'User Testing & Prototyping',
    description: 'Proses pengujian pengguna dan pembuatan prototipe untuk menemukan masalah penggunaan dan memperbaiki desain sebelum pengembangan akhir.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    tags: ['UX', 'Prototyping', 'User Test', 'Feedback'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 6,
    title: 'Design System Documentation',
    description: 'Dokumentasi sistem desain yang mencakup panduan komponen, warna, tipografi, dan aturan penggunaan untuk konsistensi tampilan.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tags: ['Design System', 'Dokumentasi', 'UI Kit', 'Panduan'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
]

export const experience = [
  {
    id: 1,
    company: 'Tech Startup Inc',
    position: 'Pengembang Full Stack Senior',
    duration: '2022 - Present',
    description: 'Memimpin pengembangan aplikasi web yang dapat diskalakan',
    achievements: [
      'Membangun dan memelihara 5+ aplikasi produksi',
      'Memimpin tim yang terdiri dari 4 developer',
      'Meningkatkan performa sebesar 40%',
      'Mengimplementasikan pipeline CI/CD',
    ],
    skills: ['React', 'Node.js', 'AWS', 'GraphQL'],
  },
  {
    id: 2,
    company: 'Digital Agency Co',
    position: 'Pengembang Full Stack',
    duration: '2020 - 2022',
    description: 'Mengembangkan aplikasi web responsif untuk berbagai klien',
    achievements: [
      'Menyelesaikan 20+ proyek klien',
      'Mengurangi waktu muat sebesar 50%',
      'Membimbing 2 developer junior',
      'Membuat perpustakaan komponen yang dapat digunakan ulang',
    ],
    skills: ['React', 'Next.js', 'TailwindCSS', 'MongoDB'],
  },
  {
    id: 3,
    company: 'Web Development Studio',
    position: 'Pengembang Junior',
    duration: '2019 - 2020',
    description: 'Memulai perjalanan pengembangan web dengan HTML, CSS, dan JavaScript',
    achievements: [
      'Membangun 10+ situs web',
      'Mempelajari framework modern',
      'Berpartisipasi dalam review kode',
      'Meningkatkan standar pengkodean',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO di Tech Company',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    feedback:
      'Evan adalah pengembang yang luar biasa dengan perhatian besar terhadap detail. Dia menyelesaikan proyek kami tepat waktu dengan kualitas terbaik.',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    position: 'Product Manager di Digital Co',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    feedback:
      'Bekerja dengan Evan sangat menyenangkan. Dia memahami visi kami dan menciptakan produk yang indah serta fungsional.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'CTO di StartUp XYZ',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    feedback:
      'Evan menghadirkan keunggulan teknis dan pemikiran kreatif. Sangat direkomendasikan untuk proyek apa pun.',
  },
  {
    id: 4,
    name: 'Emily Brown',
    position: 'Design Lead di Creative Studio',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    feedback:
      'Kolaborasi yang hebat! Evan menerjemahkan desain kami dengan sempurna dan memberikan saran peningkatan sepanjang proses.',
  },
]

export const about = {
  bio: 'Saya Evan Dwi, pengembang full stack yang bersemangat dari Indonesia. Dengan kecintaan mendalam pada pengalaman digital yang indah dan fungsional, saya telah menghabiskan 5+ tahun terakhir merancang aplikasi web yang disukai pengguna.',
  facts: [
    { label: 'Proyek', value: '50+' },
    { label: 'Klien', value: '30+' },
    { label: 'Tahun Pengalaman', value: '5+' },
    { label: 'Cangkir Kopi', value: '∞' },
  ],
}
