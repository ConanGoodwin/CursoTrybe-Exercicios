function principal() {
  const num1 = parseInt(captaVariaveis()),
    num2 = parseInt(captaVariaveis()),
    num3 = parseInt(captaVariaveis());

  if (num1 === num2) {
    if (num1 === num3) {
      exibeVariavel("Todos os numeros são iguais.");
    } else if (num1 > num3) {
      exibeVariavel(num1);
    } else {
      exibeVariavel(num3);
    }
  } else if (num1 === num3) {
    if (num1 > num2) {
      exibeVariavel(num1);
    } else {
      exibeVariavel(num2);
    }
  } else if (num2 === num3) {
    if (num2 > num1) {
      exibeVariavel(num2);
    } else {
      exibeVariavel(num1);
    }
  } else if (num1 > num2) {
    if (num1 > num3) {
      exibeVariavel(num1);
    } else {
      exibeVariavel(num3);
    }
  } else if (num2 > num3) {
    exibeVariavel(num2);
  } else {
    exibeVariavel(num3);
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
