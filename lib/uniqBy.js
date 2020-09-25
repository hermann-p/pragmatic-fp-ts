"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqBy = void 0;
function uniqBy(cmp, a) {
    if (arguments.length === 1) {
        return (b_) => uniqBy(cmp, b_);
    }
    const keys = new Set();
    const results = [];
    (a || []).forEach((value) => {
        const key = cmp(value);
        if (!keys.has(key)) {
            results.push(value);
            keys.add(key);
        }
    });
    return results;
}
exports.uniqBy = uniqBy;
