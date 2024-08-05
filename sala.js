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
        soma += teste[i];
    }

    console.log(soma);
}

function media_array() {
    let teste = [1,5,7,10];
    let soma = 0;
    let media = 0;

    for (i = 0; i < teste.length; i++) {
        soma += teste[i];
    }

    media = soma / teste.length;
    console.log(media)
}

// Função criação array
function criarArray() {
    let listaElementos = Array()
    
    listaElementos['frutas'] = ['Banana', 'jaca', 'Uvas', 'Abacaxi', 'Manga']
    listaElementos['pessoas'] = ['Flavio', 'José', 'Maria', 'Josefa', 'Gustavo']
    
    //adicionar elemento no final do array
    listaElementos['frutas'].push('laranja')
    
    //adicionar elemento no inicio do array
    listaElementos['pessoas'].unshift('Meydson')

    //remover elemento no final do array
    listaElementos['pessoas'].pop()

    //remover elemento no inicio do array
    listaElementos['frutas'].shift()

    console.log(listaElementos)
}

function matriz() {
    let matriz = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];

    for (i = 0; i < matriz.length ; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}

function soma_matriz() {
    let matriz = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
    let soma = 0;

    for (i = 0; i < matriz.length ; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
            console.log(matriz[i][j]);
        }
    }

    console.log("Soma " + soma);
}

function media_matriz() {
    let matriz = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
    let soma = 0;
    let media = 0;

    for (i = 0; i < matriz.length ; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
            console.log(matriz[i][j]);
        }
        media = soma / matriz[i].length;
        console.log("Media = "+ media);
        soma = 0;
    }
}

function fila() {
    let fila = Array()
        fila.push(1)
        fila.push(2)
        fila.push(3)
        fila.push(4)
        fila.push(parseInt(prompt("Insira um número")))

    function exibir_fila() {
        for (i = 0; i < fila.length; i++) {
            console.log(fila[i]);
        }
    }

    exibir_fila();

    if (fila.length <= 0) {
        console.log("A fila está vazia");
    } else {
        fila.shift();
        exibir_fila();
    }

    console.log("O tamanho da fila é: "+fila.length)
}

let pilha = [];
let contador = 0;

function addPilha() {
    pilha.push(contador);
    contador++;
    console.log(pilha);
}

function remPilha() {
    pilha.pop();
    contador--;
    console.log(pilha)
}

function exibirPilha() {
    console.log(pilha);
}