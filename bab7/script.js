// 1. Deklarasi variabel dengan let
let nama = 'Andi Pratama'; // String
let usia = 16;             // Number (bulat)
let nilaiRata = 88.5;      // Number (desimal)
let lulus = true;          // Boolean
let alamat = null;         // Null (sengaja kosong)
let hobi;                  // Undefined (belum diisi)

// 2. Deklarasi konstanta dengan const
const NAMA_SEKOLAH = 'SMK TJP Tuban';
const PI = 3.14159;

// 3. Mengubah nilai variabel let (diperbolehkan)
nama = 'Budi Santoso';
usia = usia + 1;

// Mengubah nilai const (akan menghasilkan TypeError jika dijalankan)
// NAMA_SEKOLAH = 'SMK Lain'; 

// 4. Cek tipe data dengan typeof
console.log(typeof nama);   // 'string'
console.log(typeof usia);   // 'number'
console.log(typeof lulus);  // 'boolean'
console.log(typeof alamat); // 'object'
console.log(typeof hobi);   // 'undefined'
