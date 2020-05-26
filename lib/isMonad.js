"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function isMonad(candidate) {
    return candidate instanceof main_1.Monad;
}
exports.isMonad = isMonad;
