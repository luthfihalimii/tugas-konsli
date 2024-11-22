### Algoritma Program Memasukkan Stock Barang

1. **Membuat Array untuk menyimpan Data**

   - Membuat array kosong dengan nama `stockBarang` untuk menyimpan data stok.

2. **Menginput Jumlah Stok yang Ingin Dimasukkan**

   - Menampilkan prompt kepada pengguna untuk memasukkan jumlah stok yang ingin di input atau dimasukkan, lalu menyimpan hasil nya dalam bentuk variabel `jumlahStok`.

3. **Melakukan Loop untuk Memasukkan Data Stok**

   - Lakukan loop sebanyak `jumlahStok`:
     1. **Input Nama Stok**:
        - Tampilkan prompt kepada pengguna untuk memasukkan nama stok, lalu simpan hasilnya dalam variabel `namaStok`.
     2. **Input Jumlah Stok**:
        - Tampilkan prompt kepada pengguna untuk memasukkan jumlah stok untuk `namaStok`, lalu simpan hasilnya dalam variabel `jumlahItem`.
     3. **Simpan Data Stok dalam Array**:
        - Buat objek baru dengan properti `nama` dan `jumlah` yang menyimpan `namaStok` dan `jumlahStock`.
        - Tambahkan objek tersebut ke dalam array `stockData`.

4. **Menampilkan Data Stok**
   - menggunakan `console.table(stockData)` untuk menampilkan semua data stok yang telah dimasukkan dalam bentuk tabel di console.
