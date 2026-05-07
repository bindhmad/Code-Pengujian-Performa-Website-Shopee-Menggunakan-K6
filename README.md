# Analisis Performa Website Shopee Menggunakan Grafana k6

Repository ini dibuat untuk memenuhi tugas mata kuliah **Testing dan Implementasi Sistem Informasi** yang diampu oleh **Ibu Monica Cinthya, M.Kom.** di Universitas Negeri Surabaya (UNESA).

## 📝 Deskripsi Proyek
Proyek ini bertujuan untuk melakukan pengujian beban (*load testing*) dan pengujian stres (*stress testing*) pada website e-commerce (Shopee.co.id). Pengujian dilakukan menggunakan alat **Grafana k6** untuk mengukur stabilitas dan kecepatan respon server terhadap jumlah pengguna tertentu (*Virtual Users*).

## 👥 Anggota Kelompok 3
1. **Naufal Daffa Wimasurya** (24051214216)
2. **Muhammad Rafi Ibrahim** (24051214224)
3. **Bindi Achmad** (24051214234)
4. **Davit Hengky Saputra** (24051214244)

## 🚀 Skenario Pengujian
Terdapat dua skenario utama dalam pengujian ini:

1. **Skenario PASSED (t1passed.js)**
   - **Tujuan:** Mengetahui performa website pada beban ringan.
   - **Parameter:** 2 VUs, durasi 20 detik.
   - **Threshold:** p(90) < 10 detik.
   - **Hasil:** Berhasil (Passed) karena respon server sangat cepat di bawah beban rendah.

2. **Skenario FAILED (t1failed.js)**
   - **Tujuan:** Menguji batas performa sistem dengan standar yang sangat ketat.
   - **Parameter:** 10 VUs, durasi 30 detik.
   - **Threshold:** p(90) < 50ms.
   - **Hasil:** Gagal (Failed) karena ambang batas yang ditetapkan tidak realistis untuk ukuran website kompleks.

## 🛠️ Cara Menjalankan
Pastikan Anda sudah menginstal [k6](https://k6.io/) di perangkat Anda.

1. Clone repository ini:
   ```bash
   git clone [https://github.com/bindhmad/Code-Pengujian-Performa-Website-Shopee-Menggunakan-K6.git](https://github.com/bindhmad/Code-Pengujian-Performa-Website-Shopee-Menggunakan-K6.git)

   # Jalankan skenario PASSED
k6 run t1passed.js

# Jalankan skenario FAILED
k6 run t1failed.js
