const readLine = require('readline-sync');

// console.log('Hello, world!');

const name = readLine.question("Qual é o seu nome? ");
const age = readLine.questionInt("Qual é sua idade? "); 

console.log(`Hello, ${name}! You are ${age} years old!`);