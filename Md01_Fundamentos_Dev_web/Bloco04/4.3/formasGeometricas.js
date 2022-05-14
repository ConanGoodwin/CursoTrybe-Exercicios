let qt = 5;
let saida = "";
let saidaEspaco = "";

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

  for (let coluna = 0; coluna < qt; coluna += 1) {
    saidaEspaco = "";
    for (let linha = 0; linha < qt - coluna; linha += 1) {
      saidaEspaco += " ";
    }
    saida += "*";
    console.log(saidaEspaco + saida);
  }
}
