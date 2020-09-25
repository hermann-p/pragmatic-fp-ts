"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.into = void 0;
const main_1 = require("./main");
function into(target, coll) {
    if (arguments.length === 1) {
        return (_coll) => into(target, _coll);
    }
    const theTarget = main_1.getValue(target);
    const theColl = main_1.getValueOr([], coll);
    return theTarget instanceof Array
        ? main_1.concat(theTarget, theColl)
        : theColl.reduce((accum, [key, value]) => {
            accum[key] = value;
            return accum;
        }, theTarget);
}
exports.into = into;
