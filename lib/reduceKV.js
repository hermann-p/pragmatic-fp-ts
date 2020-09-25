"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceKV = void 0;
function reduceKV(fold, start, dict) {
    if (arguments.length === 1) {
        return function (_start, _dict) {
            return arguments.length === 1
                ? reduceKV(fold, _start)
                : reduceKV(fold, _start, _dict);
        };
    }
    else if (arguments.length === 2) {
        return (_dict) => reduceKV(fold, start, _dict);
    }
    const vals = Object.values(dict);
    return Object.keys(dict).reduce((result, key, idx) => fold(result, vals[idx], key), start);
}
exports.reduceKV = reduceKV;
