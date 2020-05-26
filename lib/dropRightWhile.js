"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function dropRightWhile(pred, coll) {
    if (arguments.length === 1) {
        return (theColl) => dropRightWhile(pred, theColl);
    }
    const theColl = main_1.getValueOr([], coll);
    for (let i = theColl.length - 1, j = 0; i >= 0; --i, ++j) {
        if (!pred(theColl[i])) {
            return main_1.dropRight(j, theColl);
        }
    }
    return theColl;
}
exports.dropRightWhile = dropRightWhile;
