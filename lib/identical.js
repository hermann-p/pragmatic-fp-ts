"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identical = void 0;
function identical(a, b) {
    if (arguments.length === 1)
        return (_b) => identical(a, _b);
    return Object.is(a, b);
}
exports.identical = identical;
