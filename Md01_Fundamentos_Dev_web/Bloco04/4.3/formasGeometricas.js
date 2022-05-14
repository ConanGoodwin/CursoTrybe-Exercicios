let qt = 7;
let saida = "";
let espaco = "";
let asterisco = "";

if (qt > 1) {
  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   saida = "";
  //   for (let linha = 0; linha < qt; linha += 1) {
  //     saida += "*";
  //   }
  //   console.log(saida);
  // }

  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   saida += "*";
  //   console.log(saida);
  // }

  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   espaco = "";
  //   for (let linha = 0; linha < qt - coluna; linha += 1) {
  //     espaco += " ";
  //   }
  //   saida += "*";
  //   console.log(espaco + saida);
  // }

  for (let coluna = 1; saida.length < qt; coluna += 1) {
    espaco = "";
    saida = "";
    for (let linha = 0; linha < (qt/2) - coluna; linha += 1) {
      espaco += " ";
    }
    for (let restLinha = 0; restLinha < qt - (espaco.length * 2); restLinha += 1) {
      saida += "*";
    }
    console.log(espaco + saida + espaco);
  }
}
