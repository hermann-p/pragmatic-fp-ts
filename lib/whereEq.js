"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function whereEq(pattern, dict) {
    if (arguments.length === 1)
        return (_dict) => whereEq(pattern, _dict);
    return Object.keys(pattern).reduce((success, key) => success && main_1.equals(pattern[key], dict[key]), true);
}
exports.whereEq = whereEq;
