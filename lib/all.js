"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const main_1 = require("./main");
function all(pred, coll) {
    if (arguments.length === 1) {
        return (_coll) => all(pred, _coll);
    }
    const values = main_1.getValueOr([], coll);
    return values.reduce((result, nextVal) => result && pred(nextVal), true);
}
exports.all = all;
