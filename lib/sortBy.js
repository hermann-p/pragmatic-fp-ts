"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = void 0;
function sortBy(compare, coll) {
    if (arguments.length === 1)
        return (_coll) => sortBy(compare, _coll);
    return Array.from(coll).sort(compare);
}
exports.sortBy = sortBy;
