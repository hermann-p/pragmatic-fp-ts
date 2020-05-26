"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function keys(dict) {
    return Object.keys(main_1.getValueOr({}, dict));
}
exports.keys = keys;
