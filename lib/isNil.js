"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNil(value) {
    return (value === null ||
        value === undefined ||
        (typeof value === "number" && isNaN(value)));
}
exports.isNil = isNil;
function isNotNil(value) {
    return !isNil(value);
}
exports.isNotNil = isNotNil;
