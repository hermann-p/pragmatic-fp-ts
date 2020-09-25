"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
const main_1 = require("./main");
function keys(dict) {
    return Object.keys(main_1.getValueOr({}, dict));
}
exports.keys = keys;
