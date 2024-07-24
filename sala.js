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

// for of, exibe o conteúdo do Array
function teste_for_of() {
    const numeros = [1,2,3,4,5];
    for(let numero of numeros) {
      console.log(numero);
    }
}

// for in, exibe o índice do array

function teste_for_in() {
    const numeros = [1,2,3,4,5];
    for(let numero in numeros) {
    console.log(numero);
    }
}

function teste_array() {
    let array_teste = [];

    for (i = 0; i <= 3; i++) {
        array_teste.push(parseInt(prompt("Insira um valor")));
    }

    for (i = 0; i <= 3; i++) {
        if (isNaN(array_teste[i])) {
            console.log("entrou no if");
        }
    }
}

function soma_array() {
    let teste = [2,3,4,5,6,7];
    let soma = 0;
    //let tamanho = teste.length;
    //console.log(tamanho);
    for (i = 0; i < teste.length; i++) {
        soma = soma + teste[i];
    }

    console.log(soma);
}