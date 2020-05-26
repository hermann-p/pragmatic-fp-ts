"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xprod(a, b) {
    if (arguments.length === 1)
        return (b_) => xprod(a, b_);
    const result = [];
    (a || []).forEach((aa) => {
        (b || []).forEach((bb) => result.push([aa, bb]));
    });
    return result;
}
exports.xprod = xprod;
