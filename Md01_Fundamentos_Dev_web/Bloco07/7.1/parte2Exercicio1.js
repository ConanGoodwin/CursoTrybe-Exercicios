// const fatorial = (numero1, numero2) => numero1 * numero2;
// const numero = 4;
// let resultado = numero;

// for (let index = numero - 1; index > 0; index -= 1) {
//   resultado = fatorial(resultado, index);
// }

// console.log(resultado);

const fatorial = (numero1, numero2) => (numero1 > 1) ? fatorial(numero1 - 1, numero2 * (numero1 - 1)) : numero2;

// console.log(fatorial(6,6));

module.exports = fatorial;