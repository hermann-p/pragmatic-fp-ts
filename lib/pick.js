"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function pick(props, dict) {
    if (arguments.length === 1) {
        return (_dict) => pick(props, _dict);
    }
    const dd = main_1.getValueOr({}, dict);
    return main_1.getValueOr([], props).reduce((accum, key) => {
        accum[key] = dd[key];
        return accum;
    }, {});
}
exports.pick = pick;
