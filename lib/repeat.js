"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeat(value, repetitions) {
    if (arguments.length === 1) {
        return (r) => repeat(value, r);
    }
    return new Array(repetitions).fill(value);
}
exports.repeat = repeat;
