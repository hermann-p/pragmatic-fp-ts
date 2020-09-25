"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gte = void 0;
const main_1 = require("./main");
function gte(a, b) {
    if (arguments.length === 1)
        return (_b) => gte(a, _b);
    return main_1.getValue(b) >= main_1.getValue(a);
}
exports.gte = gte;
