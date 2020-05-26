"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const getValueOr = (alt, v) => {
    const vv = main_1.getValue(v);
    return vv === 0 ? vv : vv || alt;
};
function range(start, end) {
    if (arguments.length === 1) {
        return (_end) => range(start, _end);
    }
    const s = getValueOr(0, start);
    const e = getValueOr(s, end);
    const descend = e < s;
    const step = descend ? -1 : 1;
    const result = [];
    for (let i = s; i !== e; i += step) {
        result.push(i);
    }
    return result;
}
exports.range = range;
