"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Composes an arbitrary number of functions unary into a n-ary
 * function, type-checking the chain.
 *
 * Note: Generic function types cannot be inferred, resulting in a
 * TypeScript error. Successive (any) -> any functions might break type
 * inference.
 *
 * ((A1 -> A2) -> (A2 -> A3) ... -> (An-1 -> An)) -> A1 -> An
 */
function pipe(...fns) {
    return (startValue) => fns.reduce((val, fn) => fn(val), startValue);
}
exports.pipe = pipe;
