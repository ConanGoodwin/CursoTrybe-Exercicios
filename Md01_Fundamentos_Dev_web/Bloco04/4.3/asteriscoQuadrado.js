let n = 5;
let linha = "";

for (let vertical = 0; vertical< n; vertical += 1){
  linha = "";
  for (let caracter = 0; caracter < n; caracter += 1) {
    linha += "*";
  }
  console.log(linha);
}