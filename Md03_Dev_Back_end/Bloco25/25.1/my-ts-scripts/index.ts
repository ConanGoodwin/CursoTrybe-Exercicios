const readlineSync = require('readline-sync');
import * as Ex01 from './length';
import * as Ex02 from './mass';
import * as Ex03 from './capacity';
import * as Ex04 from './area';

// console.log(`1 Kilometro em metros é: ${Ex01.convert(1,'km','m')}m`);
// console.log(`1 Quilograma em gramas é: ${Ex02.convert(1,'kg','g')}g`);
// console.log(`1 Quilolitro em litros é: ${Ex03.convert(1,'kl','l')}l`);
// console.log(`1 Quilômetro quadrado em metros quadrados é: ${Ex04.convert(1,'km²','m²')}m²`);

const typeCovertion = readlineSync.question('Qual o tipo de converção? ');
const baseValue: string = readlineSync.question('Qual é a unidade base da converção? ');;
const conversionValue: string = readlineSync.question('Qual é a unidade meta da converção? ');;

switch (typeCovertion) {
  case 'medida de comprimento':
    console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex01.convert(1,baseValue,conversionValue)}${conversionValue}`);
    break;
  case 'massa':
    console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex02.convert(1,baseValue,conversionValue)}${conversionValue}`);
    break;
  case 'volume':
    console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex03.convert(1,baseValue,conversionValue)}${conversionValue}`);
    break;
  case 'area':
    console.log(`1 ${baseValue} em ${conversionValue} é: ${Ex04.convert(1,baseValue,conversionValue)}${conversionValue}`);
    break;
  default:
    break;
}