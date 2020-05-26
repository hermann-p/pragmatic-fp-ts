"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
// Remove successive repeats in a list, leaving only one copy
function dropRepeats(coll) {
    const theColl = main_1.getValueOr([], coll);
    const result = [];
    let lastVal;
    for (let i = 0; i < theColl.length; ++i) {
        const nextVal = theColl[i];
        if (i === 0 || !main_1.equals(nextVal, lastVal)) {
            result.push(nextVal);
        }
        lastVal = nextVal;
    }
    return result;
}
exports.dropRepeats = dropRepeats;
