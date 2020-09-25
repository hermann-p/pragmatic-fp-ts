"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gt = void 0;
const main_1 = require("./main");
function gt(a, b) {
    if (arguments.length === 1)
        return (_b) => gt(a, _b);
    return main_1.getValue(b) > main_1.getValue(a);
}
exports.gt = gt;
