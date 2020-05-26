"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function join(separator, coll) {
    if (arguments.length === 1) {
        return (_coll) => join(separator, _coll);
    }
    const sep = main_1.getValueOr(",", separator);
    const c = main_1.getValueOr([], coll);
    return c.join(sep);
}
exports.join = join;
