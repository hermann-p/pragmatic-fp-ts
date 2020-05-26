"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function divide(dividend, divisor) {
    if (arguments.length === 1) {
        return (theDivisor) => divide(dividend, theDivisor);
    }
    return main_1.getValue(dividend) / main_1.getValue(divisor);
}
exports.divide = divide;
function divideBy(divisor, dividend) {
    if (arguments.length === 1) {
        return (theDividend) => divide(theDividend, divisor);
    }
    return divide(dividend, divisor);
}
exports.divideBy = divideBy;
