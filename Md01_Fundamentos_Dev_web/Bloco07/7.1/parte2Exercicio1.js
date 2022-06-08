// const fatorial = (numero1, numero2) => numero1 * numero2;
// const numero = 4;
// let resultado = numero;

// for (let index = numero - 1; index > 0; index -= 1) {
//   resultado = fatorial(resultado, index);
// }

// console.log(resultado);

const fatorial2 = (numero1, numero2) => (numero1 > 0) ? fatorial2(numero1 - 1, numero2 * numero1) : numero2;

console.log(fatorial2(4,5));