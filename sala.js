function media() {
    var a = parseInt(prompt("informe o primeiro valor!"));
    var b = parseInt(prompt("informe o segundo valor!"));
    var c = parseInt(prompt("informe o terceiro valor!"));

    function media_calc(a, b, c) {
        return (a + b + c)/3;
    }

    var media = media_calc(a, b, c);
    document.write(media,"<br>");
    document.write("<a href='./exercicios_sala.html'>Voltar</a>");
}