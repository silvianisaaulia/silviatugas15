let kesempatan = 3;

let y = Math.floor(Math.random() * 10 + 1);

let guess = 1;

document.getElementById("submitguess").onclick = function () {

    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("KAMU BENAR "
            + guess + " Tebakan ");
    }

    else if (x > y) {
        kesempatan--
        guess++;
        alert("Terlalu TINGGI");
        alert("Kesempatan Tersisa: " + kesempatan)
    }
    else {
        kesempatan--
        guess++;
        alert("Terlalu RENDAH")
        alert("Kesempatan Tersisa: " + kesempatan)
    }
    if (kesempatan === 0)
        alert("Kesempatan Telah Habis.\nJawaban yang benar = " + y)
}