# Analisis Performa Website Shopee Menggunakan Grafana k6 (Laporan Lengkap)

Repository ini berisi seluruh skrip pengujian performa untuk website **Shopee.co.id**, sebagai bagian dari tugas mata kuliah **Testing dan Implementasi Sistem Informasi** yang diampu oleh **Ibu Monica Cinthya, M.Kom.** di Universitas Negeri Surabaya.

## 📝 Deskripsi Proyek
Proyek ini mengevaluasi infrastruktur web Shopee menggunakan berbagai metodologi pengujian, mulai dari pengujian beban statis hingga simulasi beban bertahap (*ramping-up*). Pengujian difokuskan pada pengukuran respon waktu, stabilitas koneksi, dan penentuan ambang batas (*threshold*) yang tepat.

## 👥 Anggota Kelompok 3
1. **Naufal Daffa Wimasurya** (24051214216)
2. **Muhammad Rafi Ibrahim** (24051214224)
3. **Bindi Achmad** (24051214234)
4. **Davit Hengky Saputra** (24051214244)

## 🚀 Skenario Pengujian

### Bagian 1: Pengujian Dasar (Single Load)
* **t1passed.js (Smoke Test):** Pengujian beban ringan (2 VUs) untuk memastikan fungsi dasar website berjalan normal dengan respon di bawah 1 detik.
* **t1failed.js (Stress Test):** Pengujian dengan ambang batas ekstrim (50ms). Skenario ini sengaja dibuat gagal untuk menganalisis batas toleransi sistem.

### Bagian 2: Pengujian Lanjutan (Stages & Ramping)
* **test2berhasil.js (Load Test):** Simulasi beban bertahap hingga 30 pengguna. Menggunakan *threshold* realistis untuk website e-commerce besar.
* **test2gagal.js (Stress Test):** Simulasi beban tinggi hingga 300 pengguna. Skenario ini menguji pertahanan server terhadap lonjakan akses massa yang sering kali memicu *rate limiting*.

## 🛠️ Cara Menjalankan
Pastikan Anda sudah menginstal [k6](https://k6.io/). Jalankan perintah berikut di terminal:

```bash
# Skenario Dasar
k6 run t1passed.js
k6 run t1failed.js

# Skenario Lanjutan (Stages)
k6 run test2berhasil.js
k6 run test2gagal.js

```
git clone https://github.com/bindhmad/Code-Pengujian-Performa-Website-Shopee-Menggunakan-K6.git

📊 Kesimpulan Analisis
Hasil pengujian menunjukkan bahwa website Shopee memiliki stabilitas yang sangat baik pada beban rendah hingga moderat (di bawah 30 users). Namun, penentuan threshold yang terlalu ketat (seperti pada t1failed.js) atau jumlah pengguna yang terlalu besar tanpa ramp-up yang panjang dapat menyebabkan status pengujian menjadi Failed meskipun server tetap beroperasi tanpa error 5xx.
