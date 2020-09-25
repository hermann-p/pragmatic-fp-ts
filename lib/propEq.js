"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEq = void 0;
const main_1 = require("./main");
function propEq(path, value, input) {
    if (arguments.length === 1) {
        return function (_value, _input) {
            return arguments.length === 1
                ? propEq(path, _value)
                : propEq(path, _value, _input);
        };
    }
    else if (arguments.length === 2) {
        return (_input) => propEq(path, value, _input);
    }
    const propValue = path instanceof Array
        ? main_1.getIn(path, input)
        : main_1.get(path, input);
    return main_1.equals(propValue, value);
}
exports.propEq = propEq;
