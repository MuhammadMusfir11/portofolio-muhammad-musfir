PRODUCT REQUIREMENTS DOCUMENT (PRD)

ZAHRAN — PERSONAL DEVELOPER PORTFOLIO

Versi: 1.0
Status: Draft — Baseline Requirements
Product Type: Personal Portfolio Website
Platform: Responsive Web
Primary Language: English (proposed)
Owner: Zahran
Development Environment: VS Code on Windows

---

1. Project Overview

1.1 Product Description

Zahran Personal Portfolio adalah website personal yang berfungsi sebagai identitas digital untuk menampilkan profil, kemampuan teknis, proyek, dan informasi kontak sebagai Web Developer.

Website mengutamakan desain yang modern, premium, profesional, dan futuristik dengan identitas visual yang konsisten. Pengunjung harus dapat memahami siapa pemilik website, bidang yang ditekuni, hasil pekerjaan yang tersedia, dan cara menghubunginya tanpa mengalami kesulitan navigasi.

Website akan dikembangkan menggunakan React, Vite, JavaScript, Tailwind CSS v4, dan Motion.

1.2 Product Vision

Membangun website portofolio yang memiliki kualitas visual kuat, mudah digunakan, cepat diakses, dan mampu mendukung pengembangan karier maupun pencarian klien.

1.3 Product Principles

1. Design with purpose: setiap elemen visual harus memiliki fungsi.
2. Content before decoration: informasi utama harus mudah ditemukan.
3. Consistency: seluruh halaman mengikuti sistem desain yang sama.
4. Performance first: efek visual tidak boleh mengorbankan kenyamanan pengguna.
5. Honest representation: profil, kemampuan, dan proyek harus sesuai dengan fakta.
6. Responsive by default: desain harus bekerja pada desktop, tablet, dan smartphone.

2. Problem Statement and Goals

2.1 Problem Statement

Calon klien dan recruiter membutuhkan cara yang praktis untuk menilai kemampuan seorang developer. Informasi yang tersebar atau penyajian proyek yang kurang terstruktur dapat membuat kemampuan pemilik website sulit dipahami.

Portofolio ini akan menggabungkan informasi profesional dan demonstrasi hasil pekerjaan dalam satu tempat yang terorganisasi.

2.2 Product Goals

- Membangun identitas digital profesional.
- Menampilkan proyek dan kemampuan secara jelas.
- Memudahkan pengunjung melihat demo atau source code proyek.
- Menyediakan jalur kontak yang mudah digunakan.
- Menciptakan identitas visual yang mudah dikenali.
- Menjadi proyek yang dapat dikembangkan dan dipelihara secara mandiri.

2.3 Success Metrics

Target awal untuk pengujian internal:

- Seluruh navigasi utama berfungsi.
- Seluruh tautan yang ditampilkan mengarah ke tujuan yang benar.
- Tidak ada horizontal overflow pada viewport 360 px, 768 px, dan 1440 px.
- Tidak ada error runtime utama pada browser console.
- Semua bagian prioritas P0 selesai.
- Target Lighthouse Performance minimal 85 dan Accessibility minimal 90 pada pengujian yang representatif, setelah deployment dan optimasi. Nilai ini merupakan sasaran, bukan hasil yang dijamin.

3. Target Users

3.1 Prospective Clients

Kebutuhan: memahami layanan, melihat contoh hasil pekerjaan, dan menghubungi developer.

Informasi penting: headline, ringkasan profil, proyek, teknologi yang relevan, dan kontak.

3.2 Recruiters and Hiring Teams

Kebutuhan: memahami kemampuan teknis dan menilai relevansi proyek.

Informasi penting: skills, deskripsi proyek, kontribusi yang benar-benar dilakukan, serta tautan demo atau repositori.

3.3 Developer Community

Kebutuhan: mengenal pemilik website dan memeriksa karya atau kode yang tersedia.

Informasi penting: profil, teknologi, source code, dan kanal profesional.

4. User Stories

1. Sebagai calon klien, saya ingin memahami fokus pekerjaan developer agar dapat menilai kesesuaiannya dengan kebutuhan saya.
2. Sebagai recruiter, saya ingin melihat proyek dan teknologi yang digunakan agar dapat menilai pengalaman yang relevan.
3. Sebagai pengunjung, saya ingin membuka demo proyek agar dapat melihat hasilnya secara langsung.
4. Sebagai developer, saya ingin mengakses repositori yang tersedia agar dapat mempelajari implementasinya.
5. Sebagai pengunjung mobile, saya ingin menggunakan navigasi yang nyaman tanpa harus memperbesar halaman.
6. Sebagai pemilik website, saya ingin memperbarui informasi proyek tanpa harus mengubah keseluruhan struktur website.

5. Sitemap and Information Architecture

Versi pertama menggunakan satu halaman utama dengan navigasi berbasis section.

5.1 Main Page

1. Navbar
   
   - Personal logo atau nama.
   - Home.
   - About.
   - Projects.
   - Skills.
   - Contact.

2. Hero
   
   - Foto personal.
   - Nama dan profesi.
   - Headline utama.
   - Deskripsi singkat.
   - CTA untuk melihat proyek dan menghubungi.

3. About
   
   - Perkenalan.
   - Minat dan fokus pengembangan.
   - Ringkasan pendekatan dalam mengerjakan website.

4. Projects
   
   - Daftar proyek.
   - Preview visual.
   - Deskripsi singkat.
   - Teknologi yang digunakan.
   - Demo dan source code jika tersedia.

5. Skills
   
   - Teknologi yang telah digunakan.
   - Pengelompokan berdasarkan fungsi, misalnya frontend dan tools.
   - Tingkat kemampuan tidak boleh dibuat-buat.

6. Contact
   
   - Ajakan untuk berdiskusi tentang proyek atau peluang kerja.
   - Kanal kontak yang benar-benar tersedia.

7. Footer
   
   - Identitas pemilik.
   - Tahun.
   - Tautan penting.

6. Feature Priorities

P0 — Must Have

- Single-page portfolio.
- Navbar dengan navigasi yang berfungsi.
- Hero section dengan foto personal.
- About section.
- Project cards.
- Skills section.
- Contact section.
- Responsive layout.
- Tautan demo, repositori, dan kontak yang valid jika ditampilkan.
- Styling konsisten berdasarkan design system.
- Pengaturan dasar metadata halaman.
- Penanganan gambar dan teks agar tidak merusak layout.

P1 — Should Have

- Animasi ringan saat elemen muncul.
- Hover states pada tombol dan project cards.
- Ambient glow dan dekorasi background.
- Efek partikel ringan jika tidak membebani performa.
- Indikator navigasi aktif jika sesuai dengan desain.
- Pengaturan reduced motion.

P2 — Could Have

- Dark/light mode.
- Blog atau halaman artikel.
- Filter kategori proyek.
- Halaman detail proyek.
- Integrasi formulir kontak dengan layanan eksternal.

Fitur P2 tidak boleh menunda penyelesaian versi pertama.

7. Functional Requirements

FR-01: Navigation

- Setiap menu mengarah ke section yang benar.
- Navigasi harus tetap dapat digunakan setelah perubahan ukuran layar.
- Anchor navigation tidak boleh menutupi judul section akibat navbar.

FR-02: Hero

- Menampilkan identitas dan fokus pekerjaan.
- Foto personal memiliki ukuran dan crop yang terkontrol.
- CTA utama mengarah ke Projects.
- CTA kontak mengarah ke Contact atau kanal kontak yang valid.

FR-03: Projects

- Setiap proyek memiliki judul dan deskripsi.
- Teknologi yang ditampilkan harus benar-benar digunakan dalam proyek tersebut.
- Tombol demo dan repositori hanya muncul jika tautannya tersedia.
- Proyek latihan boleh ditampilkan dengan keterangan yang jujur.

FR-04: Skills

- Skills ditampilkan dalam kelompok yang mudah dipahami.
- Tidak ada klaim pengalaman atau tingkat keahlian yang belum terverifikasi.

FR-05: Contact

- Setiap tautan kontak harus valid.
- Alur kontak harus jelas.
- Formulir yang membutuhkan backend tidak termasuk dalam versi pertama.

FR-06: Responsive Layout

- Komponen menyesuaikan lebar viewport.
- Tidak ada konten penting yang terpotong.
- Navigasi mobile dapat digunakan dengan keyboard maupun sentuhan.

8. Non-Functional Requirements

NFR-01: Performance

- Hindari library yang tidak diperlukan.
- Gunakan gambar dengan ukuran dan format yang sesuai.
- Batasi efek blur besar, partikel berlebihan, dan animasi kontinu.
- Hindari pemrosesan animasi yang berat pada setiap frame.
- Utamakan transform dan opacity untuk animasi.
- Hindari video background pada versi pertama.

NFR-02: Maintainability

- Gunakan komponen React dengan tanggung jawab yang jelas.
- Pisahkan data proyek dari markup jika membantu pemeliharaan.
- Gunakan design tokens atau utility yang konsisten.
- Hindari duplikasi kode dan CSS yang saling bertentangan.

NFR-03: Reliability

- Website dapat dijalankan menggunakan Vite.
- Tidak ada error runtime utama.
- Tautan eksternal diuji.
- Build production harus berhasil.

NFR-04: Security and Privacy

- Jangan menampilkan informasi pribadi yang tidak ingin dipublikasikan.
- Jangan menyimpan secret atau API key di frontend.
- Jangan meminta data pengunjung yang tidak diperlukan.
- Gunakan tautan eksternal dengan atribut keamanan yang sesuai bila membuka tab baru.

9. Design Direction

9.1 Visual Concept

Dark Futuristic — Electric Blue.

Karakter visual:

- Background utama hitam atau navy gelap.
- Electric blue sebagai aksen.
- Ambient glow yang halus.
- Tipografi modern dan terbaca.
- Grid dan spacing yang teratur.
- Foto personal sebagai focal point.
- Project cards dengan preview yang proporsional.
- Border subtil dan kedalaman visual secukupnya.

9.2 Layout Principles

- Hero harus memiliki satu fokus visual utama.
- Headline, deskripsi, dan CTA memiliki hierarki yang jelas.
- Alignment antar-section harus konsisten.
- Lebar teks dibatasi agar mudah dibaca.
- Projects ditata dalam grid yang menyesuaikan layar.
- Efek dekoratif tidak boleh menutupi konten.
- Tidak semua elemen perlu memiliki glow atau animasi.

9.3 Visual Quality Bar

Website tidak dianggap selesai hanya karena semua section sudah tersedia.

Setiap section harus diperiksa dari sisi proporsi, whitespace, alignment, tipografi, konsistensi, dan perilaku pada layar kecil.

10. Technology Stack

React

Untuk membangun antarmuka berbasis komponen yang dapat digunakan ulang.

Vite

Untuk development server dan production build yang sesuai dengan proyek React ini.

JavaScript

Bahasa utama implementasi tanpa menambah kompleksitas TypeScript pada tahap awal.

Tailwind CSS v4

Untuk styling dan responsive utilities dengan konfigurasi yang sudah dipasang pada proyek.

Motion

Untuk animasi yang diperlukan, digunakan secara selektif.

VS Code

Editor utama untuk pengembangan.

Git

Direkomendasikan untuk version control agar perubahan dapat dilacak dan dipulihkan.

Tidak diperlukan backend, database, atau XAMPP untuk versi pertama.

11. Responsive Requirements

Desktop — 1024 px ke atas

- Hero dapat menggunakan komposisi dua kolom jika seimbang.
- Projects dapat menggunakan beberapa kolom sesuai ruang.
- Navbar menampilkan menu utama.
- Ruang kosong dimanfaatkan untuk memperkuat hierarki.

Tablet — 768–1023 px

- Ukuran teks dan jarak disesuaikan.
- Hero dapat berubah menjadi komposisi yang lebih ringkas.
- Grid proyek menyesuaikan lebar.

Mobile — 360–767 px

- Layout utama satu kolom bila diperlukan.
- Navigasi tidak memenuhi seluruh lebar layar.
- CTA nyaman disentuh.
- Foto tidak mendominasi konten.
- Teks tidak menyebabkan overflow.
- Animasi dan dekorasi tetap ringan.

Breakpoint aktual boleh mengikuti kebutuhan komponen selama seluruh rentang ukuran diuji.

12. Accessibility and Performance

Accessibility

- Gunakan elemen HTML semantik.
- Semua gambar informatif memiliki alt text.
- Tombol dan tautan dapat diakses dengan keyboard.
- Focus state terlihat jelas.
- Kontras teks dan background memadai.
- Hormati preferensi reduced motion.
- Jangan menyampaikan informasi penting hanya melalui warna.

Performance

- Optimalkan foto profil dan preview proyek.
- Hindari memasukkan gambar resolusi besar tanpa kebutuhan.
- Gunakan animasi secukupnya.
- Hindari ketergantungan pada layanan eksternal untuk elemen utama.
- Uji hasil build production sebelum publikasi.

13. Scope and Out of Scope

In Scope

- Website portofolio statis.
- Profil personal.
- Daftar proyek.
- Skills.
- Kontak berbasis tautan.
- Responsive design.
- Animasi ringan.
- Persiapan deployment statis.

Out of Scope

- Login dan registrasi.
- Dashboard admin.
- Database.
- Sistem CMS.
- Transaksi atau pembayaran.
- Marketplace.
- Backend khusus.
- Formulir yang memerlukan pemrosesan server.

14. Acceptance Criteria

Website versi pertama dinyatakan memenuhi kebutuhan apabila:

1. Seluruh section P0 tersedia.
2. Navigasi membawa pengunjung ke section yang benar.
3. Foto personal dapat ditampilkan dengan baik.
4. Semua kartu proyek memiliki konten yang valid.
5. Semua tautan yang ditampilkan telah diperiksa.
6. Tidak ada horizontal overflow pada viewport 360 px, 768 px, dan 1440 px.
7. Tidak ada error runtime utama pada browser console.
8. Kontras dan focus state telah diperiksa.
9. Animasi tidak menghalangi navigasi atau membaca konten.
10. Website dapat dijalankan dalam development mode.
11. Production build berhasil.
12. Layout mengikuti design system yang disepakati.
13. Informasi profil dan kemampuan tidak mengandung klaim yang tidak terverifikasi.

15. Risks and Mitigations

R-01: Layout tidak konsisten

Risiko: setiap section dibuat dengan gaya berbeda.

Mitigasi: tetapkan design system dan UI/UX specification sebelum implementasi.

R-02: Terlalu banyak efek visual

Risiko: website terasa ramai dan performa menurun.

Mitigasi: gunakan glow, partikel, dan animasi hanya pada elemen yang mendukung fokus visual.

R-03: Konten proyek belum memadai

Risiko: portfolio terlihat kosong atau terkesan mengada-ada.

Mitigasi: tampilkan proyek nyata, termasuk proyek latihan yang diberi label secara jujur.

R-04: Perubahan kode merusak bagian lain

Risiko: perbaikan satu komponen menimbulkan masalah pada komponen lain.

Mitigasi: implementasikan secara bertahap dan uji setiap tahap.

R-05: Performa perangkat terbatas

Risiko: development atau animasi terasa lambat.

Mitigasi: minimalkan dependensi, efek berat, dan aset berukuran besar.

16. Definition of Done

Versi pertama dianggap selesai ketika:

- Seluruh fitur P0 telah diimplementasikan.
- Layout sesuai spesifikasi desain yang disetujui.
- Website responsif dan dapat digunakan dengan keyboard.
- Konten dan tautan telah diverifikasi.
- Tidak ada error runtime utama.
- Production build berhasil.
- Performa telah diperiksa.
- Website telah diuji pada desktop dan mobile.
- Dokumen proyek dan instruksi menjalankan website tersedia.

---

Appendix: Assumptions and Open Questions

Hal berikut harus dikonfirmasi sebelum finalisasi desain dan konten:

1. Apakah website menggunakan bahasa Inggris, bahasa Indonesia, atau keduanya?
2. Foto profil mana yang akan digunakan?
3. Proyek apa saja yang siap ditampilkan?
4. Apakah tersedia tautan GitHub dan demo proyek?
5. Kanal kontak apa yang ingin dipublikasikan?
6. Apakah navbar dan website menggunakan satu halaman panjang atau beberapa halaman?

Sampai informasi tersebut dikonfirmasi, gunakan placeholder yang jelas dan jangan mengarang data.

End of PRD v1.0