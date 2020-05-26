"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function subtract(a, b) {
    if (arguments.length === 1) {
        return (_b) => subtract(a, _b);
    }
    return main_1.getValueOr(0, a) - main_1.getValueOr(0, b);
}
exports.subtract = subtract;
function dec(n) {
    return subtract(1, n);
}
exports.dec = dec;
