"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function innerJoin(match, as, bs) {
    if (arguments.length === 1) {
        return function (_as, _bs) {
            return arguments.length === 1
                ? innerJoin(match, _as)
                : innerJoin(match, _as, _bs);
        };
    }
    else if (arguments.length === 2) {
        return (_bs) => innerJoin(match, as, _bs);
    }
    const result = [];
    const collA = main_1.getValueOr([], as);
    const collB = main_1.getValueOr([], bs);
    let b = 0;
    for (let a = 0; a < collA.length; ++a) {
        for (b = 0; b < collB.length; ++b) {
            if (match(collA[a], collB[b])) {
                result.push(Object.assign(Object.assign({}, collA[a]), collB[b]));
            }
        }
    }
    return result;
}
exports.innerJoin = innerJoin;
