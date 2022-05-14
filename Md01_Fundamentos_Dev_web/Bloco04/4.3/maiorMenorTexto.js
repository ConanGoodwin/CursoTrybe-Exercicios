let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let menor = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  } else if (array[index].length < menor.length) {
    menor = array[index];
  }
}

console.log("Ma maior palavra é: " + maior);
console.log("Ma menor palavra é: " + menor);