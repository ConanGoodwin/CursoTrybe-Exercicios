let operador = "";

function operacao(numOuOp) {
  console.log(numOuOp);
  let textoAtual = document.getElementById("operacaoAtual").innerText;

  switch (numOuOp) {
    case "=":
      if (textoAtual != 0) {
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
      textoAtual += numOuOp;
      if (textoAtual === "0/" || textoAtual === "0*" || textoAtual === "0-" || textoAtual === "0+") {
        textoAtual = "0";
      }
  }

  if (textoAtual[0] == "0" && textoAtual.length > 1) {
    textoAtual = textoAtual.slice(1, textoAtual.length);
  }

  document.getElementById("operacaoAtual").innerText = textoAtual;  
}
