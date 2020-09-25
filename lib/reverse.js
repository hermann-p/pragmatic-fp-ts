"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
const main_1 = require("./main");
function reverse(coll) {
    const theColl = main_1.getValueOr([], coll);
    const reverted = new Array(theColl.length);
    for (let i = 0, j = theColl.length - 1; j >= 0; ++i, --j) {
        reverted[j] = theColl[i];
    }
    return reverted;
}
exports.reverse = reverse;
