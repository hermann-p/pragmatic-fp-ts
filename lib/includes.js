"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function includes(what, coll) {
    if (arguments.length === 1)
        return (theColl) => includes(what, theColl);
    const candidate = main_1.getValue(what);
    const theColl = main_1.getValue(coll);
    return main_1.isNil(theColl) ? false : theColl.includes(candidate);
}
exports.includes = includes;
