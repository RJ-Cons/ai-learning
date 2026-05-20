# 🧠 Memory Management System

Dokumen ini menjelaskan hierarki dan alur pengelolaan memori ECHO untuk memastikan kontinuitas informasi dan efisiensi pengambilan data.

## 🏗️ Hierarki Memori

Sistem memori ECHO dibagi menjadi tiga level untuk menyeimbangkan detail jangka pendek dan wawasan jangka panjang:

### 1. Raw Logs (Daily Memory)
- **Lokasi:** `workspace/memory/`
- **Sub-struktur:**
    - `/daily`: Catatan harian kronologis (`YYYY-MM-DD.md`).
    - `/task`: Log pengerjaan tugas spesifik dan tracking progress.
    - `/refs`: Referensi cepat, snippet, dan data pendukung sementara.
    - `/learning`: Catatan pembelajaran, trial-and-error, dan wawasan baru.
- **Fungsi:** Catatan mentah tentang semua kejadian, instruksi, dan hasil kerja.
- **Karakteristik:** Detail tinggi, tidak terkurasi, bersifat kronologis.

### 2. Curated Memory (Long-term Memory)
- **Lokasi:** `workspace/MEMORY.md`
- **Fungsi:** Intisari dari Raw Logs. Menyimpan keputusan penting, preferensi pengguna, pelajaran yang dipelajari, dan fakta permanen.
- **Karakteristik:** Terkurasi, ringkas, menjadi referensi utama setiap sesi baru.

### 3. Enterprise Hub (Knowledge Base)
- **Lokasi:** `ai-learning/` (GitHub Repository)
- **Fungsi:** Penyimpanan terstruktur untuk data operasional, SOP, CRM, dan dokumentasi teknis.
- **Karakteristik:** Terorganisir per kategori, dapat diakses lintas lingkungan, standar publik/enterprise.

---

## 🔄 Alur Sinkronisasi Data

`Daily Logs` $\rightarrow$ (Review & Distilasi) $\rightarrow$ `MEMORY.md` $\rightarrow$ (Strukturisasi) $\rightarrow$ `ai-learning Hub`

## 🛠 Mekanisme Backup
Seluruh struktur di atas disinkronkan secara berkala ke GitHub melalui script `sync_state.ps1` yang berjalan pada setiap poll heartbeat.