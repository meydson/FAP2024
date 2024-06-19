function teste_for() {
    for (i = 100; i > 0; i--) {
        document.write(i, "<br>");
    }
}

function teste_while() {
    var i = 1000;
    while (i > 900) {
        document.write(i, "<br>");
        i--;
    }
}

function teste_do_while() {
    var i = 0;
    do {
        document.write(i, "<br>");
        i++;
    } while (i<=10);
}

function tabuada_8() {
    var i = 0;
    do {
        document.write(`${i} x 8 = `, i * 8, "<br>");
        i++
    } while(i <= 10);
}