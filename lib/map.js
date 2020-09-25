"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const main_1 = require("./main");
const mapObj = (fn, dict) => Object.keys(dict).reduce((accum, key) => {
    accum[key] = fn(dict[key]);
    return accum;
}, {});
function map(fn, coll) {
    if (arguments.length === 1) {
        return (_coll) => map(fn, _coll);
    }
    const theColl = main_1.getValueOr([], coll);
    return theColl instanceof Array ? theColl.map(fn) : mapObj(fn, theColl);
}
exports.map = map;
