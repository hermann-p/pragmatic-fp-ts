"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function intersperse(elem, coll) {
    if (arguments.length === 1)
        return (_coll) => intersperse(elem, _coll);
    const theElem = main_1.getValue(elem);
    const theColl = main_1.getValueOr([], coll);
    const result = [];
    for (let i = 0; i < theColl.length - 1; ++i) {
        result.push(theColl[i], theElem);
    }
    if (theColl.length > 0) {
        result.push(theColl[theColl.length - 1]);
    }
    return result;
}
exports.intersperse = intersperse;
