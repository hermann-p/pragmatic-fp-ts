"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function toPairs(dict) {
    const dd = main_1.getValueOr({}, dict);
    return Object.keys(dd).map((key) => [key, dd[key]]);
}
exports.toPairs = toPairs;
