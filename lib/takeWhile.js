"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhile = void 0;
function takeWhile(pred, coll) {
    if (arguments.length === 1)
        return (coll_) => takeWhile(pred, coll_);
    const cc = coll || [];
    const result = [];
    for (let i = 0; i < cc.length; ++i) {
        if (pred(cc[i]))
            result.push(cc[i]);
        else
            continue;
    }
    return result;
}
exports.takeWhile = takeWhile;
