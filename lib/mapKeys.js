"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function mapKeys(fn, dict) {
    if (arguments.length === 1) {
        return (_dict) => mapKeys(fn, _dict);
    }
    return main_1.chain(dict)
        .bind((d) => {
        const keys = Object.keys(d);
        return keys.reduce((accum, key) => {
            accum[main_1.getValue(fn(key))] = d[key];
            return accum;
        }, {});
    })
        .getValue();
}
exports.mapKeys = mapKeys;
