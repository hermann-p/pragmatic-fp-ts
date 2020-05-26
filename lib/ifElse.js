"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function ifElse(condition, ifPath, elsePath, value) {
    if (arguments.length === 1) {
        return function (_if, _else, _value) {
            return arguments.length === 1
                ? ifElse(condition, _if)
                : arguments.length === 2
                    ? ifElse(condition, _if, _else)
                    : ifElse(condition, _if, _else, _value);
        };
    }
    else if (arguments.length === 2) {
        return function (_else, _value) {
            return arguments.length === 1
                ? ifElse(condition, ifPath, _else)
                : ifElse(condition, ifPath, _else, _value);
        };
    }
    else if (arguments.length === 3) {
        return (_value) => ifElse(condition, ifPath, elsePath, _value);
    }
    const val = main_1.getValue(value);
    return condition(val) ? ifPath(val) : elsePath(val);
}
exports.ifElse = ifElse;
