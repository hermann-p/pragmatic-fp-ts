"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partial(fn, ...args) {
    return (lastArg) => fn(...args, lastArg);
}
exports.partial = partial;
