"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepend = void 0;
const main_1 = require("./main");
function prepend(el, coll) {
    if (arguments.length === 1) {
        return (_coll) => prepend(el, _coll);
    }
    return coll instanceof Array
        ? [main_1.getValue(el), ...main_1.getValueOr([], coll)]
        : (main_1.getValueOr("", el) +
            main_1.getValueOr("", coll));
}
exports.prepend = prepend;
