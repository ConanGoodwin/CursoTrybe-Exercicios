"use strict";
exports.__esModule = true;
var Ex01 = require("./length");
var Ex02 = require("./mass");
var Ex03 = require("./capacity");
console.log("1 kilometro em metros \u00E9: " + Ex01.convert(1, 'km', 'm') + "m");
console.log("1 Quilograma em gramas \u00E9: " + Ex02.convert(1, 'kg', 'g') + "g");
console.log("1 Quilolitro em litros \u00E9: " + Ex03.convert(1, 'kl', 'l') + "l");
