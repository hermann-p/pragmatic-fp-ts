"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLastIndex = void 0;
const main_1 = require("./main");
// Searches array or object values with given predicate. Returns array
// index or property name
const arrayToIndexed = (arr) => arr.map((value, idx) => [idx, value]);
const dictToIndexed = (dict) => Object.keys(dict)
    .sort()
    .map((key) => [key, dict[key]]);
function findLastIndex(condition, coll) {
    if (arguments.length === 1) {
        return (theColl) => findLastIndex(condition, theColl);
    }
    const theColl = main_1.getValue(coll);
    const notFound = theColl instanceof Array ? -1 : null;
    return main_1.maybe(theColl)
        .bind((c) => (c instanceof Array ? arrayToIndexed(c) : dictToIndexed(c)))
        .bind((vs) => main_1.reverse(vs))
        .bind((vs) => vs.reduce((key, [nextKey, nextVal]) => {
        return key === notFound ? (condition(nextVal) ? nextKey : notFound) : key;
    }, notFound))
        .getValueOr(notFound);
}
exports.findLastIndex = findLastIndex;
