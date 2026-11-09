(() => {
  'use strict';

  const STORAGE_KEY = 'startCerdasPemanasan-v1';
  const questions = [
    {
      category: 'LITERASI', stage: 'literasi', kicker: 'BACA & TAFSIRKAN', title: 'Gagasan utama',
      prompt: 'Apa tujuan utama gerakan Bawa Botol Sendiri berdasarkan bacaan?',
      options: [
        'Mengurangi penggunaan botol sekali pakai melalui fasilitas dan kebiasaan membawa botol minum.',
        'Mengganti seluruh kegiatan OSIS dengan kegiatan pengamatan kantin.',
        'Membuktikan bahwa semua sampah sekolah berasal dari kantin.',
        'Mewajibkan setiap siswa membeli botol minum baru.'
      ], answer: 0,
      explanation: 'Bacaan menjelaskan ajakan membawa botol sendiri, penyediaan tempat isi ulang, dan pentingnya kebiasaan warga sekolah. Jadi, tujuan utamanya adalah mendorong pengurangan botol sekali pakai.'
    },
    {
      category: 'LITERASI', stage: 'literasi', kicker: 'BACA & TAFSIRKAN', title: 'Membaca pola, bukan menebak sebab',
      prompt: 'Data menunjukkan isi ulang meningkat dari 80 menjadi 135 kali, sementara botol sekali pakai yang terlihat turun dari 70 menjadi 35 buah. Kesimpulan yang paling hati-hati adalah …',
      options: [
        'Peningkatan isi ulang pasti menjadi satu-satunya penyebab penurunan botol sekali pakai.',
        'Pada periode pengamatan, isi ulang meningkat dan botol sekali pakai yang tercatat menurun; data ini belum membuktikan hubungan sebab-akibat.',
        'Semua siswa sudah berhenti menggunakan botol plastik.',
        'Jumlah sampah plastik seluruh sekolah pasti turun setengahnya.'
      ], answer: 1,
      explanation: 'Kita boleh menyatakan pola yang tampak pada data. Namun, untuk membuktikan sebab-akibat diperlukan informasi lain dan rancangan pengamatan yang lebih kuat.'
    },
    {
      category: 'LITERASI', stage: 'literasi', kicker: 'UJI BUKTI & CAKUPAN', title: 'Memeriksa klaim',
      prompt: 'Seseorang menulis, “Sampah plastik seluruh sekolah turun 50%.” Mengapa klaim tersebut belum didukung oleh bacaan?',
      options: [
        'Karena data hanya mengamati botol yang terlihat di kantin saat jam istirahat, bukan seluruh sampah sekolah.',
        'Karena angka pada tabel selalu salah jika hanya ada tiga minggu.',
        'Karena jumlah isi ulang dinyatakan dalam kali, bukan kilogram.',
        'Karena data tidak boleh digunakan untuk membuat kesimpulan.'
      ], answer: 0,
      explanation: 'Cakupan data terbatas pada kantin dan jam istirahat. Data juga mencatat jumlah botol yang terlihat, bukan berat seluruh sampah plastik sekolah.'
    },
    {
      category: 'NUMERASI', stage: 'numerasi', kicker: 'PERSENTASE DALAM KONTEKS', title: 'Membaca hasil survei',
      prompt: 'Dari 40 siswa yang disurvei, 14 siswa berangkat menggunakan transportasi umum. Berapa persentase siswa yang menggunakan transportasi umum?',
      options: ['25%', '30%', '35%', '40%'], answer: 2,
      explanation: 'Persentase = (14 ÷ 40) × 100% = 35%. Artinya, 35 dari setiap 100 siswa akan sebanding dengan proporsi tersebut.'
    },
    {
      category: 'NUMERASI', stage: 'numerasi', kicker: 'PERSENTASE & KEPUTUSAN', title: 'Belanja dengan cermat',
      prompt: 'Sebuah buku catatan berharga Rp20.000 mendapat diskon 15%. Berapa harga yang harus dibayar setelah diskon?',
      options: ['Rp3.000', 'Rp15.000', 'Rp17.000', 'Rp18.500'], answer: 2,
      explanation: 'Diskon = 15% × Rp20.000 = Rp3.000. Harga setelah diskon = Rp20.000 − Rp3.000 = Rp17.000.'
    },
    {
      category: 'NUMERASI', stage: 'numerasi', kicker: 'MEMBANDINGKAN DATA', title: 'Mengukur perubahan',
      prompt: 'Jumlah sampah terpilah yang tercatat adalah 24 kg pada Senin dan 12 kg pada Rabu. Berapa persen penurunan dari Senin ke Rabu?',
      options: ['25%', '40%', '50%', '60%'], answer: 2,
      explanation: 'Penurunan = 24 − 12 = 12 kg. Persentase penurunan = (12 ÷ 24) × 100% = 50%.'
    },
    {
      category: 'NUMERASI', stage: 'numerasi', kicker: 'RATA-RATA', title: 'Membaca kebiasaan',
      prompt: 'Waktu membaca empat siswa dalam sehari adalah 15, 20, 25, dan 40 menit. Berapa rata-rata waktu membaca mereka?',
      options: ['20 menit', '25 menit', '27,5 menit', '30 menit'], answer: 1,
      explanation: 'Rata-rata = (15 + 20 + 25 + 40) ÷ 4 = 100 ÷ 4 = 25 menit.'
    },
    {
      category: 'NUMERASI', stage: 'numerasi', kicker: 'LAJU & SATUAN', title: 'Memahami kecepatan',
      prompt: 'Rani berjalan sejauh 600 meter selama 8 menit dengan laju rata-rata tetap. Berapa jarak yang ditempuh setiap menit?',
      options: ['60 m/menit', '70 m/menit', '75 m/menit', '80 m/menit'], answer: 2,
      explanation: 'Laju = jarak ÷ waktu = 600 ÷ 8 = 75 meter per menit. Pastikan satuan ditulis agar makna hasil tidak hilang.'
    },
    {
      category: 'JEMBATAN TRIGONOMETRI', stage: 'trigonometri', kicker: 'MENGHUBUNGKAN SUDUT & PANJANG', title: 'Bayangan sebuah pohon',
      prompt: 'Pada saat tertentu, sudut elevasi Matahari terhadap tanah adalah 45°. Panjang bayangan pohon di tanah datar adalah 5 meter. Jika tan 45° = 1, berapa perkiraan tinggi pohon?',
      options: ['2,5 m', '5 m', '7,5 m', '10 m'], answer: 1,
      explanation: 'tan 45° = tinggi ÷ panjang bayangan. Karena tan 45° = 1, tinggi ÷ 5 = 1 sehingga tinggi pohon sekitar 5 meter. Model menganggap tanah datar dan objek tegak.'
    },
    {
      category: 'JEMBATAN TRIGONOMETRI', stage: 'trigonometri', kicker: 'MEMODELKAN SITUASI', title: 'Mengukur tiang bendera',
      prompt: 'Seorang siswa berdiri 12 m dari tiang. Sudut elevasi ke puncak tiang 30°. Tinggi mata siswa 1,5 m. Gunakan tan 30° ≈ 0,577. Berapa perkiraan tinggi tiang dari tanah?',
      options: ['5,8 m', '6,9 m', '7,3 m', '8,4 m'], answer: 3,
      explanation: 'Tinggi dari mata ke puncak = 12 × 0,577 ≈ 6,9 m. Tambahkan tinggi mata: 6,9 + 1,5 = 8,4 m (pembulatan satu desimal).'
    },
    {
      category: 'JEMBATAN TRIGONOMETRI', stage: 'trigonometri', kicker: 'MEMILIH PERBANDINGAN', title: 'Tangga menuju dinding',
      prompt: 'Sebuah tangga sepanjang 5 m membentuk sudut 53° terhadap lantai. Jika sin 53° ≈ 0,8, berapa tinggi ujung tangga dari lantai?',
      options: ['3 m', '4 m', '4,5 m', '5 m'], answer: 1,
      explanation: 'Tinggi merupakan sisi depan terhadap sudut 53°, sedangkan tangga adalah sisi miring. Gunakan sin 53° = tinggi ÷ 5, sehingga tinggi = 0,8 × 5 = 4 m.'
    },
    {
      category: 'JEMBATAN TRIGONOMETRI', stage: 'trigonometri', kicker: 'MENENTUKAN PANJANG', title: 'Kabel penyangga',
      prompt: 'Kabel penyangga membentuk sudut 30° terhadap tanah. Jarak mendatar dari kaki tiang ke pasak adalah 8 m. Jika cos 30° ≈ 0,866, berapa panjang kabel yang diperlukan?',
      options: ['6,9 m', '8 m', '9,2 m', '13,9 m'], answer: 2,
      explanation: 'Jarak mendatar adalah sisi samping dan kabel adalah sisi miring. cos 30° = 8 ÷ panjang kabel, sehingga panjang kabel = 8 ÷ 0,866 ≈ 9,2 m.'
    }
  ];

  const $ = (id) => document.getElementById(id);
  const els = {
    themeToggle: $('themeToggle'), fullscreenToggle: $('fullscreenToggle'), menuToggle: $('menuToggle'), mobileNav: $('mobileNav'),
    sideProgress: $('sideProgress'), sideProgressBar: $('sideProgressBar'), questionCount: $('questionCount'), categoryPill: $('categoryPill'),
    questionProgressBar: $('questionProgressBar'), questionContent: $('questionContent'), answerList: $('answerList'), answerHint: $('answerHint'),
    checkAnswer: $('checkAnswer'), feedbackBox: $('feedbackBox'), nextRow: $('nextRow'), nextQuestion: $('nextQuestion'),
    quizPanel: $('quizPanel'), finishPanel: $('finishPanel'), finalScore: $('finalScore'), finalDetail: $('finalDetail'), finishMessage: $('finishMessage'),
    reviewAnswers: $('reviewAnswers'), reviewList: $('reviewList'), restartQuiz: $('restartQuiz'), resetProgress: $('resetProgress')
  };

  let current = 0;
  let selected = null;
  let checked = false;
  let responses = Array(questions.length).fill(null);

  function loadSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && Array.isArray(saved.responses) && saved.responses.length === questions.length) {
        responses = saved.responses.map((x) => (x && Number.isInteger(x.choice) ? x : null));
        current = Math.min(Math.max(Number(saved.current) || 0, 0), questions.length - 1);
      }
    } catch (_) { /* Abaikan data penyimpanan yang tidak valid. */ }
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ current, responses })); }
    catch (_) { /* MPI tetap dapat digunakan jika penyimpanan browser tidak tersedia. */ }
  }

  function getCorrectCount() {
    return responses.reduce((sum, response, index) => sum + (response && response.choice === questions[index].answer ? 1 : 0), 0);
  }

  function getAnsweredCount() { return responses.filter(Boolean).length; }

  function updateProgress() {
    const correct = getCorrectCount();
    const pct = (correct / questions.length) * 100;
    els.sideProgress.textContent = `${correct}/${questions.length}`;
    els.sideProgressBar.style.width = `${pct}%`;
    els.questionProgressBar.style.width = `${((current + (checked ? 1 : 0)) / questions.length) * 100}%`;
    const stageIndex = current < 3 ? 0 : current < 8 ? 1 : 2;
    ['literasi', 'numerasi', 'trigonometri'].forEach((stage, index) => {
      const node = $(`stage-${stage}`);
      node.classList.toggle('active', index === stageIndex);
      const range = index === 0 ? [0, 3] : index === 1 ? [3, 8] : [8, 12];
      const stageResponses = responses.slice(range[0], range[1]);
      const stageComplete = stageResponses.every(Boolean);
      node.classList.toggle('done', stageComplete);
      node.querySelector('.stage-status').textContent = stageComplete ? '✓' : (index === stageIndex ? '●' : '○');
    });
  }

  function renderQuestion() {
    const q = questions[current];
    const saved = responses[current];
    selected = saved ? saved.choice : null;
    checked = Boolean(saved && saved.checked);
    els.questionCount.textContent = `TANTANGAN ${String(current + 1).padStart(2, '0')} / ${questions.length}`;
    els.categoryPill.textContent = q.category;
    els.questionContent.innerHTML = `<div class="question-kicker">${q.kicker}</div><h3>${q.title}</h3><p>${q.prompt}</p>`;
    els.answerList.innerHTML = '';
    q.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option';
      button.setAttribute('aria-pressed', selected === index ? 'true' : 'false');
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
      if (selected === index) button.classList.add('selected');
      if (checked) {
        button.disabled = true;
        if (index === q.answer) button.classList.add('correct');
        else if (index === selected) button.classList.add('incorrect');
      }
      button.addEventListener('click', () => chooseAnswer(index));
      els.answerList.appendChild(button);
    });
    els.checkAnswer.hidden = checked;
    els.checkAnswer.disabled = selected === null;
    els.answerHint.textContent = checked ? 'Jawaban sudah diperiksa.' : 'Pilih satu jawaban untuk melanjutkan.';
    els.feedbackBox.hidden = !checked;
    els.nextRow.hidden = !checked;
    if (checked) showFeedback(q, saved.choice);
    else els.feedbackBox.innerHTML = '';
    els.nextQuestion.textContent = current === questions.length - 1 ? 'Lihat hasil akhir →' : 'Tantangan berikutnya →';
    updateProgress();
  }

  function chooseAnswer(index) {
    if (checked) return;
    selected = index;
    els.answerList.querySelectorAll('.answer-option').forEach((button, i) => {
      button.classList.toggle('selected', i === index);
      button.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });
    els.checkAnswer.disabled = false;
  }

  function showFeedback(q, choice) {
    const isCorrect = choice === q.answer;
    els.feedbackBox.className = `feedback-box ${isCorrect ? 'good' : 'bad'}`;
    els.feedbackBox.innerHTML = `<div class="feedback-title">${isCorrect ? '✓ Tepat! Pilihanmu didukung informasi.' : 'Belum tepat. Mari periksa kembali alasannya.'}</div><p>${q.explanation}</p>`;
  }

  function checkAnswer() {
    if (selected === null || checked) return;
    checked = true;
    responses[current] = { choice: selected, checked: true };
    saveProgress();
    renderQuestion();
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      current += 1;
      saveProgress();
      renderQuestion();
      els.quizPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else showFinish();
  }

  function showFinish() {
    els.quizPanel.hidden = true;
    els.finishPanel.hidden = false;
    const correct = getCorrectCount();
    const pct = Math.round((correct / questions.length) * 100);
    els.finalScore.textContent = `${pct}%`;
    els.finalDetail.textContent = `${correct} dari ${questions.length} jawaban benar`;
    els.finishMessage.textContent = pct >= 80
      ? 'Kamu sudah siap menghubungkan informasi, data, dan model matematika. Pertahankan kebiasaan memeriksa alasan.'
      : pct >= 60
        ? 'Dasarmu mulai terbentuk. Cermati kembali umpan balik, terutama saat membaca batas data dan memilih operasi.'
        : 'Tidak apa-apa. Pemanasan adalah kesempatan mengenali strategi yang perlu dilatih sebelum masuk ke materi utama.';
    els.reviewList.hidden = true;
    els.reviewList.innerHTML = '';
    responses.forEach((response, index) => {
      const q = questions[index];
      const correctAnswer = q.options[q.answer];
      const isCorrect = response && response.choice === q.answer;
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `<b>${String(index + 1).padStart(2, '0')} · ${isCorrect ? 'Benar' : 'Perlu ditinjau'}</b><span>${q.title} — Jawaban benar: ${correctAnswer}</span>`;
      els.reviewList.appendChild(item);
    });
    localStorage.removeItem(STORAGE_KEY);
    els.finishPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function restart() {
    current = 0; selected = null; checked = false; responses = Array(questions.length).fill(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) { /* Aman diabaikan. */ }
    els.finishPanel.hidden = true;
    els.quizPanel.hidden = false;
    renderQuestion();
    els.quizPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  els.checkAnswer.addEventListener('click', checkAnswer);
  els.nextQuestion.addEventListener('click', nextQuestion);
  els.resetProgress.addEventListener('click', () => {
    if (window.confirm('Mulai ulang dari tantangan pertama? Progres pemanasan saat ini akan dihapus.')) restart();
  });
  els.restartQuiz.addEventListener('click', restart);
  els.reviewAnswers.addEventListener('click', () => {
    els.reviewList.hidden = !els.reviewList.hidden;
    els.reviewAnswers.textContent = els.reviewList.hidden ? 'Lihat ringkasan hasil' : 'Tutup ringkasan hasil';
  });

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('startCerdasTheme', theme); } catch (_) { /* Tidak wajib. */ }
    els.themeToggle.textContent = theme === 'dark' ? '☀' : '◐';
    els.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap');
  }
  let preferredTheme = 'light';
  try { preferredTheme = localStorage.getItem('startCerdasTheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (_) { /* Gunakan tema terang. */ }
  applyTheme(preferredTheme);
  els.themeToggle.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  els.fullscreenToggle.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch (_) { alert('Mode layar penuh tidak didukung atau diblokir oleh browser ini.'); }
  });
  els.menuToggle.addEventListener('click', () => {
    const isOpen = els.menuToggle.getAttribute('aria-expanded') === 'true';
    els.menuToggle.setAttribute('aria-expanded', String(!isOpen));
    els.mobileNav.hidden = isOpen;
  });
  els.mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    els.mobileNav.hidden = true;
    els.menuToggle.setAttribute('aria-expanded', 'false');
  }));

  loadSaved();
  // Jika halaman dibuka kembali setelah jawaban diperiksa, tampilkan umpan baliknya.
  renderQuestion();
})();
