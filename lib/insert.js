"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function insert(position, value, coll) {
    if (arguments.length === 1) {
        return function (value, theColl) {
            return arguments.length === 1
                ? insert(position, value)
                : insert(position, value, theColl);
        };
    }
    else if (arguments.length === 2) {
        return (theColl) => insert(position, value, theColl);
    }
    const arr = main_1.getValueOr([], coll);
    const prefix = arr.slice(0, position);
    const suffix = arr.slice(position);
    return [...prefix, main_1.getValue(value), ...suffix];
}
exports.insert = insert;
