"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function pickBy(pred, dict) {
    if (arguments.length === 1) {
        return (_dict) => pickBy(pred, _dict);
    }
    const dd = main_1.getValueOr({}, dict);
    return Object.keys(dd).reduce((accum, key) => {
        if (pred(dd[key])) {
            accum[key] = dd[key];
        }
        return accum;
    }, {});
}
exports.pickBy = pickBy;
