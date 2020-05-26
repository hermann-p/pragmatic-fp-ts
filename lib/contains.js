"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function contains(what, who) {
    if (arguments.length === 1) {
        const fn = (_who) => contains(what, _who);
        return fn;
    }
    if (main_1.isNil(main_1.getValue(who)) || main_1.isNil(what))
        return false;
    return typeof what === "string"
        ? main_1.getValueOr("", who).includes(main_1.getValueOr("", what))
        : main_1.getValueOr([], who).includes(main_1.getValue(what));
}
exports.contains = contains;
