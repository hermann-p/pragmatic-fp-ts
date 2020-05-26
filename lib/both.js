"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function both(p1, p2, value) {
    if (arguments.length === 1) {
        return function (_p2, _value) {
            if (arguments.length === 1) {
                return both(p1, _p2);
            }
            else {
                return both(p1, _p2, _value);
            }
        };
    }
    else if (arguments.length === 2) {
        return (_value) => both(p1, p2, _value);
    }
    const val = main_1.getValue(value);
    return p1(val) && p2(val);
}
exports.both = both;
