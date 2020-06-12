"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function findLast(condition, coll) {
    if (arguments.length === 1) {
        return (theColl) => findLast(condition, theColl);
    }
    const toCollection = (a) => (a instanceof Array ? a : Object.values(a));
    return main_1.maybe(main_1.getValue(coll))
        .bind(toCollection)
        .bind(main_1.reverse)
        .bind((c) => c.find(condition) || null)
        .getValueOr(null);
}
exports.findLast = findLast;
