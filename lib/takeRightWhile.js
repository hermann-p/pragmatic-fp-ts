"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeRightWhile = void 0;
function takeRightWhile(pred, coll) {
    if (arguments.length === 1)
        return (coll_) => takeRightWhile(pred, coll_);
    const result = [];
    const cc = coll || [];
    for (let i = cc.length - 1; i >= 0 && pred(cc[i]); --i) {
        result.push(cc[i]);
    }
    return result;
}
exports.takeRightWhile = takeRightWhile;
