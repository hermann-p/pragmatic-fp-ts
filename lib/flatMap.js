"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = void 0;
const main_1 = require("./main");
function flatMap(mappable, coll) {
    if (arguments.length === 1) {
        return (_coll) => flatMap(mappable, _coll);
    }
    return main_1.getValueOr([], coll)
        .map((v) => (v instanceof Array ? v.map(mappable) : mappable(v)))
        .reduce((result, next) => next instanceof Array ? [...result, ...next] : [...result, next], []);
}
exports.flatMap = flatMap;
