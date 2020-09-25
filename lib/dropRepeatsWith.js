"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRepeatsWith = void 0;
const main_1 = require("./main");
function dropRepeatsWith(isEqual, coll) {
    if (arguments.length === 1) {
        return (theColl) => dropRepeatsWith(isEqual, theColl);
    }
    const result = [];
    const theColl = main_1.getValueOr([], coll);
    let lastValue;
    for (let i = 0; i < theColl.length; ++i) {
        const value = theColl[i];
        if (i === 0 || !isEqual(value, lastValue)) {
            result.push(value);
        }
        lastValue = value;
    }
    return result;
}
exports.dropRepeatsWith = dropRepeatsWith;
