"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const main_1 = require("./main");
function groupBy(mkGroup, coll) {
    if (arguments.length === 1) {
        return (theColl) => groupBy(mkGroup, theColl);
    }
    return main_1.getValueOr([], coll).reduce((accum, value) => {
        const group = mkGroup(value);
        if (!accum[group])
            accum[group] = [];
        accum[group].push(value);
        return accum;
    }, {});
}
exports.groupBy = groupBy;
