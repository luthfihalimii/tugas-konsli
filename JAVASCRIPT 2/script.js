function cekPrima() {
  // Mengambil nilai dari input
  let inputValue = document.getElementById("input").value;

  // Memeriksa apakah input kosong atau bukan angka
  if (inputValue === "" || isNaN(inputValue)) {
    document.getElementById("result").innerHTML =
      "Form harus diisi dengan angka";
    console.error("Form harus diisi dengan angka");
    return; // Menghentikan eksekusi fungsi jika input tidak valid
  }

  // Mengkonversi input menjadi bilangan bulat
  let num = parseInt(inputValue);

  // Inisialisasi variabel untuk menyimpan hasil pemeriksaan
  let isPrime = true;

  // Jika angka kurang dari atau sama dengan 1, maka bilangan tersebut bukan bilangan prima
  if (num <= 1) {
    isPrime = false;
  } else {
    // Memeriksa apakah bilangan tersebut memiliki faktor selain 1 dan dirinya sendiri
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break; // Keluar dari loop jika faktor ditemukan
      }
    }
  }

  // Menampilkan hasil
  if (isPrime) {
    document.getElementById(
      "result"
    ).innerHTML = `Bilangan ${num} adalah bilangan prima`;
    console.log(`Bilangan ${num} adalah bilangan prima`);
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Bilangan ${num} bukan bilangan prima`;
    console.log(`Bilangan ${num} bukan bilangan prima`);
  }
}
