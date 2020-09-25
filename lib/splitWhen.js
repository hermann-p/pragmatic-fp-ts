"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitWhen = void 0;
function splitWhen(when, coll) {
    if (arguments.length === 1)
        return (coll_) => splitWhen(when, coll_);
    const cc = coll || [];
    const idx = cc.findIndex(when);
    return idx < 0 ? [cc, []] : [cc.slice(0, idx), cc.slice(idx)];
}
exports.splitWhen = splitWhen;
