// let palavra = "arara";
// let teste = "netflix";

// function verificaPolindromo(texto) {
//   if (texto === texto.split('').reverse().join('')) {
//     return true;
//   }
//   return false;
// }

// console.log(verificaPolindromo(teste));

// let array = [2, 3, 6, 7, 10, 1];

// function retornaMaior(numeros) {
//   let maior = numeros[0];

//   for (let index = 1; index < numeros.length; index += 1) {
//     if (maior < numeros[index]) {
//       maior = index;
//     }
//   }

//   return maior;
// }

// console.log(retornaMaior(array));

// let array = [2, 4, 6, 7, 10, 0, -3];

// function retornaMenor(numeros) {
//   let menor = numeros[0];

//   for (let index = 1; index < numeros.length; index += 1) {
//     if (menor > numeros[index]) {
//       menor = index;
//     }
//   }

//   return menor;
// }

// console.log(retornaMenor(array));

let array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorNome(nomes) {
  let nomeMaior = "";

  for (let chave in nomes) {
    if (nomes[chave].length > nomeMaior.length) {
      nomeMaior = nomes[chave];
    }
  }
  return nomeMaior;
}

console.log(maiorNome(array));
