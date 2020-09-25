"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
function min(numbers) {
    return numbers.reduce((a, b) => (a > b ? b : a));
}
exports.min = min;
