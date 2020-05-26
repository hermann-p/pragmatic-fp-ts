"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function converge(join, fns, value) {
    if (arguments.length === 1) {
        return function (_fns, _value) {
            return arguments.length === 1
                ? converge(join, _fns)
                : converge(join, _fns, _value);
        };
    }
    else if (arguments.length === 2) {
        return (_value) => converge(join, fns, _value);
    }
    const val = main_1.getValue(value);
    return main_1.chain(fns)
        .bind(main_1.map((fn) => fn(val)))
        .bind(join)
        .getValue();
}
exports.converge = converge;
