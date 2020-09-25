"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scan = void 0;
function scan(fold, start, coll) {
    if (arguments.length === 1) {
        return function (_start, _coll) {
            return arguments.length === 1
                ? scan(fold, _start)
                : scan(fold, _start, _coll);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => scan(fold, start, _coll);
    }
    const result = [];
    for (let i = 0; i < coll.length; ++i) {
        const prev = i === 0 ? start : result[i - 1];
        result.push(fold(prev, coll[i]));
    }
    return result;
}
exports.scan = scan;
