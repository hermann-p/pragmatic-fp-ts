"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const main_1 = require("./main");
function last(coll) {
    const cc = main_1.getValueOr([], coll);
    return cc.length === 0 ? null : cc[cc.length - 1];
}
exports.last = last;
