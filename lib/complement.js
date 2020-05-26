"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function complement(pred, value) {
    if (arguments.length === 1) {
        return (val) => complement(pred, val);
    }
    return !pred(value);
}
exports.complement = complement;
