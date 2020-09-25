"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceWith = void 0;
const main_1 = require("./main");
function differenceWith(setA, setB) {
    if (arguments.length === 1) {
        return (b) => differenceWith(setA, b);
    }
    const a = main_1.getValueOr([], setA);
    const b = new Set(main_1.getValueOr([], setB));
    const result = [];
    a.forEach((elem) => {
        if (!b.has(elem)) {
            result.push(elem);
        }
    });
    return result;
}
exports.differenceWith = differenceWith;
