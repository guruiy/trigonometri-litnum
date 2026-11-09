# START CERDAS — MPI Pemanasan Literasi & Numerasi Kelas X

Multimedia Pembelajaran Interaktif (MPI) singkat untuk digunakan sebagai pemanasan sebelum pembelajaran Matematika kelas X SMA, khususnya sebelum topik penerapan trigonometri. Website ini bersifat **statis / frontend saja** dan dapat dipublikasikan melalui GitHub Pages.

## Tujuan pembelajaran

MPI mengaktifkan tiga kebiasaan berpikir:

1. **Literasi:** menemukan gagasan utama, membaca informasi tersurat dan tersirat, membedakan pola dengan sebab-akibat, serta menilai apakah klaim didukung bukti.
2. **Numerasi:** menggunakan persentase, diskon, perubahan data, rata-rata, dan laju dalam konteks sehari-hari.
3. **Jembatan trigonometri:** menghubungkan sudut, jarak, dan tinggi; memilih sinus, kosinus, atau tangen sesuai informasi yang diketahui.

## Isi dan fitur MPI

- Alur pemanasan sekitar **12–15 menit**.
- Bacaan kontekstual tentang gerakan Bawa Botol Sendiri.
- Grafik batang dan tabel data pengamatan tiga minggu.
- 12 soal pilihan ganda interaktif: 3 literasi, 5 numerasi, dan 4 pengantar trigonometri.
- Umpan balik langsung serta pembahasan singkat untuk setiap soal.
- Rekap skor akhir dan ringkasan jawaban.
- Progress jawaban disimpan pada browser/perangkat melalui `localStorage`.
- Tema terang/gelap, tombol layar penuh, dan tampilan responsif untuk komputer, tablet, serta HP.
- Ilustrasi segitiga, grafik, serta simbol matematika dibuat langsung dengan HTML, CSS, teks, dan SVG inline.

## Identitas guru

- **Nama:** IDA YUNIAR TRYASTUTI, S.Pd.
- **NIP:** 199206142022212009
- **Jabatan:** Guru Matematika
- **Instansi:** SMA Negeri 1 Pagerbarang

## Menjalankan di komputer

1. Ekstrak ZIP.
2. Buka folder `MPI_Pemanasan_Literasi_Numerasi`.
3. Klik dua kali `index.html` untuk membukanya di Chrome, Edge, Firefox, atau browser modern lainnya.
4. Pastikan `styles.css` dan `app.js` berada satu folder dengan `index.html`.

Tidak perlu Node.js, PHP, database, server lokal, instalasi paket, maupun backend.

## Struktur folder

```text
MPI_Pemanasan_Literasi_Numerasi/
├── index.html          # Halaman utama (wajib berada di root folder publikasi)
├── styles.css          # Tampilan dan responsivitas
├── app.js              # Soal, umpan balik, skor, dan interaksi
├── .nojekyll           # Penanda agar GitHub Pages melewati pemrosesan Jekyll
├── README.md           # Dokumentasi proyek
├── PANDUAN_GURU.md     # Alur pembelajaran dan kunci jawaban
├── PANDUAN_UPLOAD_GITHUB.md # Panduan unggah file dan folder
└── assets/             # Folder aset lokal (berisi .gitkeep)
```

## Cara publikasi

Ikuti petunjuk lengkap di [`PANDUAN_UPLOAD_GITHUB.md`](PANDUAN_UPLOAD_GITHUB.md). Inti yang perlu diingat: **unggah semua isi folder proyek, bukan hanya `index.html`**. Setelah proses unggah selesai, `index.html`, `styles.css`, dan `app.js` harus terlihat langsung pada halaman utama repository, kecuali proyek memang sengaja ditempatkan di subfolder.

Untuk mengaktifkan GitHub Pages, buka **Settings → Pages → Build and deployment → Deploy from a branch**, pilih branch `main` dan folder `/ (root)` jika file `index.html` berada di root repository, lalu simpan. GitHub Pages mendukung publikasi dari root atau folder `/docs` pada branch yang dipilih. Lihat dokumentasi resmi GitHub: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Simbol dan rumus matematika

Rumus seperti `tan 30°`, `sin 53°`, `cos 30°`, tanda derajat, pembagian, dan simbol θ ditulis sebagai teks/karakter standar atau elemen SVG inline. Tidak ada ketergantungan pada MathJax, KaTeX, CDN, font eksternal, atau API eksternal. Tampilan rumus tidak memerlukan koneksi ke layanan pihak ketiga.

## Penyimpanan dan privasi

- Tidak ada backend dan tidak ada pengiriman jawaban ke server.
- Jawaban yang sudah diperiksa disimpan menggunakan `localStorage` pada browser/perangkat yang sedang digunakan.
- Progres tidak tersinkron otomatis ke perangkat lain atau ke akun guru.
- Tombol **Ulangi pemanasan** menghapus progres latihan saat ini setelah konfirmasi.
- Setelah hasil akhir ditampilkan, data progres sesi dihapus dari penyimpanan lokal. Ringkasan tetap tampak selama halaman hasil tersebut belum ditutup atau dimuat ulang.

## Catatan teknis

- Nama file harus dipertahankan persis, termasuk huruf kecil/besar.
- Path CSS dan JavaScript bersifat relatif terhadap `index.html`, sehingga tetap berjalan pada root repository atau subfolder.
- Jangan mengunggah hanya file HTML. Tanpa `styles.css`, tampilan tidak termuat; tanpa `app.js`, kuis tidak interaktif.
