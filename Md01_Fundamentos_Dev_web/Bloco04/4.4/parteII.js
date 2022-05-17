let palavra = "arara";
let teste = "netflix";

function verificaPolindromo(texto) {
  if (texto === texto.split('').reverse().join('')) {
    return true;
  }
  return false;
}

console.log(verificaPolindromo(teste));

