"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexBy = void 0;
const main_1 = require("./main");
function indexBy(mkIndex, coll) {
    if (arguments.length === 1)
        return (theColl) => indexBy(mkIndex, theColl);
    return main_1.getValueOr([], coll).reduce((accum, next) => {
        accum[mkIndex(next)] = next;
        return accum;
    }, {});
}
exports.indexBy = indexBy;
