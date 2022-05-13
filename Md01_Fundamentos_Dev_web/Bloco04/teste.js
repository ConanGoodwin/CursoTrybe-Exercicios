function principal() {
  var num1 = captaVariaveis();

  num1 = num1 * 2;

  exibeVariavel(num1);
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
