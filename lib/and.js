"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
const main_1 = require("./main");
function and(a, b) {
    if (arguments.length === 1) {
        return (_b) => and(a, _b);
    }
    return main_1.getValueOr(false, a) && main_1.getValueOr(false, b);
}
exports.and = and;
