"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropWhile = void 0;
const main_1 = require("./main");
function dropWhile(pred, coll) {
    if (arguments.length === 1) {
        return (theColl) => dropWhile(pred, theColl);
    }
    const theColl = main_1.getValueOr([], coll);
    for (let i = 0; i < theColl.length; ++i) {
        if (!pred(theColl[i])) {
            return main_1.drop(i, theColl);
        }
    }
    return theColl;
}
exports.dropWhile = dropWhile;
