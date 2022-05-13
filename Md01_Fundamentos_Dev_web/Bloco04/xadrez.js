function principal() {
  let nomePeca = captaVariaveis();

  switch (nomePeca.toLowerCase()) {
    case "peão":
      exibeVariavel(
        "movimento um pra frente(ou dois no primeiro movimento), come em um diagonal."
      );
      break;
    case "torre":
      exibeVariavel("movimento em linha reta, qualquer distancia.");
      break;
    case "cavalo":
      exibeVariavel("movimento em L.");
      break;
    case "bispo":
      exibeVariavel("movimento em diagonal.");
      break;
    case "rei":
      exibeVariavel("movimento um espaço adjacente.");
      break;
    case "rainha":
      exibeVariavel("movimento de qualquer outra peça, afora o do cavalo.");
      break;
    default:
      exibeVariavel("peça inválida.");
  }
}

function captaVariaveis() {
  var valor = prompt("Digite o valor da variavel:");

  return valor;
}

function exibeVariavel(saida) {
  var promptDeSaida = prompt("Digite o texto base de saida:");
  var numeroDeSaida = prompt("Digite em qual saida vai ser exibido(1-5)");

  if (saida != null) {
    x = promptDeSaida + " " + saida;
    document.getElementById("saida0" + numeroDeSaida).innerHTML = x;
  }
}
