"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = void 0;
const main_1 = require("./main");
function indexOf(value, coll) {
    if (arguments.length === 1)
        return (theColl) => indexOf(value, theColl);
    const theColl = main_1.getValueOr([], coll);
    for (let i = 0; i < theColl.length; ++i) {
        if (main_1.equals(value, theColl[i]))
            return i;
    }
    return -1;
}
exports.indexOf = indexOf;
