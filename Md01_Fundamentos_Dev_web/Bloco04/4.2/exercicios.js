let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;

for (numero of numbers) {
  console.log(numero);
}

for (numero of numbers) {
  soma+=numero;
}

console.log(soma);
console.log(soma / numbers.length);

if ((soma / numbers.length) > 20) {
  console.log("valor maior que 20");
}else {
  console.log("valor menor ou igual a 20");
}