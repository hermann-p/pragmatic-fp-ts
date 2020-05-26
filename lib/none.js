"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function none(pred, coll) {
    if (arguments.length === 1)
        return (_coll) => none(pred, _coll);
    for (let i = 0; i < coll.length; ++i) {
        if (pred(coll[i]))
            return false;
    }
    return true;
}
exports.none = none;
