let n = 7;
let linha = "";
let bordaEsquerda = parseInt((n / 2).toFixed(0));
let bordaDireita = parseInt((n / 2).toFixed(0));
let emBranco = (n / 2).toFixed(0) - 1;

for (let vertical = 0; vertical < n; vertical += 1) {
  linha = "";
  for (let caracter = 1; caracter <= n; caracter += 1) {
    if (caracter == bordaEsquerda || caracter == bordaDireita) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  bordaEsquerda -= 1;
  bordaDireita += 1;
  emBranco -= 1;
  console.log(linha);
  if (emBranco === 0) {
    console.log("*".repeat(n));
    break;
  }
}