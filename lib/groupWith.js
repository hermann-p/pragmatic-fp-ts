"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupWith = void 0;
const main_1 = require("./main");
const performGrouping = (cmp, elems) => {
    const doGrouping = (grouped, group, rest) => {
        const [el, ...more] = rest;
        const lastEl = group[group.length - 1];
        return !main_1.isNil(el)
            ? cmp(lastEl, el)
                ? doGrouping(grouped, [...group, el], more)
                : doGrouping([...grouped, group], [el], more)
            : [...grouped, group];
    };
    return doGrouping([], [elems[0]], elems.slice(1));
};
function groupWith(isEqual, coll) {
    if (arguments.length === 1)
        return (theColl) => groupWith(isEqual, theColl);
    else
        return performGrouping(isEqual, main_1.getValueOr([], coll));
}
exports.groupWith = groupWith;
