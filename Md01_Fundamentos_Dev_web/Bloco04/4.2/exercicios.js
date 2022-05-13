let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = 0;
let qtImpar = 0;
let menor = 0;
let qt25 = [];
let qt25por2 =[];

for (numero of numbers) {
  console.log(numero);
}

for (numero of numbers) {
  soma += numero;
}

console.log(soma);
console.log(soma / numbers.length);

if (soma / numbers.length > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

for (numero of numbers) {
  if (numero > maior) {
    maior = numero;
  }
}

console.log("Maior numero do array: " + maior);

for (numero of numbers) {
  if (numero % 2 !== 0) {
    qtImpar += 1;
  }
}

if (qtImpar > 0) {
  console.log("Quantidade de numeros ímpar: " + qtImpar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// for (numero of numbers) {
//   if (numero < menor) {
//     menor = numero;
//   }
// }

for (let numero = 0; numero < numbers.length; numero += 1) {
  if (numero === 0 && numbers[numero] !== undefined) {
    menor = numbers[numero];
  }else {
    if (numbers[numero] < menor) {
      menor = numbers[numero];
    }
  }
}

console.log("Menor numero do array: " + menor);

for (let numero = 0; numero < 25; numero += 1) {
  qt25.push(numero + 1);
}

console.log(qt25);

for (numero of qt25) {
  qt25por2.push(numero / 2);
}

console.log(qt25por2);