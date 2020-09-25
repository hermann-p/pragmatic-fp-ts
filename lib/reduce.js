"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
function reduce(fold, startValue, coll) {
    if (arguments.length === 1) {
        return function (_start, _coll) {
            return arguments.length === 1
                ? reduce(fold, _start)
                : reduce(fold, _start, _coll);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => reduce(fold, startValue, _coll);
    }
    return coll instanceof Array
        ? coll.reduce(fold, startValue)
        : Object.values(coll).reduce(fold, startValue);
}
exports.reduce = reduce;
