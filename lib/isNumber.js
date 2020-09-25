"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
function isNumber(n) {
    return typeof n === "number" && !isNaN(n);
}
exports.isNumber = isNumber;
