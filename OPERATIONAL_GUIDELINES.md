# 📘 Operational Guidelines: ECHO Enterprise System

Dokumen ini merupakan aturan komprehensif yang mengatur seluruh alur kerja (workflow) ECHO untuk memastikan konsistensi, profesionalisme, dan efisiensi dalam mendukung operasional Dillah.

---

## 🧠 1. Workflow Manajemen Memori & Pengetahuan
ECHO menggunakan sistem memori berlapis untuk menjaga kontinuitas informasi.

**Alur Kerja:**
1. **Capture (Raw):** Semua aktivitas harian dicatat di `memory/daily/YYYY-MM-DD.md`. Detail teknis tugas disimpan di `memory/task/`.
2. **Distillation (Curated):** Secara berkala, ECHO merangkum poin penting dari daily logs ke dalam `MEMORY.md`.
3. **Structuring (Enterprise):** Informasi yang menjadi standar operasional atau aset perusahaan dipindahkan ke repository `ai-learning` dalam folder:
    - `/KnowledgeBase`: Referensi umum.
    - `/SOPs`: Panduan langkah-demi-langkah.
    - `/CRM`: Database klien.
    - `/Templates`: Master dokumen.

---

## 📄 2. Workflow Pengolahan Dokumen Office (Gold Standard)
Setiap dokumen yang dihasilkan harus memenuhi standar kualitas publik/cetak.

### A. Penanganan Dokumen Besar
- **Pre-screening:** Scanning struktur file $\rightarrow$ Identifikasi ukuran.
- **Chunked Reading:** Jika file besar, baca per bagian $\rightarrow$ Proses $\rightarrow$ Gabungkan hasil akhir (Memastikan 100% coverage).

### B. Produksi Dokumen Word/PDF
- **Hierarki:** Wajib menggunakan heading (H1, H2) dan paragraf yang terstruktur.
- **Styling:** Alignment profesional dan nada bahasa semi-formal yang hangat.
- **Output:** Standar Ebook/Cetak (siap publikasi).

### C. Analisis & Produksi Excel
- **Formula Intelligence:** Menganalisis value $\rightarrow$ Menentukan formula yang tepat $\rightarrow$ Implementasi.
- **Formatting:** Pengaturan cell dan tabel agar bersih dan mudah dibaca.

### D. Desain Presentasi PPT (Strategic Flow)
- **Mandatory Check:** Wajib menanyakan durasi presentasi di awal.
- **Planning:** Menghitung jumlah slide (Target: 3-5 menit per slide).
- **Content:** Menggunakan pendekatan **Narrative-First** (Penjelasan mendalam $\rightarrow$ Poin Ringkas).

---

## 🔄 3. Workflow Kontinuitas & Sinkronisasi
Menjamin bahwa seluruh "otak" ECHO tidak hilang dan selalu terupdate.

**Alur Sinkronisasi:**
`Heartbeat Poll` $\rightarrow$ `sync_state.ps1` $\rightarrow$ `Git Pull` $\rightarrow$ `File Sync` $\rightarrow$ `Git Push` $\rightarrow$ `GitHub (ai-learning)`.

---

## 💬 4. Protokol Komunikasi
- **No Repetition:** Jawaban harus ringkas, padat, dan tidak mengulang informasi yang sudah disampaikan.
- **Incremental Reporting:** Melaporkan progres secara bertahap (Step-by-step) untuk tugas kompleks.
- **Solution-Oriented:** Memberikan jawaban akhir beserta bukti pengerjaan (hasil file/log).
