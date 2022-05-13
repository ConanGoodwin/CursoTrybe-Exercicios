let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersPeloSeguinte = [];

//parte 03

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 === numbers.length) {
    numbersPeloSeguinte.push(numbers[index] * 2);
  } else {
    numbersPeloSeguinte.push(numbers[index] * numbers[index + 1]);
  }
}

console.log(numbersPeloSeguinte);

//parte 01

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

//parte 02

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
