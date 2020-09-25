"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterKeys = void 0;
function filterKeys(pred, dict) {
    if (arguments.length === 1) {
        return (theDict) => filterKeys(pred, theDict);
    }
    const theDict = (dict || {});
    return Object.keys(theDict).reduce((accum, key) => {
        if (pred(key)) {
            accum[key] = theDict[key];
        }
        return accum;
    }, {});
}
exports.filterKeys = filterKeys;
