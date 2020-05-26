"use strict";
// Always returns the given value
Object.defineProperty(exports, "__esModule", { value: true });
function constantly(value) {
    return (..._) => value;
}
exports.constantly = constantly;
