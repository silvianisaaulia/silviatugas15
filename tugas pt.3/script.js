var tanya = true;
while (tanya){
    var p = prompt('pilih: kertas, gunting, batu');

    var comp = Math.random();

if(comp < 0.34){
    comp = 'kertas';
}else if (comp >= 0.34 && comp < 0.67){
    comp = 'gunting';
}else{
    comp = 'batu';
}
console.log(comp);
// var hasil = '';
// if (p == comp){
//     hasil = 'SERI';
// }else if(p == 'kertas'){
//     if(comp == 'batu'){
//         hasil = 'MENANG';
//     }else{
//         hasil = 'KALAH';
//     }
// }else if(p == 'gunting'){
//     if(comp == 'kertas'){
//         hasil = 'KALAH';
//     }else{
//         hasil = 'MENANG';
//     }
// }else if(p == 'batu'){
//     if(comp == 'kertas'){
//         hasil = 'KALAH';
//     }else{
//         hasil = 'MENANG';
//     }
// } else{
//     hasil = 'Masukkan pilihan yang BENAR';
// }
// if (p == comp){
//     hasil = 'SERI';
// }else if(p == 'kertas'){
//     if (comp == 'batu'){
//         hasil = 'MENANG';
//     }else{''
//         hasil = 'KALAH';
//     }
// }
var hasil = '';
if (p == comp){
    hasil = 'SERI';
}else if(p == 'kertas'){
    hasil = (comp == 'batu') ? 'KALAH' : 'KALAH';
}else if(p == 'gunting'){
    hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH';
}else if(p == 'batu'){
    hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH';
}else{
    hasil = 'Masukkan pilihan yang BENAR';
}

alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu' + hasil);

tanya = confirm('MAIN LAGI ??');
}
alert('TERIMAKASIH SUDAH BERMAIN...!!!');