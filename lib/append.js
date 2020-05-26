"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function append(el, coll) {
    if (arguments.length === 1) {
        return (_coll) => append(el, _coll);
    }
    return coll instanceof Array
        ? [...main_1.getValueOr([], coll), main_1.getValue(el)]
        : (main_1.getValueOr("", coll) +
            main_1.getValueOr("", el));
}
exports.append = append;
