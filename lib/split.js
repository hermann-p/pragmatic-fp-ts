"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
function split(at, input) {
    if (arguments.length === 1)
        return (_input) => split(at, _input);
    return (input !== null && input !== void 0 ? input : "").split(at) || [];
}
exports.split = split;
