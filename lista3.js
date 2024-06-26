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