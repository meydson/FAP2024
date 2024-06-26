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

