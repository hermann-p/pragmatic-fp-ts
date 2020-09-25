"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipMap = void 0;
function zipMap(fn, as, bs) {
    if (arguments.length === 1) {
        return function (as_, bs_) {
            return arguments.length === 1 ? zipMap(fn, as_) : zipMap(fn, as_, bs_);
        };
    }
    else if (arguments.length === 2) {
        return (bs_) => zipMap(fn, as, bs_);
    }
    const result = [];
    const aa = as || [];
    const bb = bs || [];
    for (let i = 0; i < aa.length && bb.length; ++i) {
        result.push(fn([aa[i], bb[i]]));
    }
    return result;
}
exports.zipMap = zipMap;
