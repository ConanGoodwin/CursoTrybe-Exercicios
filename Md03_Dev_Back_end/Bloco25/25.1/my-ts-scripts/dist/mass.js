"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, baseUnity, conversionUnity) {
    const baseValue = units.indexOf(baseUnity);
    const conversionValue = units.indexOf(conversionUnity);
    const exponent = (baseValue + conversionValue);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
