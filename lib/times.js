"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = void 0;
function times(repeats, fn) {
    if (arguments.length === 1)
        return (f) => times(repeats, f);
    const result = Array(repeats);
    for (let i = 0; i < repeats; ++i) {
        result[i] = fn(i);
    }
    return result;
}
exports.times = times;
