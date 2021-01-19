"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersects = void 0;
function intersects(setA, setB) {
    if (arguments.length === 1)
        return (setB_) => intersects(setA, setB_);
    const ii = new Set(setA);
    const bb = setB !== null && setB !== void 0 ? setB : [];
    for (let i = 0; i < bb.length; ++i) {
        if (ii.has(bb[i]))
            return true;
    }
    return false;
}
exports.intersects = intersects;
