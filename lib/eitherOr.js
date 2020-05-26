"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function eitherOr(f, g, value) {
    if (arguments.length === 1) {
        return function (_g, _value) {
            return arguments.length === 1
                ? eitherOr(f, _g)
                : eitherOr(f, _g, _value);
        };
    }
    else if (arguments.length === 2) {
        return (_value) => eitherOr(f, g, _value);
    }
    const val = main_1.getValue(value);
    return f(val) || g(val);
}
exports.eitherOr = eitherOr;
