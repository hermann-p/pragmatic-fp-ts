"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
// Filters arrays or objects.
const filterArray = (pred, arr = []) => arr.filter(pred);
const filterDict = (pred, dict = {}) => Object.keys(dict).reduce((d, key) => {
    const value = dict[key];
    if (pred(value))
        d[key] = value;
    return d;
}, {});
function filter(pred, coll) {
    if (arguments.length === 1) {
        return (theColl) => filter(pred, theColl);
    }
    const theColl = coll || [];
    if (theColl instanceof Array) {
        return filterArray(pred, theColl);
    }
    else {
        return filterDict(pred, theColl);
    }
}
exports.filter = filter;
