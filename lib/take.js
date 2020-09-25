"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
function take(n, coll) {
    if (arguments.length === 1)
        return (coll_) => take(n, coll_);
    return (coll || []).slice(0, n);
}
exports.take = take;
