"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cond = void 0;
const main_1 = require("./main");
function cond(conditions) {
    return (value) => {
        const val = main_1.getValue(value);
        const fn = conditions.reduce((alreadyFound, [test, mappable]) => {
            return alreadyFound || (test(val) ? mappable : null);
        }, null);
        return fn && fn(val);
    };
}
exports.cond = cond;
