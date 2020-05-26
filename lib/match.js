"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function match(re, text) {
    if (arguments.length === 1)
        return (_text) => match(re, _text);
    const regex = RegExp(re);
    const result = text.match(regex);
    return result ? (regex.global ? result : [result[0]]) : [];
}
exports.match = match;
