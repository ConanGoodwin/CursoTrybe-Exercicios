let n = 5;
let linha = ""; 
let asterisco = 1;
let emBranco = n - asterisco;

for (let vertical = 0; vertical < n; vertical += 1) {
  linha = "";
  for (let caracter = 1; caracter <= n; caracter +=1) {
    if (caracter === asterisco) {
      linha += "*"
    } else {
      linha += " ";
    }
    asterisco += 1;
  }
  console.log(linha);
}