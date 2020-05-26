"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function isEmpty(coll) {
    const theColl = main_1.getValue(coll);
    return typeof coll === "number"
        ? false
        : main_1.isNothing(coll) || main_1.isNil(theColl) || main_1.isLeft(coll)
            ? true
            : coll instanceof Array || typeof coll === "string"
                ? coll.length === 0
                : Object.keys(theColl).length === 0;
}
exports.isEmpty = isEmpty;
function isNotEmpty(coll) {
    return !isEmpty(coll);
}
exports.isNotEmpty = isNotEmpty;
