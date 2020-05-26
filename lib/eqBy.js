"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function eqBy(toComparable, a, b) {
    if (arguments.length === 1) {
        return function (_a, _b) {
            return arguments.length === 1
                ? eqBy(toComparable, _a)
                : eqBy(toComparable, _a, _b);
        };
    }
    else if (arguments.length === 2) {
        return (_b) => eqBy(toComparable, a, _b);
    }
    const valA = toComparable(main_1.getValue(a));
    const valB = toComparable(main_1.getValue(b));
    return main_1.equals(valA, valB);
}
exports.eqBy = eqBy;
