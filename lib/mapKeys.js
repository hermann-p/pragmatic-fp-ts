"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function mapKeys(fn, dict) {
    if (arguments.length === 1) {
        return (_dict) => mapKeys(fn, _dict);
    }
    const d = dict || {};
    return Object.keys(d || {}).reduce((accum, key) => {
        accum[main_1.getValue(fn(key))] = d[key];
        return accum;
    }, {});
}
exports.mapKeys = mapKeys;
