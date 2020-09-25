"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
function product(xs) {
    return xs.reduce((a, b) => a * b, 1);
}
exports.product = product;
