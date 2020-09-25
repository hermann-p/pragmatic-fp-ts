"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
function max(numbers) {
    return numbers.reduce((a, b) => (a > b ? a : b));
}
exports.max = max;
