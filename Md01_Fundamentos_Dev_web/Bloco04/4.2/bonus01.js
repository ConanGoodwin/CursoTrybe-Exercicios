let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersPeloSeguinte = [];

//parte 03

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index+1]  === undefined) {
    numbersPeloSeguinte.push(numbers[index] * 2);
  }
  else {
    numbersPeloSeguinte.push(numbers[index] * numbers[index + 1]);
  }
}

console.log(numbersPeloSeguinte);

// for (numero of numbers) {
//   numbersPeloSeguinte.push(numero);
// }

// for (let index = 0; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     if (numbers[index] < numbers[index2]) {
//       let extra = numbers[index];
//       numbers[index] = numbers[index2];
//       numbers[index2] = extra;
//     }
//   }
// }

// console.log(numbers);

// for (let index = 0; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     if (numbers[index] > numbers[index2]) {
//       let extra = numbers[index];
//       numbers[index] = numbers[index2];
//       numbers[index2] = extra;
//     }
//   }
// }

// console.log(numbers);

// console.log(numbersPeloSeguinte);

// for (let index = 0; index < numbersPeloSeguinte.length; index += 1) {
//   if (numbersPeloSeguinte[index + 1] === undefined) {
//     numbersPeloSeguinte[index] *= 2;
//   } else {
//     numbersPeloSeguinte[index] *= numbersPeloSeguinte[index + 1];
//   }
// }
