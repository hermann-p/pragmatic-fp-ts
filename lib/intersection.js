"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function intersection(a, b) {
    if (arguments.length === 1) {
        return (_b) => intersection(a, _b);
    }
    const arrA = main_1.getValueOr([], a);
    const setB = new Set(main_1.getValueOr([], b));
    const result = [];
    for (let i = 0; i < arrA.length; ++i) {
        if (setB.has(arrA[i]))
            result.push(arrA[i]);
    }
    return result;
}
exports.intersection = intersection;
