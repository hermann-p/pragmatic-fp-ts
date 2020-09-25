"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aperture = void 0;
const main_1 = require("./main");
function aperture(step, coll) {
    if (arguments.length === 1) {
        return (_coll) => aperture(step, _coll);
    }
    const n = main_1.getValueOr(-1, step);
    const c = main_1.getValueOr([], coll);
    if (1 > n || n > c.length) {
        return [];
    }
    const aps = [];
    for (let i = 0; i < c.length - n + 1; i++) {
        aps.push(c.slice(i, i + n));
    }
    return aps;
}
exports.aperture = aperture;
