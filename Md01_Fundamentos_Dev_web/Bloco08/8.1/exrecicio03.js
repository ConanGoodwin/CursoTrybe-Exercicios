const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontua = (arrayCorretas, arrayRespondidas) => {
  let totalAcertos = 0;
  
  for (let index = 0; index < arrayCorretas.length; index += 1) {
    if (arrayCorretas[index] === arrayRespondidas[index]) {
      totalAcertos += 1;
    } else if (arrayRespondidas[index] !== 'N.A') {
      totalAcertos -= 0.5;
    }
  }
  return totalAcertos;
}

const calculaQtAcertos = (arrayCorretas, arrayRespondidas, funcPontua) => funcPontua(arrayCorretas, arrayRespondidas);

console.log(calculaQtAcertos(RIGHT_ANSWERS, STUDENT_ANSWERS, pontua));