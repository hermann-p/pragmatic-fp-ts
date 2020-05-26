"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function lte(a, b) {
    if (arguments.length === 1)
        return (_b) => lte(a, _b);
    return main_1.getValue(b) <= main_1.getValue(a);
}
exports.lte = lte;
