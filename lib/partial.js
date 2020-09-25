"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partial = void 0;
function partial(fn, ...args) {
    return (lastArg) => fn(...args, lastArg);
}
exports.partial = partial;
