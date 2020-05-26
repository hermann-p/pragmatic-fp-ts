"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function values(dict) {
    return Object.values(main_1.getValueOr({}, dict));
}
exports.values = values;
