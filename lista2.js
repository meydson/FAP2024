function exercicio1() {
    document.write("Hello world!");
}

function exercicio2() {
    var numero = parseInt(prompt("Digite um valor!"));
    document.write(`O cubo do número ${numero} é ${numero * numero * numero}`);
}

function exercicio4() {
    var base = parseInt(prompt("Informe o valor da base do triângulo!"));
    var altura = parseInt(prompt("informe o valor da altura do triângulo!"));
    document.write(`O valor da área do triângulo informado é ${(base*altura)/2}`);
}

function exercicio5() {
    var raio = parseFloat(prompt("Informe o valor do raio do circulo!"));

    document.write(`O perímetro do circulo é ${2*3.14*raio} <br>`);
    document.write(`A área do circulo é ${3.14*raio**2}`);
}

function exercicio6() {
    var numero_original = parseFloat(prompt("informe um numero!"));
    var numero_novo = 0;

    numero_novo = numero_original.toString();
    numero_novo = numero_novo.split('');
    numero_novo = numero_novo.reverse();
    numero_novo = parseFloat(numero_novo.join(''));
    numero_novo = numero_novo * Math.sign(numero_original);

    document.write(`O inverso do número digitado é ${numero_novo}`);
}

function exercicio7() {
    var palavra = prompt("Informe uma palavra!");
    var vogais = 0;

    palavra = palavra.split('');
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u") {
            vogais++;
        }
    }
    palavra = palavra.join('');

    document.write(`A palavra ${palavra} tem ${vogais} vogais!`)
}

function exercicio8() {
    var capital = parseFloat(prompt("Informe o capital inicial!"));
    var tempo = parseInt(prompt("Informe o tempo do investimento em meses!"));
    var juros = parseInt(prompt("Informe a taxa de juros mensal!"));
    juros = juros/100;
    
    var montante = capital * ((1+juros)**tempo);

    document.write("O total do retorno do investimento é de R$ ",montante.toFixed(2));
}

function exercicio9() {
    var num = parseInt(prompt("Informe um número para que seja calculado o fatorial!"));
    var fatorial = 1;
    for (i = num; i > 0; i--) {
        fatorial = fatorial * i;
    }
    document.write(`O valor fatorial do número informado é ${fatorial}`);
}

function exercicio10() {
    var palavra = prompt("Insira a palavra desejada!");
    var letra = prompt("Informe a letra que você deseja contar na palavra!");
    var contar = 0;
    palavra = palavra.split('');
    for (i = 0; i <= palavra.length; i++) {
        if (palavra[i] == letra) {
            contar++;
        }
    }
    palavra = palavra.join('');
    document.write(`Na palavra ${palavra} existem ${contar} letras ${letra}!`);
}

function exercicio11() {
    var num1 = parseInt(prompt("Insira um número para verificar se é primo!"));
    var i = 2;
    var cont = 0;
    while (i <= num1) {
        if (num1 > 2 && num1 % i == 0) {
            cont++;
        }
        i++;
    }
    if (cont > 1) {
        document.write(`O número ${num1} não é primo!`);
    } else {
        document.write(`O número ${num1} é primo!`);
    }
}