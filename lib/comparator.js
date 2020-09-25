"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparator = void 0;
const main_1 = require("./main");
// creates a comparator from an ordering function
function comparator(isInOrder) {
    return (a, b) => {
        const valA = main_1.getValue(a);
        const valB = main_1.getValue(b);
        return isInOrder(valA, valB) ? 1 : isInOrder(valB, valA) ? -1 : 0;
    };
}
exports.comparator = comparator;
