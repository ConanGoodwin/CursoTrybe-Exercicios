"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var Ex01 = require("./length");
var Ex02 = require("./mass");
var Ex03 = require("./capacity");
var Ex04 = require("./area");
// console.log(`1 Kilometro em metros é: ${Ex01.convert(1,'km','m')}m`);
// console.log(`1 Quilograma em gramas é: ${Ex02.convert(1,'kg','g')}g`);
// console.log(`1 Quilolitro em litros é: ${Ex03.convert(1,'kl','l')}l`);
// console.log(`1 Quilômetro quadrado em metros quadrados é: ${Ex04.convert(1,'km²','m²')}m²`);
var typeCovertion = readlineSync.question('Qual o tipo de converção? ');
var baseValue = readlineSync.question('Qual é a unidade base da converção? ');
;
var conversionValue = readlineSync.question('Qual é a unidade meta da converção? ');
;
switch (typeCovertion) {
    case 'medida de comprimento':
        console.log("1 " + baseValue + " em " + conversionValue + " \u00E9: " + Ex01.convert(1, baseValue, conversionValue) + conversionValue);
        break;
    case 'massa':
        console.log("1 " + baseValue + " em " + conversionValue + " \u00E9: " + Ex02.convert(1, baseValue, conversionValue) + conversionValue);
        break;
    case 'volume':
        console.log("1 " + baseValue + " em " + conversionValue + " \u00E9: " + Ex03.convert(1, baseValue, conversionValue) + conversionValue);
        break;
    case 'area':
        console.log("1 " + baseValue + " em " + conversionValue + " \u00E9: " + Ex04.convert(1, baseValue, conversionValue) + conversionValue);
        break;
    default:
        break;
}
