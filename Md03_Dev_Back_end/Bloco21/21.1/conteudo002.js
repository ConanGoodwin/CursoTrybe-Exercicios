// minha-aplicacao/index.js
const meuModulo = require('./meusmodulos'); //multiplos modulos locais em uma pasta(e exportados em index.js na pasta)
const fs = require('fs'); //modulo interno

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
fs.readFileSync('./meuArquivo.txt');