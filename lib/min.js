"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function min(numbers) {
    return numbers.reduce((a, b) => (a > b ? b : a));
}
exports.min = min;
