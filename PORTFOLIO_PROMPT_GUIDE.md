# Panduan Membangun Website Portofolio

Dokumen ini berisi panduan lengkap untuk membangun, mengembangkan, dan menyempurnakan website portofolio kamu, termasuk contoh prompt AI untuk setiap langkah.

## 1. Persiapan Awal

1. Pastikan kamu sudah memiliki Node.js dan npm versi terbaru.
2. Buka folder project di VS Code.
3. Jalankan perintah:

```bash
npm install
```

4. Jalankan development server:

```bash
npm run dev
```

5. Buka browser di `http://localhost:3000` untuk melihat hasil sementara.

## 2. Struktur Project

Project ini menggunakan Next.js dengan App Router dan Tailwind CSS. Struktur utama:

- `src/app/` - halaman dan layout global.
- `src/components/` - komponen UI seperti `Navbar`, `Hero`, `Projects`, `About`, dll.
- `src/data/portfolio.ts` - data proyek, keterampilan, dan konten dinamis.
- `public/asset_images/` - asset gambar yang ditampilkan di website.
- `next.config.js` - konfigurasi Next.js untuk export dan deployment.
- `package.json` - script dan dependensi.

## 3. Menyesuaikan Konten Website

### 3.1 Ubah data di `src/data/portfolio.ts`

Sesuaikan:

- nama
- deskripsi
- proyek
- layanan
- kontak

### 3.2 Ubah teks di komponen utama

Edit file seperti:

- `src/components/sections/Hero.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/sections/Skills.tsx`
- `src/components/sections/Contact.tsx`

### 3.3 Ubah gambar

Ganti file di `public/asset_images/` lalu update referensi di kode.

## 4. Menambahkan Fitur Baru

Contoh fitur yang bisa ditambahkan:

- animasi custom dengan Framer Motion atau GSAP.
- mode gelap/terang menggunakan `next-themes`.
- carousel portofolio.
- form kontak dengan integrasi email.
- efek scrolling dan parallax.

## 5. Build dan Export

Untuk membuat versi produksi, jalankan:

```bash
npm run build
```

Jika menggunakan export statis untuk GitHub Pages:

```bash
npm run export
```

## 6. Deploy ke GitHub Pages

Jika project sudah dikonfigurasi untuk GitHub Pages, jalankan:

```bash
npm run deploy
```

Pastikan `homepage` di `package.json` sudah sesuai dengan URL repository GitHub Pages.

## 7. Contoh Prompt AI untuk Membangun Website Portofolio

Gunakan prompt ini dengan layanan AI seperti ChatGPT untuk membantu merancang, memperbaiki, atau meningkatkan website.

### Prompt Umum: Desain Halaman Portofolio

> Buatkan saya struktur halaman portofolio modern untuk developer full-stack. Sertakan:
> - hero section dengan judul, deskripsi, tombol CTA
> - section tentang saya
> - section keterampilan
> - section proyek
> - section pengalaman
> - section kontak
> 
> Hasilkan dalam format JSON atau daftar komponen yang mudah dipahami.

### Prompt: Tulis Konten Hero

> Bantu saya membuat teks hero untuk website portofolio developer. Saya ingin: "Full Stack Developer & Designer".
> Sertakan satu judul utama, satu paragraf deskripsi, dan dua teks tombol CTA.

### Prompt: Perbaiki UI/UX

> Cek desain portofolio ini dan sarankan perbaikan UI/UX:
> - navigasi
> - tipografi
> - kontras warna
> - layout responsif
> 
> Berikan rekomendasi yang jelas dan ringkas.

### Prompt: Optimalisasi SEO

> Berikan saya daftar meta tag SEO yang cocok untuk website portofolio developer.
> Sertakan title, description, keywords, dan open graph tags.

### Prompt: Tambahkan Animasi

> Bagaimana cara menambahkan animasi fade-in dan scroll reveal pada komponen Next.js dengan Tailwind CSS?
> Berikan contoh kode untuk komponen `Hero` atau `About`.

### Prompt: Update Konten Portfolio

> Saya ingin menambahkan 3 proyek baru ke halaman portofolio.
> Buatkan konten singkat untuk setiap proyek termasuk judul, deskripsi, teknologi, dan tautan demo.

### Prompt: Debug Deploy GitHub Pages

> Website Next.js saya sudah di-export ke `out/` dan diterbitkan ke GitHub Pages.
> Tetapi asset `/_next/static/...` 404. Jelaskan penyebab umum dan perbaikan yang harus dilakukan.

## 8. Prompt Spesifik untuk Proyek Ini

### Prompt: Sesuaikan Tema Website

> Bantu saya membuat tema warna dan tipografi untuk portofolio developer.
> Saya ingin nuansa gelap dengan aksen biru, fuchsia, dan ungu.
> Sertakan skema warna dan saran kelas Tailwind.

### Prompt: Tambahkan Section "Project Showcase"

> Buatkan markup JSX untuk section proyek yang terdiri dari 3 kartu proyek.
> Setiap kartu memiliki judul, deskripsi, tag teknologi, dan tombol demo.

### Prompt: Optimalkan Halaman `About`

> Perbaiki teks paragraf tentang saya menjadi lebih profesional, jelas, dan menarik.
> Buat kalimat yang cocok untuk seorang siswa SMK yang belajar website dan ingin menunjukkan keterampilan teknologi.

## 9. Tips Tambahan

- Selalu gunakan `npm run dev` untuk melihat perubahan secara langsung.
- Simpan perubahan di Git secara teratur.
- Gunakan GitHub Pages atau Vercel untuk deploy.
- Perhatikan console browser untuk error JavaScript atau asset 404.

## 10. Contoh Prompt AI Lengkap untuk Satu Iterasi

> Saya ingin membuat ulang website portofolio saya dengan desain modern dan responsif. Saya menggunakan Next.js 15, Tailwind CSS, dan `next-themes`.
> 
> Tolong berikan:
> 1. struktur halaman komponen yang diperlukan,
> 2. skema warna dan tipografi,
> 3. teks untuk hero, about, projects, skills, dan contact,
> 4. contoh kode untuk satu section yang lengkap.

---

Gunakan panduan ini sebagai referensi saat mengembangkan portofolio kamu atau meminta AI untuk membantu membuat konten dan kode. Semoga sukses membangun website portofolio yang profesional dan menarik!