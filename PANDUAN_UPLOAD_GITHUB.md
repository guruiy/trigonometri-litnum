# PANDUAN UNGGAH MPI KE GITHUB PAGES

Panduan ini menjelaskan secara rinci cara mengunggah file **dan folder** agar tampilan MPI tidak rusak ketika dibuka melalui GitHub Pages.

## 1. Kenali isi folder proyek terlebih dahulu

Setelah mengunduh ZIP, klik kanan file ZIP lalu pilih **Extract All / Ekstrak Semua**. Hasil ekstraksi akan berupa folder:

```text
MPI_Pemanasan_Literasi_Numerasi/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
├── README.md
├── PANDUAN_GURU.md
├── PANDUAN_UPLOAD_GITHUB.md
└── assets/
```

Fungsi file utama:

- `index.html` = halaman yang dibuka pengunjung.
- `styles.css` = desain, warna, tata letak, dan responsivitas.
- `app.js` = soal, pilihan jawaban, pemeriksaan, skor, dan interaksi.
- `assets/` = folder untuk berkas pendukung. Folder ini tetap disertakan meskipun belum berisi banyak aset.
- `.nojekyll` = file penanda untuk GitHub Pages.

**Penting:** jangan memisah-misahkan file tersebut. Pertahankan seluruh susunan folder seperti semula.

## 2. Cara paling mudah: buat repository khusus MPI pemanasan

### Langkah A — Buat repository

1. Masuk ke akun GitHub.
2. Klik tanda **+** di kanan atas, lalu pilih **New repository**.
3. Isi nama repository, misalnya `mpi-pemanasan-literasi-numerasi`.
4. Pilih **Public** agar situs dapat dibuka siswa melalui GitHub Pages pada paket GitHub Free.
5. Agar lebih mudah, jangan centang penambahan README, `.gitignore`, atau License terlebih dahulu.
6. Klik **Create repository**.

### Langkah B — Unggah seluruh isi folder, termasuk subfolder

1. Setelah repository kosong terbuka, klik tombol **Add file**.
2. Pilih **Upload files**.
3. Buka File Explorer Windows dan masuk ke folder hasil ekstraksi `MPI_Pemanasan_Literasi_Numerasi`.
4. Tekan `Ctrl + A` untuk memilih semua isi folder. Yang dipilih adalah **isi di dalam folder**, bukan folder induk `MPI_Pemanasan_Literasi_Numerasi` itu sendiri.
5. Seret (drag) pilihan tersebut ke area unggah GitHub yang bertuliskan *Drag files here to add them to your repository*.
6. Periksa daftar berkas sebelum melanjutkan. Pastikan terlihat `index.html`, `styles.css`, `app.js`, serta folder `assets`.
7. Pada bagian **Commit changes**, isi pesan misalnya `Upload MPI pemanasan literasi dan numerasi`.
8. Klik **Commit changes**.

> GitHub mendukung penyeretan file maupun folder ke area unggah melalui browser. Jadi folder `assets` dapat diseret bersama file lainnya. Dokumentasi resmi: [Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

### Apa yang seharusnya terlihat setelah unggah?

Pada halaman utama repository, susunannya kurang lebih harus seperti ini:

```text
mpi-pemanasan-literasi-numerasi   (repository)
│
├── index.html          ✓
├── styles.css          ✓
├── app.js              ✓
├── .nojekyll           ✓
├── README.md
├── PANDUAN_GURU.md
├── PANDUAN_UPLOAD_GITHUB.md
└── assets/             ✓ folder
    └── .gitkeep        ✓ penanda folder
```

**Jangan sampai susunannya seperti ini** jika memilih `/ (root)` pada GitHub Pages:

```text
mpi-pemanasan-literasi-numerasi
└── MPI_Pemanasan_Literasi_Numerasi/
    ├── index.html
    ├── styles.css
    └── app.js
```

Susunan yang salah tersebut membuat GitHub Pages tidak menemukan `index.html` pada root repository. Solusinya: masuk ke folder proyek di komputer, pilih semua **isi di dalamnya**, lalu unggah isi tersebut ke root repository.

### Catatan file tersembunyi `.nojekyll` di Windows

Jika `.nojekyll` tidak tampak saat memilih file, buka File Explorer → **View / Tampilan → Show / Tampilkan → Hidden items / Item tersembunyi**. File ini tidak memiliki ekstensi dan memang tidak tampak seperti dokumen biasa.

## 3. Aktifkan GitHub Pages

Setelah seluruh file masuk ke repository:

1. Klik tab **Settings** pada repository.
2. Pada menu sebelah kiri, cari bagian **Code and automation**, lalu klik **Pages**.
3. Di bagian **Build and deployment**, pada pilihan **Source**, pilih **Deploy from a branch**.
4. Pada **Branch**, pilih `main`.
5. Pada pilihan folder, pilih `/(root)` karena `index.html` berada langsung di root repository.
6. Klik **Save**.
7. Tunggu sampai proses deployment selesai. Status publikasi dapat dilihat pada bagian Pages atau tab **Actions**.
8. Alamat situs biasanya berbentuk:

```text
https://USERNAME.github.io/NAMA-REPOSITORY/
```

Ganti `USERNAME` dan `NAMA-REPOSITORY` dengan nama akun dan repository milik Anda.

Dokumentasi resmi GitHub: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Alternatif: gabungkan dengan repository MPI Trigonometri yang sudah ada

Apabila MPI trigonometri sebelumnya sudah berada di sebuah repository GitHub dan GitHub Pages sudah aktif, MPI pemanasan dapat ditempatkan sebagai **subfolder** di repository yang sama. Dengan cara ini, dua MPI dapat menggunakan satu repository, tetapi memiliki alamat halaman yang berbeda.

Misalnya, susunan repository dibuat seperti berikut:

```text
repository-mpi-trigonometri/
│
├── index.html                 # MPI Trigonometri yang sudah ada
├── styles.css                 # CSS MPI Trigonometri
├── app.js                     # JavaScript MPI Trigonometri
├── assets/                    # Aset MPI Trigonometri
│
└── pemanasan/                 # Folder baru untuk MPI Pemanasan
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── .nojekyll
    ├── README.md
    ├── PANDUAN_GURU.md
    ├── PANDUAN_UPLOAD_GITHUB.md
    └── assets/
```

Cara membuatnya:

1. Buka repository MPI Trigonometri di GitHub.
2. Klik **Add file → Upload files**.
3. Di komputer, buka folder `MPI_Pemanasan_Literasi_Numerasi`.
4. Pilih seluruh isinya (`Ctrl + A`).
5. Buat folder tujuan `pemanasan` di repository terlebih dahulu. Cara termudah: pada halaman repository, klik **Add file → Create new file**, lalu pada nama file ketik `pemanasan/.gitkeep`, kemudian commit file tersebut. (Git tidak menyimpan folder kosong; file `.gitkeep` membuat folder tujuan terlihat.)
6. Buka folder `pemanasan` yang baru dibuat.
7. Klik **Add file → Upload files**.
8. Seret seluruh isi folder proyek pemanasan ke halaman unggah yang sedang berada di dalam folder `pemanasan`.
9. Commit perubahan.
10. Kembali ke repository utama. Pengaturan GitHub Pages yang sudah aktif pada root tidak perlu diubah.

Alamat MPI pemanasan menjadi:

```text
https://USERNAME.github.io/NAMA-REPOSITORY/pemanasan/
```

Sedangkan MPI Trigonometri tetap menggunakan alamat utama repository. Pastikan `index.html` milik masing-masing MPI berada pada foldernya sendiri bersama CSS, JavaScript, dan asetnya.

**Jangan menimpa file `index.html`, `styles.css`, `app.js`, atau `assets` milik MPI Trigonometri yang sudah ada.** Unggah MPI pemanasan di dalam folder `pemanasan` seperti susunan di atas.

## 5. Cara mengunggah pembaruan di kemudian hari

Jika nanti ada revisi:

1. Buka repository dan masuk ke lokasi MPI yang akan diperbarui (root atau subfolder `pemanasan`).
2. Klik **Add file → Upload files**.
3. Unggah file yang berubah dengan nama dan lokasi yang sama.
4. Jika GitHub menampilkan konfirmasi penggantian file, pastikan memang file yang benar.
5. Commit perubahan.
6. Tunggu deployment selesai, lalu muat ulang halaman situs. Pada browser tekan `Ctrl + F5` jika tampilan lama masih tersimpan di cache.

Jika menambah gambar atau aset baru, unggah juga aset tersebut ke dalam folder yang dirujuk oleh kode. Nama file dan huruf besar/kecil harus sama persis.

## 6. Pemeriksaan setelah situs terbit

Buka alamat publik GitHub Pages, lalu periksa:

- [ ] Halaman utama terbuka, tidak menampilkan 404.
- [ ] Tampilan dan warna termuat dengan benar.
- [ ] Grafik dan tabel pengamatan terlihat.
- [ ] Pilihan jawaban dapat diklik.
- [ ] Tombol **Periksa jawaban** menampilkan umpan balik.
- [ ] Tombol **Tantangan berikutnya** berpindah ke soal selanjutnya.
- [ ] Hasil akhir menampilkan skor.
- [ ] Tema terang/gelap berfungsi.
- [ ] Tampilan dapat digunakan di HP.

## 7. Mengatasi masalah umum

| Masalah | Penyebab yang mungkin | Solusi |
|---|---|---|
| Halaman 404 | `index.html` berada di dalam folder tambahan atau Pages belum aktif | Pastikan `index.html` berada pada root sumber publikasi atau subfolder yang dituju, lalu periksa Settings → Pages. |
| Halaman tampil tanpa desain | `styles.css` tidak terunggah atau berada di folder yang salah | Letakkan `styles.css` satu folder dengan `index.html`. Periksa ejaan namanya. |
| Tombol soal tidak bekerja | `app.js` tidak terunggah atau salah lokasi | Letakkan `app.js` satu folder dengan `index.html`. |
| Folder aset tidak terbaca | Folder `assets` tidak ikut diunggah atau namanya berubah | Unggah folder `assets` di lokasi yang sama dengan susunan proyek. |
| Perubahan belum terlihat | Cache browser atau deployment belum selesai | Periksa tab Actions, tunggu deployment sukses, lalu tekan `Ctrl + F5`. |
| Progres tidak sama di HP dan laptop | Data disimpan lokal di masing-masing browser | Ini memang perilaku MPI tanpa backend; gunakan perangkat yang sama untuk melanjutkan progres. |

## 8. Catatan penting

- GitHub Pages menerbitkan situs sebagai halaman publik. Jangan menaruh data pribadi siswa, kata sandi, atau informasi sensitif di repository.
- MPI ini tidak membutuhkan backend, PHP, database, Node.js, API, MathJax, atau KaTeX.
- Simbol matematika menggunakan teks standar, Unicode, HTML, dan SVG sehingga tidak memerlukan layanan pemuat rumus eksternal.
- GitHub Pages untuk sumber branch mendukung folder root (`/`) atau `/docs`; jika memakai subfolder `pemanasan`, folder tersebut adalah bagian dari situs yang diterbitkan dari root, bukan pilihan sumber publikasi Pages tersendiri.
