"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceWith = void 0;
const main_1 = require("./main");
function differenceWith(toKey, setA, setB) {
    if (arguments.length === 1) {
        return function (a, b) {
            return arguments.length === 1
                ? differenceWith(toKey, a)
                : differenceWith(toKey, a, b);
        };
    }
    else if (arguments.length === 2) {
        return (b) => differenceWith(toKey, setA, b);
    }
    const a = main_1.getValueOr([], setA);
    const b = new Set(main_1.getValueOr([], setB).map(toKey));
    const result = [];
    a.forEach((elem) => {
        if (!b.has(toKey(elem))) {
            result.push(elem);
        }
    });
    return result;
}
exports.differenceWith = differenceWith;
