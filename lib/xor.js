"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xor = void 0;
function xor(a, b) {
    if (arguments.length === 1)
        return (_b) => xor(a, _b);
    return !!((a ? 1 : 0) ^ (b ? 1 : 0));
}
exports.xor = xor;
