"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juxt = void 0;
function juxt(fns, coll) {
    if (arguments.length === 1)
        return (_coll) => juxt(fns, _coll);
    const n = fns.length;
    const result = new Array(n);
    for (let i = 0; i < n; ++i)
        result[i] = fns[i](coll);
    return result;
}
exports.juxt = juxt;
