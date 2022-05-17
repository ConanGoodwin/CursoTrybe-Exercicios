let n = 5;
let linha = "";
let asterisco = 1;
let emBranco = n / 2 - 1;

for (let vertical = 0; vertical < n; vertical += 1) {
  linha = "";
  for (let caracter = 1; caracter <= n; caracter += 1) {
    if (caracter > emBranco && caracter <= emBranco + asterisco) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  asterisco += 2;
  emBranco -= 1;
  console.log(linha);
  if (asterisco >= n) {
    break;
  }
}
