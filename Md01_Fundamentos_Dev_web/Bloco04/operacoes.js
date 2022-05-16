let operador = "";
let resultado = "";
let numero = "";

function operacao(numOuOp) {
  console.log(numOuOp);
  let textoAtual = document.getElementById("operacaoAtual").innerText;

  switch (numOuOp) {
    case "z":
      textoAtual = "0";
      break;
    case "/":
      operador = "/";
      textoAtual += operador;
      break;
    case "*":
      operador = "*";
      textoAtual += operador;
      break;
    case "-":
      operador = "*";
      textoAtual += operador;
      break;
    case "+":
      operador = "+";
      textoAtual += operador;
      break;
    case "=":
      if (textoAtual === 0) {
        textoAtual = numero;
        operador = "";
      } else {
        textoAtual += operador + numero;
        operador = "";
        numero = ""
      }
      break;
    case ",":
      textoAtual += ".";
      break;
    default:
      textoAtual += numOuOp;
  }

  if (textoAtual[0] == "0" && textoAtual.length > 1) {
    textoAtual = textoAtual.slice(1,textoAtual.length);
  }

  document.getElementById("operacaoAtual").innerText = textoAtual;
}

function calcula() {}
