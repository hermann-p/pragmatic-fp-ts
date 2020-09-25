"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
const main_1 = require("./main");
const doFlatten = (elems) => elems instanceof Array
    ? elems.reduce((accum, elem) => elem instanceof Array
        ? [...accum, ...doFlatten(elem)]
        : [...accum, elem], [])
    : elems;
function flatten(coll) {
    return doFlatten(main_1.getValueOr([], coll));
}
exports.flatten = flatten;
