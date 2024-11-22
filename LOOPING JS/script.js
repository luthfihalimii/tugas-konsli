// PROGRAM MEMASUKKAN STOCK BARANG 

let stockBarang = [];

// Menentukan jumlah stok yang ingin dimasukkan
let jumlahStok = parseInt(
  prompt("Berapa banyak stok yang ingin Kamu masukkan?")
);

// Loop untuk memasukkan data stok ke dalam array
for (let i = 0; i < jumlahStok; i++) {
  // Memasukkan nama stok
  let namaStok = prompt("Masukkan nama stok ke-" + (i + 1) + ":");

  // Memasukkan jumlah stok
  let jumlahStok = parseInt(
    prompt("Masukkan jumlah stok untuk " + namaStok + ":")
  );

  // Menyimpan data stok dalam bentuk objek di array
  stockBarang.push({ nama: namaStok, jumlah: jumlahStok });
}

// Menampilkan data stok dalam bentuk tabel
console.table(stockBarang);
