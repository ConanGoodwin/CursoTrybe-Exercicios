let operador = false;

function operacao(numOuOp) {
  console.log(numOuOp);
  let textoAtual = document.getElementById("operacaoAtual").innerText;

  switch (numOuOp) {
    case "=":
      if (textoAtual != 0 && operador !== true) {
        document.getElementById("operacaoAnterior").innerText = textoAtual;
        textoAtual = eval(textoAtual);
        console.log(textoAtual);
      }
      break;
    case "z":
      textoAtual = "0";
      break;
    case "," || ".":
      if (!textoAtual.includes(".") && !textoAtual.includes(",")) {
        textoAtual += ".";
      }
      break;
    default:
      if (numOuOp === "/" || numOuOp === "*" || numOuOp === "-" || numOuOp === "+") {
        operador = true;
      } else {
        operador = false;
      }
      if (operador === false ) {
        textoAtual += numOuOp;
      } else if (textoAtual[textoAtual.length - 1] !== "/" && textoAtual[textoAtual.length - 1] !== "*" && textoAtual[textoAtual.length - 1] !== "-" && textoAtual[textoAtual.length - 1] !== "+") {
        textoAtual += numOuOp;
      }
      if (textoAtual === "0/" || textoAtual === "0*" || textoAtual === "0-" || textoAtual === "0+") {
        textoAtual = "0";
      }
  }

  if (textoAtual[0] == "0" && textoAtual.length > 1) {
    textoAtual = textoAtual.slice(1, textoAtual.length);
  }

  document.getElementById("operacaoAtual").innerText = textoAtual;  
}
