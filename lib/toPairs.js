"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPairs = void 0;
const main_1 = require("./main");
function toPairs(dict) {
    const dd = main_1.getValueOr({}, dict);
    return Object.keys(dd).map((key) => [key, dd[key]]);
}
exports.toPairs = toPairs;
