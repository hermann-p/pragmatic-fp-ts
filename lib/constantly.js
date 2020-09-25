"use strict";
// Always returns the given value
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantly = void 0;
function constantly(value) {
    return (..._) => value;
}
exports.constantly = constantly;
