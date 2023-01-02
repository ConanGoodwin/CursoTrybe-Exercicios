"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(value, baseUnity, conversionUnity) {
    const baseValue = units.indexOf(baseUnity);
    const conversionValue = units.indexOf(conversionUnity);
    const exponent = (baseValue + conversionValue);
    return value * Math.pow(100, exponent);
}
exports.convert = convert;
