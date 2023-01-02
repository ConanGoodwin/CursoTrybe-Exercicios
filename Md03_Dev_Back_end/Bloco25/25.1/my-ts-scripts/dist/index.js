"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require('readline-sync');
const Ex01 = __importStar(require("./length"));
const Ex02 = __importStar(require("./mass"));
const Ex03 = __importStar(require("./capacity"));
const Ex04 = __importStar(require("./area"));
// console.log(`1 Kilometro em metros é: ${Ex01.convert(1,'km','m')}m`);
// console.log(`1 Quilograma em gramas é: ${Ex02.convert(1,'kg','g')}g`);
// console.log(`1 Quilolitro em litros é: ${Ex03.convert(1,'kl','l')}l`);
// console.log(`1 Quilômetro quadrado em metros quadrados é: ${Ex04.convert(1,'km²','m²')}m²`);
console.log(`Tipos de conversão:
- 'medida de comprimento'
- 'massa'
- 'volume'
- 'area'`);
const typeCovertion = readlineSync.question('Qual o tipo de converção? ');
const baseValue = readlineSync.question('Qual é a unidade base da converção? ');
;
const conversionValue = readlineSync.question('Qual é a unidade meta da converção? ');
;
switch (typeCovertion) {
    case 'medida de comprimento':
        console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex01.convert(1, baseValue, conversionValue)}${conversionValue}`);
        break;
    case 'massa':
        console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex02.convert(1, baseValue, conversionValue)}${conversionValue}`);
        break;
    case 'volume':
        console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex03.convert(1, baseValue, conversionValue)}${conversionValue}`);
        break;
    case 'area':
        console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex04.convert(1, baseValue, conversionValue)}${conversionValue}`);
        break;
    default:
        break;
}
