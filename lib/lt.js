"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lt = void 0;
const main_1 = require("./main");
function lt(a, b) {
    if (arguments.length === 1)
        return (_b) => lt(a, _b);
    return main_1.getValue(b) < main_1.getValue(a);
}
exports.lt = lt;
