"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partition(by, coll) {
    if (arguments.length === 1)
        return (_coll) => partition(by, _coll);
    const result = { t: [], f: [] };
    ((coll !== null && coll !== void 0 ? coll : [])).forEach((value) => {
        if (by(value))
            result.t.push(value);
        else
            result.f.push(value);
    });
    return result;
}
exports.partition = partition;
