"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spy = void 0;
function spy(message, value) {
    if (arguments.length === 1)
        return (theValue) => spy(message, theValue);
    console.log(`[${message || "spy"}]:`, typeof value, value);
    return value;
}
exports.spy = spy;
