"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBy = void 0;
const main_1 = require("./main");
function countBy(toKey, dict) {
    if (arguments.length === 1) {
        return (_dict) => countBy(toKey, _dict);
    }
    const d = main_1.getValueOr([], dict);
    return d.reduce((count, next) => {
        const key = String(toKey(next));
        count[key] = (count[key] || 0) + 1;
        return count;
    }, {});
}
exports.countBy = countBy;
