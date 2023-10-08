                                /* CONTOH SEDERHANA PROGRAM JAVASCRIPT FUNDAMENTAL */

/* IF ELSE CASE */
let angka = prompt("Masukkan Angka")
if(angka % 2 == 0) {
    alert(angka + " Adalah Bilangan Genap");       
} else if (angka % 2 == 1) {
    alert(angka + " Adalah Bilangan Ganjil");
} else {
    alert("Yang Anda Masukkan Bukan Angka");
}


/* NESTED IF CASE */
/*case 1*/
let s = '';
for( let i = 0; i < 10; i++ ){
    for(let j = 0; j <= i; j++ ){
        s += '❤️';
    }
    s += '\n';
}
console.log(s)

/*case 2*/
let q = '';
for( let i = 10; i > 0; i-- ){
    for(let j = 0; j < i; j++ ){
        q += '🛵';
    }
    q += '\n';
}
console.log(q)



/* SWITCH CASE */
alert("SELAMAT DATANG 🚀");

    let lagi = true;
    while (lagi == true){

    const Food = prompt("Silahkan Pilih Makanan Favorit Anda : \n Nasi padang , Nasi goreng, Nasi kuning ");
    switch(Food){
        case "Nasi padang" :
         alert("Makanan ini enak beud euu cuma seharga 25.000 doang, tergantung varian ehh"); 
        break;    
        case "Nasi goreng" :
         alert("Makanan inimah khasnya orang indo banget dah seharga 15.000 doang coyyyy");
        break;    
        case "Nasi kuning" :
         alert("Makanan ini enak si apalagi dicampur bawang goreng dan seharga 25.000 doang cuuiii rilll");
        break;    
        default :
         alert("jangan masukin pilihan yang salah dong beb")
            
            lagi = confirm("COBA LAGI??");
        }
}
    alert("TERIMA KASIH");


/* FOR CASE */
let nomorGrab = 1;
let jmlhGrab = 10;
let grabBeroperasi = 6;
for(nomorGrab = 1 ; nomorGrab <= jmlhGrab ; nomorGrab++ ) {

    if ( nomorGrab <= 6 && nomorGrab !=5 ) {
        console.log("Grab No. " + nomorGrab + " beroperasi dengan baik.");
    } else if ( nomorGrab === 7 || nomorGrab === 5 ) {
        console.log("Grab No. " + nomorGrab + " sedang lembur.");
    } else {
        console.log("Grab No. " + nomorGrab + " sedang tidak beroperasi");
    }
}


/* WHILE CASE */
let i = 1;
while(i <= 50) {
   console.log("Hello World "  + i + " x");
   i++;
}


/* DO WHILE CASE */
let x = 1;
do {
    console.log("Ini adalah 🚀 no : " + x);
  x++;
} while (x <= 5);


/* FUNCTION CASE */
function menghitungVolumeDuaKubus (A, B) {

    let volumeA = A * A * A;
    let volumeB = B * B * B;
       
    total = volumeA + volumeB ;

    return total;
 }
    
console.log(menghitungVolumeDuaKubus(8, 3));


                                /* SEKIAN PROGRAM SEDERHANA MENGENAI JAVASCRIPT*/