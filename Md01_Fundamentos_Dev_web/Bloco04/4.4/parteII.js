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

// let array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

// function maiorNome(nomes) {
//   let nomeMaior = "";

//   for (let chave in nomes) {
//     if (nomes[chave].length > nomeMaior.length) {
//       nomeMaior = nomes[chave];
//     }
//   }
//   return nomeMaior;
// }

// console.log(maiorNome(array));

// let inteiros = [2, 3, 2, 5, 8, 2, 3];
// let inteiros2 = [2, 5, 2, 5, 5, 2, 5];

// function maisRepete(numeros) {
//   let qtAtual = 0;
//   let qtRepetido = 0;
//   let index = "";

//   for (let chave in numeros) {
//     for (chave2 in numeros) {
//       if (numeros[chave] === numeros[chave2]) {
//           qtAtual += 1;
//       }
//     }
//     if (qtAtual > qtRepetido) {
//       qtRepetido = qtAtual;
//       index = numeros[chave];
//     }
//     qtAtual = 0;
//   }

//   return index;
// }

// console.log(maisRepete(inteiros2));

// let numeroNatual = 5;

// function somaNumero(numero) {
//   let total = 0;

//   for (let index = 1; index <= numero; index += 1) {
//     total += index;
//   }
//   return total;
// }

// console.log(somaNumero(numeroNatual));

let stringWord = "trybe";
let stringEnding = "be";

function verificaFimPalavra(palavra, cauda) {
  let seFinal = false;

  for (let index = palavra.length - 1; index > cauda.length; index -= 1) {
    if (palavra[index] === cauda[index - cauda.length - 1]) {
      seFinal = true;
    } else {
      seFinal = false;
    }
  }

  return seFinal;
}

console.log(verificaFimPalavra(stringWord, stringEnding));
