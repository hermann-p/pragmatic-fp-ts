"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = void 0;
function union(a, b) {
    if (arguments.length === 1)
        return (b_) => union(a, b_);
    const values = new Set(a || []);
    (b || []).forEach((value) => values.add(value));
    return Array.from(values);
}
exports.union = union;
