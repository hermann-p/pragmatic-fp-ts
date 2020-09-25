"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const main_1 = require("./main");
function count(coll) {
    const theColl = main_1.getValueOr("", coll);
    return theColl instanceof Array || typeof theColl === "string"
        ? theColl.length
        : theColl instanceof Object
            ? Object.keys(theColl).length
            : 0;
}
exports.count = count;
