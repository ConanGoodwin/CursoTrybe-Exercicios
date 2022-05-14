let qt = 9;
let espaco = "";
let asterisco = "";

if (qt > 1) {
  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   asterisco = "";
  //   for (let linha = 0; linha < qt; linha += 1) {
  //     asterisco += "*";
  //   }
  //   console.log(asterisco);
  // }

  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   asterisco += "*";
  //   console.log(asterisco);
  // }

  // for (let coluna = 0; coluna < qt; coluna += 1) {
  //   espaco = "";
  //   for (let linha = 0; linha < qt - coluna; linha += 1) {
  //     espaco += " ";
  //   }
  //   asterisco += "*";
  //   console.log(espaco + asterisco);
  // }

  // for (let coluna = 1; asterisco.length < qt; coluna += 1) {
  //   espaco = "";
  //   asterisco = "";
  //   for (let linha = 0; linha < (qt/2) - coluna; linha += 1) {
  //     espaco += " ";
  //   }
  //   for (let restLinha = 0; restLinha < qt - (espaco.length * 2); restLinha += 1) {
  //     asterisco += "*";
  //   }
  //   console.log(espaco + asterisco + espaco);
  // }

  for (let coluna = 1; asterisco.length < qt; coluna += 1) {
    espaco = "";
    asterisco = "";
    for (let linha = 0; linha < qt / 2 - coluna; linha += 1) {
      espaco += " ";
    }
    for (let restLinha = 0; restLinha < qt - espaco.length * 2; restLinha += 1) {
      asterisco += "*";
      if (asterisco.length < espaco.length * 2) {
        for (let vazioCentro = espaco.length + asterisco.length; vazioCentro < qt - espaco.length - 1; vazioCentro += 1) {
            asterisco += " ";
            restLinha += 1;
        }
      }
    }
    console.log(espaco + asterisco + espaco);
  }
}
