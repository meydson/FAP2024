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

function exercicio1() {
    var nota1 = parseInt(prompt("Informe a primeira nota: "));
    var nota2 = parseInt(prompt("Informe a segunda nota: "));
    var nota3 = parseInt(prompt("Informe a terceira nota: "));
    media = (nota1 + nota2 + nota3) / 3;
    document.write("A média das 3 notas é: ", media);
}

function exercicio2() {
    var nota1 = parseInt(prompt("Informe a primeira nota: "));
    var nota2 = parseInt(prompt("Informe a segunda nota: "));
    var nota3 = parseInt(prompt("Informe a terceira nota: "));
    media = (nota1 + nota2 + nota3) / 3;
    document.write("A primeira nota foi: ", nota1, "<br>");
    document.write("A segunda nota foi: ", nota2, "<br>");
    document.write("A terceira nota foi: ", nota3, "<br>");
    document.write("A média das 3 notas é: ", media);
}

function exercicio3() {
    var nome = prompt("Informe o nome do usuário: ");
    var nota1 = parseInt(prompt("Informe a primeira nota: "));
    var nota2 = parseInt(prompt("Informe a segunda nota: "));
    media = (nota1 + nota2) / 2 ;
    document.write("O nome do usuário é: ", nome, "<br>");
    document.write("A média do usuário é: ", media);
}

function exercicio4() {
    var salario_atual = parseFloat(prompt("Informe o salário atual: "));
    var reajuste = parseFloat(prompt("Informe o percentual do reajuste: "));
    var salario_novo = salario_atual + (salario_atual * (reajuste/100));
    document.write("O novo salário é: ", salario_novo, "<br>");
}

function exercicio5() {
    var km_inicial = parseInt(prompt("Informe a quilometragem inicial: "));
    var km_final = parseInt(prompt("Informe a quilometragem final: "));
    var litros = parseInt(prompt("Informe os litros consumidos: "));
    var preco_combustivel = parseFloat(prompt("Informe o valor por litro: "));
    document.write("Distância total percorrida: ", km_final - km_inicial, " km", "<br>");
    document.write("Valor total gasto: ", "R$ ", litros * preco_combustivel, "<br>");
    document.write("Consumo: ", (km_final - km_inicial)/litros, " km/L", "<br>");
}

function exercicio6() {
    var nome_usuario = prompt("Informe o seu nome: ");
    var idade = parseInt(prompt("Informe sua idade: "));
    var nome_mae = prompt("Informe o nome da sua mãe: ");
    var idade_mae = parseInt(prompt("Informe a idade da sua mãe: "));
    var nome_pai = prompt("Informe o nome do seu pai: ");
    var idade_pai = parseInt(prompt("Informe a idade do seu pai: "));
    document.write(`${nome_usuario}, quando você nasceu, Dona ${nome_mae} tinha `, idade_mae - idade, ` anos e Seu ${nome_pai} tinha `, idade_pai - idade, " anos!");
    //document.write(`${idade_pai - idade}`)
}

function exercicio7() {
    var nota1 = parseFloat(prompt("Informe a primeira nota"));
    var nota2 = parseFloat(prompt("Informe a segunda nota"));
    var nota3 = parseFloat(prompt("Informe a terceira nota"));

    if (nota1 >= nota2 && nota1 >= nota3) {
        maior_nota1 = nota1;
        nota1 = 0;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maior_nota1 = nota2;
        nota2 = 0;
    } else {
        maior_nota1 = nota3;
        nota3 = 0;
    }

    if (nota1 >= nota2 && nota1 >= nota3) {
        maior_nota2 = nota1;
        nota1 = 0;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maior_nota2 = nota2;
        nota2 = 0;
    } else {
        maior_nota3 = nota3;
        nota3 = 0;
    }

    var media = (maior_nota1 + maior_nota2)/2

    if (media >= 7) {
        document.write("Aprovado por média!");
    } else if (media >= 3) {
        document.write("Prova final");
    } else {
        document.write("Reprovado!");
    }
}

function exercicio8() {
    var salario = parseFloat(prompt("Insira o valor do salário!"));
    var salario_novo = 0;
    if (salario <= 280) {
        salario_novo = salario * 1.2;
        document.write("O percentual de aumento aplicado foi de 20% <br>");
        document.write(`O valor do aumento foi de R$ ${salario_novo - salario}<br>`);
        document.write(`O valor do novo salário é de R$ ${salario_novo}`);
    } else if (salario <= 700) {
        salario_novo = salario * 1.15;
        document.write("O percentual de aumento aplicado foi de 15% <br>");
        document.write(`O valor do aumento foi de R$ ${salario_novo - salario}<br>`);
        document.write(`O valor do novo salário é de R$ ${salario_novo}`);
    } else if (salario <= 1500) {
        salario_novo = salario * 1.1;
        document.write("O percentual de aumento aplicado foi de 10% <br>");
        document.write(`O valor do aumento foi de R$ ${salario_novo - salario}<br>`);
        document.write(`O valor do novo salário é de R$ ${salario_novo}`);
    } else {
        salario_novo = salario * 1.05;
        document.write("O percentual de aumento aplicado foi de 5% <br>");
        document.write(`O valor do aumento foi de R$ ${salario_novo - salario}<br>`);
        document.write(`O valor do novo salário é de R$ ${salario_novo}`);
    }
}

function exercicio9() {
    var temperatura = parseInt(prompt("Insira a temperatura em Fharenheit!"));
    document.write(`A temperatura em graus Celcius é ${(temperatura-32)*5/9}`);
}

function exercicio10() {
    var numero1 = parseFloat(prompt("Insira o primeiro valor!"));
    var numero2 = parseFloat(prompt("Insira o segundo valor!"));
    if (numero1 > numero2) {
        document.write(`O número ${numero1} é maior que ${numero2}`);
    } else if (numero2 > numero1) {
        document.write(`O número ${numero2} é maior que ${numero1}`);
    } else {
        document.write("Os números são iguais");
    }
}

function exercicio11() {
    var nascimento = parseInt(prompt("Informe seu ano de nascimento!"));
    if (nascimento <= 2008) {
        document.write("Você poderá votar este ano!");
    } else {
        document.write("Você não poderá votar esse ano!")
    }
}

function exercicio12() {
    var num = [0,0,0];
    
    num[0] = parseInt(prompt("Insira o primeiro valor!"));
    num[1] = parseInt(prompt("Insira o segundo valor!"));
    num[2] = parseInt(prompt("Insira o terceiro valor!"));

    var maior = num[0];
    var menor = num[0];
    
    console.log(maior);

    for (i = 0; i < 3; i++) {
        if (num[i] >= maior) {
            maior = num[i];
        }
        if (num[i] <= menor) {
            menor = num[i];
        }
    }

    document.write(`O maior número é ${maior} e o menor número é ${menor}`);
}

function exercicio13() {
    var numero = parseInt(prompt("Digite um número inteiro"));
    if (numero % 2 == 0) {
        document.write(`O número ${numero} é par`);
    } else {
        document.write(`O número ${numero} é ímpar!`);
    }
}

function exercicio14() {
    var idade = parseInt(prompt("Informe sua idade!"));
    if (idade >= 18 && idade <= 67) {
        document.write("Você pode doar sangue!");
    } else {
        document.write("Você não pode doar sangue");
    }
}