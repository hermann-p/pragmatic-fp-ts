"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = void 0;
const main_1 = require("./main");
function when(condition, ifPath, value) {
    if (arguments.length === 1) {
        return function (_if, _val) {
            return arguments.length === 1
                ? when(condition, _if)
                : when(condition, _if, _val);
        };
    }
    else if (arguments.length === 2) {
        return (val) => when(condition, ifPath, val);
    }
    const val = main_1.getValue(value);
    return condition(val) ? ifPath(val) : val;
}
exports.when = when;
