<p align="center"><a href="https://github.com/ZuyinatinK/bali-mangrove-forest"><img alt="Visit Bali’s Mangrove Forest" src="assets/img/logo-mg.png" width="150vw"/></a></p>
<h1 align="center">Visit Bali’s Mangrove Forest</h1>

**VisRove | Visit Bali’s Mangrove Forest** adalah Sistem Informasi Geografis (GIS) yang memetakan lokasi ekowisata Mangrove di Pulau Bali. Proyek ini merupakan project akhir UAS untuk Mata Kuliah _Geographic Information System_. VisRove memberikan informasi mengenai tempat-tempat wisata Mangrove di Bali yang dapat diakses oleh pengunjung secara mudah dengan peta interaktif serta dokumentasi lokasi. Sistem ini dirancang tidak hanya untuk pengunjung tetapi juga untuk admin yang bertugas dalam pengelolaan data. Dengan fitur-fitur yang ada, admin dapat memantau dan mengelola data tempat wisata secara efisien.

## Daftar Isi
- [Tentang VisRove](#tentang-visrove)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Instalasi](#instalasi)
- [Preview Keseluruhan Website](#preview-keseluruhan-website)
- [Kesimpulan](#kesimpulan)

## Preview 🚀
- Halaman Single-Page untuk Pengunjung

![Preview-1](Markdown/preview/preview-1.png)

- Halaman Dashboard Admin

![Preview-2](Markdown/preview/preview-2.png)

## Tentang VisRove
**VisRove** adalah aplikasi Sistem Informasi Geografis (GIS) yang memetakan lokasi ekowisata Mangrove di Pulau Bali. Program ini menyediakan informasi tentang tempat wisata Mangrove dengan peta interaktif dan dokumentasi visual. Sistem ini mendukung dua jenis pengguna, yaitu pengunjung dan admin.

Pengunjung dapat menjelajahi berbagai lokasi wisata Mangrove melalui peta interaktif yang menampilkan informasi detail tentang nama tempat, alamat, koordinat (latitude, longitude), serta fitur pencarian yang memudahkan navigasi.

Admin dapat mengakses dashboard khusus untuk mengelola data, memantau titik peta, dan melakukan manajemen user. Semua data wisata Mangrove dapat dikelola secara efisien melalui fitur CRUD.

## Fitur Utama
### Pengunjung
- **Home**: Menampilkan informasi utama yang menjadi daya tarik website.
- **About**: Memberikan detail mengenai sistem, misi, visi, dan tujuan pengembangan.
- **Maps**: Peta interaktif yang memetakan lokasi wisata Mangrove di Bali dengan deskripsi lengkap (nama tempat, alamat, latitude, longitude) serta fitur pencarian. Dibuat menggunakan `Leaflet.js`.
- **Documentation**: Menampilkan gambar dokumentasi dari tempat wisata.
- **Team**: Memperkenalkan kontributor pengembang website.
- **Contact**: Menyediakan informasi kontak.

### Admin
- **Profile**: Halaman untuk pengelolaan data diri admin.
- **Dashboard**: Menyajikan ringkasan data wisata Mangrove dan informasi umum sistem.
- **User Management**: Memungkinkan admin mengelola pengguna aktif dan non-aktif.
- **Dataset Mangrove**: Fitur untuk menambahkan, mengedit, menghapus, dan menampilkan data Mangrove (CRUD).
- **Maps Management**: Admin dapat memantau dan mengelola titik lokasi pada peta berdasarkan data yang ada.

## Teknologi yang Digunakan
- **PHP & MySQL**: Digunakan sebagai backend untuk mengelola logika aplikasi dan database.
- **HTML, CSS, SCSS, JavaScript**: Digunakan untuk membangun antarmuka pengguna dan interaktivitas di sisi frontend.
- **CodeIgniter 3**: Framework PHP yang ringan dan efisien untuk mempermudah pengembangan backend aplikasi berbasis web.
- **Bootstrap 5**: Framework CSS yang responsif untuk mendesain tampilan yang modern dan responsive.
- **Leaflet.js**: Library JavaScript untuk menampilkan peta interaktif dan visualisasi data geografis.

Teknologi-teknologi ini digabungkan untuk memberikan pengalaman pengguna yang responsif, dinamis, dan mudah diakses pada berbagai perangkat.

## Instalasi
Berikut adalah langkah-langkah untuk menginstal dan menjalankan VisRove di server lokal:
1. Clone repository:
    ```
    https://github.com/ZuyinatinK/bali-mangrove-forest.git
    ```
2. Buat database:
    - Buat database baru di MySQL dengan nama sesuai keinginan Anda (misalnya `visrove_db`).
    - Import file SQL dari folder `database/visrove.sql` ke dalam database yang telah dibuat:
        ```
        mysql -u root -p visrove_db < database/visrove.sql
        ```
3. Konfigurasi database:
    - Buka file application/config/database.php.
    - Sesuaikan konfigurasi database sesuai dengan pengaturan server lokal Anda (username, password, database name).
        ```
        $db['default'] = [
        'dsn' => '',
        'hostname' => 'localhost',
        'username' => 'root',
        'password' => '',
        'database' => 'visrove_db',
        'dbdriver' => 'mysqli',
        'dbprefix' => '',
        'pconnect' => false,
        'db_debug' => ENVIRONMENT !== 'production',
        'cache_on' => false,
        'cachedir' => '',
        'char_set' => 'utf8',
        'dbcollat' => 'utf8_general_ci',
        'swap_pre' => '',
        'encrypt' => false,
        'compress' => false,
        'stricton' => false,
        'failover' => [],
        'save_queries' => true,
        ];
        ```
4. Sesuaikan base URL:
    - Buka file application/config/config.php.
    - Temukan dan sesuaikan baris berikut untuk mengatur base_url:
        ```
        $config['base_url'] = 'http://localhost/bali-mangrove-forest/';
        ```
5. Jalankan server lokal:
    - Pastikan server lokal (XAMPP/LAMP) berjalan, dan buka project di browser:
        ```
        http://localhost/bali-mangrove-forest
        ```

## Preview Keseluruhan WEB
Website **Visit Bali’s Mangrove Forest** memiliki antarmuka yang responsif dan modern Beberapa halaman utama yang ditampilkan adalah sebagai berikut:
- Halaman **Single-Page**
    - Home

    ![Preview-Home](Markdown/mockups/home.png)

    - About

    ![Preview-About](Markdown/mockups/about.png)

    - Maps

    ![Preview-Maps](Markdown/mockups/maps.png)

    ![Preview-Maps](Markdown/mockups/data-maps.png)

    - Documentation

    ![Preview-Documentation](Markdown/mockups/doc.png)

    - Team

    ![Preview-Team](Markdown/mockups/team.png)

    - Contact

    ![Preview-Contact](Markdown/mockups/contact.png)

- Halaman Login & Register
    - Login

    ![Preview-Login](Markdown/mockups/login.png)

    - Register

    ![Preview-Register](Markdown/mockups/register.png)

- Halaman yang dapat di akses Admin
    - Account / Profile

    ![Preview-Account](Markdown/mockups/account.png)

    - Dashboard

    ![Preview-Dashboard](Markdown/mockups/dash.png)

    - User
    
    ![Preview-User](Markdown/mockups/user.png)

    - Dataset Mangrove

    ![Preview-Dataset](Markdown/mockups/dataset.png)

    - Maps

    ![Preview-Maps](Markdown/mockups/maps-dash.png)


## Kesimpulan
VisRove memberikan solusi praktis bagi wisatawan yang ingin menjelajahi ekowisata Mangrove di Bali melalui peta interaktif yang user-friendly. Sistem ini memudahkan pengunjung dalam menemukan informasi dan admin dalam mengelola data. Dengan antarmuka yang responsif dan fitur pencarian peta yang interaktif, VisRove merupakan alat yang efektif untuk meningkatkan kesadaran dan pengetahuan tentang ekowisata Mangrove di Bali.

## Kontributor
Proyek **VisRove | Visit Bali’s Mangrove Forest** ini dikembangkan sebagai bagian dari UAS Mata Kuliah **Geographic Information System**, dengan kontribusi dari para mahasiswa. Kami mengucapkan terima kasih atas kontribusi dan dukungan dari semua pihak yang telah berperan dalam pengembangan proyek ini.

| **Nama**                      | **Keterangan**                |
|-------------------------------|-------------------------------|
| Zuyinatin Khofifah            | Pengembang Backend & Frontend |
| Puan Maharani Kurniawan       | Pengembang Peta Interaktif    |
| Wulan Prima Safitri           | Desainer UI/UX                |

Terima kasih juga kepada pengguna yang telah memberikan masukan dan feedback dalam pengembangan **VisRove**.