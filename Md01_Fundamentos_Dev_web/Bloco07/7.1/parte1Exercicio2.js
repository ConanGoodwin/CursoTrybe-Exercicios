// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens = oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens[0]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[3]},${oddsAndEvens[4]},${oddsAndEvens[5]} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉