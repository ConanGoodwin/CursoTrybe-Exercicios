const fatora = (numero, index) => (index > 1) ? fatora(numero * (index - 1), index - 1) : numero;

console.log(fatora(...[5,5]));