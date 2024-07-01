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

function media_btn() {
    var nota1 = parseInt(prompt("Informe a primeira nota!"));
    var nota2 = parseInt(prompt("Informe a segunda nota!"));
    var nota3 = parseInt(prompt("Informe a terceira nota!"));
    var media = 0;

    function aprovacao(a, b, c) {
        media = (nota1 + nota2 + nota3)/3;
        if (media >= 7) {
            document.write("A média foi: ", media, "<br>", "Resultado: Aprovado");
        } else {
            document.write("A média foi: ", media, "<br>", "Resultado: Reprovado");
        }
    }

    aprovacao(nota1, nota2, nota3);
}