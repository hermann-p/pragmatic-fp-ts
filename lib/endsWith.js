"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function endsWith(tail, seq) {
    if (arguments.length === 1) {
        return (theSeq) => endsWith(tail, theSeq);
    }
    const _tail = main_1.getValue(tail);
    const _seq = main_1.getValue(seq);
    if (main_1.isNil(_tail) || main_1.isNil(_seq))
        return false;
    if (typeof _tail === "string" && typeof _seq === "string") {
        return _seq.endsWith(_tail);
    }
    else if (_tail instanceof Array && !(_seq[0] instanceof Array)) {
        let j = _seq.length - 1;
        for (let i = _tail.length - 1; i > 0; --i, --j) {
            if (!main_1.equals(_tail[i], _seq[j]))
                return false;
        }
        return true;
    }
    else {
        return main_1.equals(_seq[_seq.length - 1], _tail);
    }
}
exports.endsWith = endsWith;
