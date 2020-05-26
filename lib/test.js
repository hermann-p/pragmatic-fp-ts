"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function test(re, text) {
    if (arguments.length === 1)
        return (_text) => test(re, _text);
    return re.test(text);
}
exports.test = test;
