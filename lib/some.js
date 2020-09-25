"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = void 0;
const main_1 = require("./main");
function some(pred, coll) {
    if (arguments.length === 1) {
        return (_coll) => some(pred, _coll);
    }
    const values = main_1.getValueOr([], coll);
    return values.reduce((result, nextVal) => result || pred(nextVal), false);
}
exports.some = some;
