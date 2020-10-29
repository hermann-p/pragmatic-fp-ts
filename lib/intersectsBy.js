"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectsBy = void 0;
function intersectsBy(getComp, setA, setB) {
    if (arguments.length === 2)
        return (setB_) => intersectsBy(getComp, setA, setB_);
    else if (arguments.length === 1)
        return function (setA_, setB_) {
            return arguments.length === 1
                ? intersectsBy(getComp, setA_)
                : intersectsBy(getComp, setA_, setB_);
        };
    const ii = new Set((setA !== null && setA !== void 0 ? setA : []).map(getComp));
    const bb = setB !== null && setB !== void 0 ? setB : [];
    for (let i = 0; i < bb.length; ++i)
        if (ii.has(getComp(bb[i])))
            return true;
    return false;
}
exports.intersectsBy = intersectsBy;
