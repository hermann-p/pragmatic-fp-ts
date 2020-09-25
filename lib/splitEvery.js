"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitEvery = void 0;
function splitEvery(n, coll) {
    if (arguments.length === 1)
        return (coll_) => splitEvery(n, coll_);
    const result = [];
    for (let i = 0; i < coll.length; i += n) {
        result.push(coll.slice(i, i + n));
    }
    return result;
}
exports.splitEvery = splitEvery;
