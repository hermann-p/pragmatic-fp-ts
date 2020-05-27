"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Composes an arbitrary number of functions into a new function, the
 * result being a function piping their results as argument into the
 * next function, with data flow from left to right. The first
 * function may be n-ary while all others must be unary
 *
 * Note: Generic function types cannot be inferred, resulting in a
 * TypeScript error. Successive (any) -> any functions might break
 * type inference.
 *
 * (((A1, B, C,...)  -> A2) -> (A2 -> A3) ... -> (An-1 -> An)) -> (A1, B, C,...) -> An
 */
function flow(...fns) {
    return (startValue) => fns.reduce((val, fn) => fn(val), startValue);
}
exports.flow = flow;
