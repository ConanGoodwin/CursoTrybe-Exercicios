"use strict";
exports.__esModule = true;
exports.convert = void 0;
var units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, baseUnity, conversionUnity) {
    var baseValue = units.indexOf(baseUnity);
    var conversionValue = units.indexOf(conversionUnity);
    var exponent = (baseValue + conversionValue);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
