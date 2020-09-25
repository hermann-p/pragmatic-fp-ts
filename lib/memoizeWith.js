"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeWith = void 0;
function memoizeWith(toKey, fn) {
    if (arguments.length === 1)
        return (_fn) => memoizeWith(toKey, _fn);
    const cache = new Map();
    return (input) => {
        const key = toKey(input);
        if (cache.has(key)) {
            return cache.get(key);
        }
        else {
            const value = fn(input);
            cache.set(key, value);
            return value;
        }
    };
}
exports.memoizeWith = memoizeWith;
