"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inc = exports.add = void 0;
const main_1 = require("./main");
function add(a, b) {
    if (arguments.length === 1) {
        return (_b) => add(a, _b);
    }
    return main_1.getValueOr(0, a) + main_1.getValueOr(0, b);
}
exports.add = add;
function inc(n) {
    return add(1, n);
}
exports.inc = inc;
