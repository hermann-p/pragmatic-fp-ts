"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractFrom = exports.dec = exports.subtract = void 0;
const main_1 = require("./main");
function subtract(subtrahend, minuend) {
    if (arguments.length === 1) {
        return (_minuend) => subtract(subtrahend, _minuend);
    }
    return main_1.getValueOr(0, minuend) - main_1.getValueOr(0, subtrahend);
}
exports.subtract = subtract;
function dec(n) {
    return subtract(1, n);
}
exports.dec = dec;
function subtractFrom(minuend, subtrahend) {
    if (arguments.length === 1) {
        return (_subtrahend) => subtract(minuend, _subtrahend);
    }
    return main_1.getValueOr(0, minuend) - main_1.getValueOr(0, subtrahend);
}
exports.subtractFrom = subtractFrom;
