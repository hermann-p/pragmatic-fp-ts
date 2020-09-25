"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = void 0;
function zip(as, bs) {
    if (arguments.length === 1)
        return (bs_) => zip(as, bs_);
    const result = [];
    const aa = as || [];
    const bb = bs || [];
    for (let i = 0; i < aa.length && bb.length; ++i) {
        result.push([aa[i], bb[i]]);
    }
    return result;
}
exports.zip = zip;
