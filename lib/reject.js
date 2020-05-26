"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function reject(pred, coll) {
    if (arguments.length === 1) {
        return (theColl) => reject(pred, theColl);
    }
    return main_1.filter(main_1.complement(pred), coll);
}
exports.reject = reject;
