function questao01() {
    var distancia = parseInt(prompt("Informe a distância em metros!"));
    var tempo = parseInt(prompt("Informe o tempo em segundos"));
    var velocidade = distancia/tempo;

    document.write(`A velocidade média com os valores inseridos foi de ${velocidade} m/s!`)

}

function questao02() {
    var altura = parseFloat(prompt("Informe sua altura!"));
    var genero = prompt("Informe seu gênero (m para masculino ou f para feminino");
    var peso_ideal;

    if (genero == "m") {
        peso_ideal = (72.7 * altura) - 58;
    } else {
        peso_ideal = (62.1 * altura) - 44.7;
    }

    document.write(`Seu peso ideal é ${peso_ideal} kg`);
}

function questao03() {
    var nome = prompt("Insira o nome do nadador!");
    var idade = parseInt(prompt("Insira a idade do nadador"));

    if (idade >= 5 && idade <= 7) {
        document.write("Categoria Infantil A");
    } else if (idade <= 10) {
        document.write("Categoria Infantil B");
    } else if (idade <= 13) {
        document.write("Categoria Juvenil A");
    } else if (idade <= 17) {
        document.write("Categoria Juvenil B");
    } else {
        document.write("Categoria Sênior!")
    }
}

function questao04() {
    var soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + i;
    }
    document.write(`O valor da soma dos 10 primeiros números inteiros é ${soma}`);
}

function questao05() {
    var valor = parseInt(prompt("Insira o valor ou 999 para exibir a soma e a média dos valores informados!"));
    var soma = 0;
    var media;
    var contador = 0;
    while (valor != 999) {
        contador++;
        soma = soma + valor;
        valor = parseInt(prompt("Insira o valor ou 999 para exibir a soma e a média dos valores informados!"));
    }
    media = soma / contador;
    document.write(`A soma dos valores digitados é ${soma} e a média é ${media}`);
}

function questao06() {
    var conjunto_a = [];
    var conjunto_b = [];

    for (i = 0; i < 8; i++) {
        conjunto_a.push(parseInt(prompt("Digite o valor desejado")));
    }
    
    for (i = 0; i < 8; i++) {
        conjunto_b.push(conjunto_a[i] * 4);
    }
    document.write(conjunto_b);
}

function questao07() {
    var conj_a = [];
    var conj_b = [];
    var conj_c = [];

    for (i = 0; i < 20; i++) {
        conj_a.push(parseInt(Math.random() * 100));
        conj_b.push(parseInt(Math.random() * 100));
        conj_c.push(conj_a[i] - conj_b[i]);
    }

    document.write(conj_c);
}

function questao08() {
    var nome = prompt("Informe seu nome!");
    var idade = parseInt(prompt("Informe sua idade"));

    document.write(`${nome} possui ${idade * 365} dias de vida`);
}

function questao09() {
    var valor_litro = parseFloat(prompt("Informe o valor do litro de gasolina!"));
    var valor_total = parseFloat(prompt("Informe o valor total pago!"));
    var litros = valor_total/valor_litro;

    document.write(`Você abasteceu no total ${litros.toFixed(2)} litros`);
}

function questao10() {
    var num1 = parseInt(prompt("Informe o primeiro número!"));
    var num2 = parseInt(prompt("Informe o segundo valor"));

    while (num1 <=0) {
        alert("O primeiro digitado é menor que zero!");
        num1 = parseInt(prompt("Informe o primeiro número!"));
    }
    while (num2 <= 0) {
        alert("O segundo digitado é menor que zero!");
        num2 = parseInt(prompt("Informe o segundo valor"));
    }

    document.write(`O valor de Z é ${(num1**2) + (num2**2)}`);
}

function questao11() {
    var numeros = [];

    for (i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt("Digite um número!")));
    }

    var numeros_ord = numeros.sort(function(a, b) { return a - b});
    
    document.write(numeros_ord);
}

function questao12() {
    var numeros = [];
    var contador = 0;
    var repetidos = [];

    for (i = 0; i < 10; i++) {
        numeros.push(parseInt(Math.random() * 10));
    }
    for (i = 0; i <= numeros.length; i++) {
        for (j = i + 1; j <= numeros.length - 1; j++) {
            if (numeros[i] == numeros[j]) {
                contador++;
                repetidos.push(numeros[i]);
            //console.log(numeros[i] + " " + numeros[j])
            }
        }
    }
    document.write(`A lista gerada foi ${numeros} e nela há ${contador} numeros repetidos, são eles ${repetidos}`);
}

function questao13() {
    var dia = parseInt(prompt("Informe um número de 1 à 7 referente aos dias da semana!"));

    switch (dia) {
        case 1:
            document.write("Domingo");
            break;
        case 2:
            document.write("Segunda-feira");
            break;
        case 3:
            document.write("Terça-feira");
            break;
        case 4:
            document.write("Quarta-feira");
            break;
        case 5:
            document.write("Quinta-feira");
            break;
        case 6:
            document.write("Sexta-feira");
            break;
        case 7:
            document.write("Sábado");
            break;
        default:
            alert("O número informado não está entre 1 e 7, tente novamente");
            break;
    }
}

function questao14() {
    var nota1 = [];
    var nota2 = [];
    var media = [];

    i = 0;
    while (i < 50) {
        nota1.push(parseInt(Math.random() * 10));
        nota2.push(parseInt(Math.random() * 10));
        media.push((nota1[i] + nota2[i])/2);
        document.write(`A primeira nota foi ${nota1[i]}, a segunda nota foi ${nota2[i]} e a média foi ${media[i]} <br>`);
        i++;
    }
}

function questao15() {
    var numeros = [];
    var soma = 0;
    i = 0;

    while (i < 50) {
        numeros.push(parseInt(Math.random() * 10));
        if (numeros[i] % 2 == 1) {
            soma += numeros[i]; 
        }
        i++;
    }
    
    document.write(`Os 50 números gerados foram: ${numeros} <br>`)
    document.write(`O somatório dos 50 números gerados é ${soma}`);
}

function questao16() {
    var numeros = [];
    var soma = 0;
    i = 0;

    while (i < 100) {
        numeros.push(i + 100);
        if (numeros[i] % 2 == 1) {
            soma += numeros[i]; 
        }
        i++;
    }

    document.write(`O somatório dos números ímpares entre 100 e 200 é ${soma}`);
}

function questao17() {
    var numero_int = [];
    var maior = 0;
    var menor;
    var i = 0;

    while (i < 20) {
        numero_int.push(parseInt(Math.random() * 100));
        i++;
    } 

    menor = numero_int[0];

    i = 0;
    while (i <= numero_int.length) {
        if (numero_int[i] >= maior) {
            maior = numero_int[i];
        } else if (numero_int[i] < menor) {
            menor = numero_int[i];
        }
        i++;
    }

    document.write(`Os números gerados foram ${numero_int}, o maior número da lista é ${maior} e o menor número da lista é ${menor}`)
}

//Questão 18 é parecida com a questão 14

function questao19() {
    var numero1 = parseInt(prompt("Informe o primeiro número da multiplicação!"));
    var numero2 = parseInt(prompt("informe o segundo número!"));
    var total = 0;

    var i = 0;
    while (i < numero2) {
        total += numero1;
        i++;
    }

    console.log(total);
}

function questao20() {
    var num_positivo = [];
    var num = parseInt(prompt("Digite um número positivo!"));
    var media = 0;
    var soma = 0;

    while (num > 0) {
        num_positivo.push(num);
        num = parseInt(prompt("Digite outro número positivo"));
    }

    for (i = 0; i < num_positivo.length; i++) {
        soma += num_positivo[i];
    }

    media = soma / num_positivo.length;
    
    document.write(`A média dos números informados é ${media}`);


}

function questao21() {
    var nota1 = [];
    var nota2 = [];
    var media = [];

    var i = 0;
    do {
        nota1.push(parseInt(Math.random() * 10));
        nota2.push(parseInt(Math.random() * 10));
        //console.log(nota1);
        //console.log(nota2);
        i++;//media.push((nota1[i] + nota2[i])/2);
    } while (i < 49) {
        nota1.push(parseInt(Math.random() *10));
        nota2.push(parseInt(Math.random() *10));
    }

    for (x = 0; x < nota1.length; x++) {
        media.push((nota1[x] + nota2[x])/2);
        document.write(`A primeira nota foi ${nota1[x]}, a segunda nota foi ${nota2[x]} e a média foi ${media[x]} <br>`);
    }
}

