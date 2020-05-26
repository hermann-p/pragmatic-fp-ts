"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function nth(n, coll) {
    if (arguments.length === 1)
        return (_coll) => nth(n, _coll);
    const l = coll.length;
    const idx = n < 0 ? main_1.mod(l, n) : n >= l ? l - 1 : n;
    return coll[idx];
}
exports.nth = nth;
