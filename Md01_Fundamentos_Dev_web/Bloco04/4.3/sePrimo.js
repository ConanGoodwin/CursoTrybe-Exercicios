let num = 7;
let divisao = 0;

for (let index = 2; index <= num; index += 1) {
  if (num % index === 0) {
    divisao += 1;
  }
}

if (divisao === 1) {
  console.log("É primo!");
} else {
  console.log("Não é primo!");
}
