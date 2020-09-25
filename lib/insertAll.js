"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAll = void 0;
const main_1 = require("./main");
function insertAll(position, values, coll) {
    if (arguments.length === 1) {
        return function (values, theColl) {
            return arguments.length === 1
                ? insertAll(position, values)
                : insertAll(position, values, theColl);
        };
    }
    else if (arguments.length === 2) {
        return (theColl) => insertAll(position, values, theColl);
    }
    const arr = main_1.getValueOr([], coll);
    const prefix = arr.slice(0, position);
    const suffix = arr.slice(position);
    return [...prefix, ...main_1.getValueOr([], values), ...suffix];
}
exports.insertAll = insertAll;
