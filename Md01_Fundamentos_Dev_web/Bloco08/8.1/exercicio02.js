// const sorteio = (aposta, funcao) =>
//   aposta === funcao() ? "Parabéns você ganhou!" : "Tente novamente.";

// console.log(sorteio(2, () => Math.floor(Math.random() * 5)));


// const sorteio = (aposta, funcao) => funcao(aposta) ? "Parabéns você ganhou!" : "Tente novamente.";

// console.log(sorteio(2, (number) => number === Math.floor(Math.random() * 5)));


// const sorteio = (aposta, funcao) => {
//   const numSorteado = Math.floor(Math.random() * 3);

//   return funcao(numSorteado, aposta) ? "Parabéns você ganhou!" : "Tente novamente.";
// }

// console.log(sorteio(2, (number1, number2) => number1 === number2));


const valida = (number1, number2) => number1 === number2;

const sorteio = (aposta, funcao) => {
  const numSorteado = Math.floor(Math.random() * 5);

  return funcao(numSorteado, aposta) ? "Parabéns você ganhou!" : "Tente novamente.";
}

console.log(sorteio(2,valida));