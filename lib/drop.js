"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function drop(n, coll) {
    if (arguments.length === 1) {
        return (theColl) => drop(n, theColl);
    }
    const theColl = main_1.getValueOr([], coll);
    const toDrop = main_1.clamp(0, theColl.length, main_1.getValueOr(0, n));
    return theColl.slice(toDrop);
}
exports.drop = drop;
