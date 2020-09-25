"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
const main_1 = require("./main");
// For tapping a monadic value with a non-monadic effect like
//     tap(inc(a), Maybe(4))
// you need to explicitly type-hint the call:
//     tap<number, Maybe<number>>(inc(a), Maybe(4))
function tap(effect, value) {
    if (arguments.length === 1) {
        return (theValue) => tap(effect, theValue);
    }
    effect(main_1.getValue(value));
    return value;
}
exports.tap = tap;
