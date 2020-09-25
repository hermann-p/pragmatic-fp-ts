"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symmetricDifference = void 0;
function symmetricDifference(a, b) {
    if (arguments.length === 1) {
        return (b_) => symmetricDifference(a, b_);
    }
    const setA = new Set(a || []);
    const setB = new Set(b || []);
    const results = [];
    (a || []).forEach((val) => {
        if (!setB.has(val))
            results.push(val);
    });
    (b || []).forEach((val) => {
        if (!setA.has(val))
            results.push(val);
    });
    return results;
}
exports.symmetricDifference = symmetricDifference;
