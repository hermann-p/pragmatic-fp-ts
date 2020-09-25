"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRight = void 0;
const main_1 = require("./main");
function dropRight(n, coll) {
    if (arguments.length === 1) {
        return (theColl) => dropRight(n, theColl);
    }
    const theColl = main_1.getValueOr([], coll);
    const toDrop = main_1.clamp(0, theColl.length, main_1.getValueOr(0, n));
    return theColl.slice(0, theColl.length - toDrop);
}
exports.dropRight = dropRight;
