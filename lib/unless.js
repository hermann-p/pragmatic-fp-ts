"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unless = void 0;
const main_1 = require("./main");
function unless(condition, ifPath, value) {
    if (arguments.length === 1) {
        return function (_if, _val) {
            return arguments.length === 1
                ? unless(condition, _if)
                : unless(condition, _if, _val);
        };
    }
    else if (arguments.length === 2) {
        return (val) => unless(condition, ifPath, val);
    }
    const val = main_1.getValue(value);
    return condition(val) ? val : ifPath(val);
}
exports.unless = unless;
