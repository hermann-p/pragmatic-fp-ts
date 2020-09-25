"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSome = void 0;
const main_1 = require("./main");
function isSome(x) {
    return main_1.isNotNil(x) && main_1.isNotEmpty(x);
}
exports.isSome = isSome;
