"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unionBy(cmp, a, b) {
    if (arguments.length === 1) {
        return function (a_, b_) {
            return arguments.length === 1 ? unionBy(cmp, a_) : unionBy(cmp, a_, b_);
        };
    }
    else if (arguments.length === 2) {
        return (b_) => unionBy(cmp, a, b_);
    }
    const keys = new Set();
    const result = [];
    (a || []).forEach((value) => {
        const key = cmp(value);
        if (!keys.has(key)) {
            result.push(value);
            keys.add(key);
        }
    });
    (b || []).forEach((value) => {
        const key = cmp(value);
        if (!keys.has(key)) {
            result.push(value);
            keys.add(key);
        }
    });
    return result;
}
exports.unionBy = unionBy;
