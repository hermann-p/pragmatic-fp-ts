"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function multiply(a, b) {
    if (arguments.length === 1)
        return (b_) => multiply(a, b_);
    const aa = main_1.isNil(a) || isNaN(a) ? 1 : a;
    const bb = main_1.isNil(b) || isNaN(b) ? 1 : b;
    return aa * bb;
}
exports.multiply = multiply;
