"use strict";
exports.__esModule = true;
exports.convert = void 0;
var units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(value, baseUnity, conversionUnity) {
    var baseValue = units.indexOf(baseUnity);
    var conversionValue = units.indexOf(conversionUnity);
    var exponent = (baseValue + conversionValue);
    return value * Math.pow(100, exponent);
}
exports.convert = convert;
