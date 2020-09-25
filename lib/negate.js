"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negate = void 0;
const main_1 = require("./main");
function negate(x) {
    return -main_1.getValueOr(-0, x);
}
exports.negate = negate;
