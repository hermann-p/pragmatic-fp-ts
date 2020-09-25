"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeRight = void 0;
function takeRight(n, coll) {
    if (arguments.length === 1)
        return (coll_) => takeRight(n, coll_);
    const result = [];
    const cc = coll || [];
    for (let i = cc.length - 1, j = 0; i >= 0 && j < n; --i, ++j) {
        result.push(cc[i]);
    }
    return result;
}
exports.takeRight = takeRight;
