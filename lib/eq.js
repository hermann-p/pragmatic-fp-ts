"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function eq(a, b) {
    if (arguments.length === 1) {
        return (_b) => eq(a, _b);
    }
    return main_1.getValue(a) === main_1.getValue(b);
}
exports.eq = eq;
