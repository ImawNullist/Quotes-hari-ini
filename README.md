
Quote API: https://github.com/lukePeavey/quotable


Kode JavaScript ini digunakan untuk mengambil kutipan acak dari API dan menampilkannya di halaman web, serta menyediakan fungsionalitas untuk membagikan kutipan tersebut di Twitter.

Penjelasan kode:

Variabel:
quote: Merujuk ke elemen HTML dengan ID "quote".
author: Merujuk ke elemen HTML dengan ID "author".
api_url: Berisi URL untuk API yang menyediakan kutipan acak.
Fungsi getquote:
Fungsi asinkron yang mengambil URL sebagai argumen.
Menggunakan fetch untuk mengambil data dari URL yang diberikan.
Menggunakan json() untuk mengonversi respons dari API menjadi objek JavaScript.
Menampilkan objek data yang diterima dari API ke konsol.
Memperbarui konten elemen HTML quote dan author dengan nilai dari objek data yang diterima dari API.
Pemanggilan fungsi getquote:
Memanggil fungsi getquote dengan api_url sebagai argumen untuk mengambil dan menampilkan kutipan acak saat halaman dimuat.
Fungsi tweet:
Membuka jendela baru untuk membagikan kutipan di Twitter.
Menggunakan window.open untuk membuka jendela baru dengan URL yang berisi teks kutipan dan penulisnya.
Menentukan ukuran jendela baru.
Cara kerja kode:

Saat halaman dimuat, fungsi getquote dipanggil untuk mengambil kutipan acak dari API dan menampilkannya di halaman web.
Jika pengguna mengklik tombol "Quotes Baru", fungsi getquote akan dipanggil lagi untuk mengambil dan menampilkan kutipan acak yang baru.
Jika pengguna mengklik tombol "Berbagi", fungsi tweet akan dipanggil untuk membuka jendela baru tempat pengguna dapat membagikan kutipan tersebut di Twitter.



Fungsi async:

Fungsi asinkron adalah fungsi yang dapat ditangguhkan (dihentikan sementara) dan dilanjutkan nanti tanpa memblokir thread utama.
Fungsi asinkron ditandai dengan kata kunci async sebelum deklarasi fungsi.
Fungsi asinkron mengembalikan objek Promise.
Fungsi await:

Kata kunci await digunakan di dalam fungsi asinkron untuk menangguhkan eksekusi fungsi hingga operasi asinkron selesai.
await hanya dapat digunakan di dalam fungsi asinkron.
Saat fungsi await dipanggil, eksekusi fungsi akan dihentikan sementara hingga operasi asinkron selesai.
Setelah operasi asinkron selesai, eksekusi fungsi akan dilanjutkan dari baris setelah await.
Fungsi fetch:

Fungsi fetch adalah fungsi bawaan JavaScript yang digunakan untuk mengambil sumber daya dari jaringan.
Fungsi fetch mengembalikan objek Promise yang berisi respons dari permintaan.
Objek Promise dapat digunakan dengan await untuk menangguhkan eksekusi fungsi hingga respons diterima.
Contoh penggunaan async, await, dan fetch:

async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  console.log(data);
}
getQuote();
javascript (auto)


Dalam contoh ini, fungsi getQuote ditandai sebagai asinkron. Di dalam fungsi, kita menggunakan await untuk menangguhkan eksekusi fungsi hingga respons dari permintaan fetch diterima. Setelah respons diterima, objek data akan berisi kutipan acak yang diambil dari API.

Keuntungan menggunakan async, await, dan fetch:

Membuat kode lebih mudah dibaca dan dipahami.
Menghindari penggunaan callback yang bersarang.
Memungkinkan penulisan kode asinkron yang lebih bersih dan terstruktur






:nth-child(2) adalah sebuah pseudo-class dalam CSS yang digunakan untuk memilih elemen anak kedua dari sebuah elemen induk.

Contoh penggunaan:

css
ul li:nth-child(2) {
  color: red;
}
css (auto)


Kode di atas akan membuat elemen li kedua di dalam elemen ul berwarna merah.

Dalam kode CSS yang Anda berikan, :nth-child(2) digunakan untuk memilih elemen tombol kedua di dalam elemen .quote-box.

css
.quote-box button:nth-child(2) {
    background: transparent;
    color: rgb(23, 124, 229);
}
css (auto)


Kode di atas akan membuat tombol kedua di dalam elemen .quote-box memiliki latar belakang transparan dan teks berwarna rgb(23, 124, 229).

Penjelasan tambahan:

:nth-child(2) memilih elemen anak kedua, terlepas dari jenis elemennya.
:nth-child(2n) memilih semua elemen anak yang merupakan kelipatan dua, seperti elemen anak kedua, keempat, keenam, dan seterusnya.
:nth-child(2n+1) memilih semua elemen anak yang merupakan bilangan ganjil, seperti elemen anak pertama, ketiga, kelima, dan seterusnya.
Anda dapat menggunakan :nth-child() untuk memilih elemen anak berdasarkan indeksnya, tanpa perlu mengetahui jenis elemennya secara spesifik. Hal ini berguna ketika Anda ingin menerapkan gaya yang berbeda pada elemen anak tertentu dalam sebuah elemen induk.



::before menyisipkan konten sebelum konten elemen yang dipilih.
::after menyisipkan konten setelah konten elemen yang dipilih.
Konten yang disisipkan dapat berupa teks, gambar, atau elemen HTML lainnya.
Posisi elemen ::before dan ::after dapat diatur menggunakan properti CSS seperti top, bottom, left, dan right.
