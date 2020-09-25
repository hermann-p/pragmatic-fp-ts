"use strict";
// Applies the given function with the given array of arguments
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
function apply(fn, args) {
    if (arguments.length === 1) {
        return (_args) => apply(fn, _args);
    }
    return fn(...(args || []));
}
exports.apply = apply;
