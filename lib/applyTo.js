"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function applyTo(value, fn) {
    if (arguments.length === 1) {
        return (_fn) => applyTo(value, _fn);
    }
    const mappable = fn || ((_) => null);
    return mappable(main_1.getValue(value));
}
exports.applyTo = applyTo;
