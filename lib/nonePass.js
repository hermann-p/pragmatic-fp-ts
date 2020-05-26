"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nonePass(preds, value) {
    if (arguments.length === 1)
        return (_value) => nonePass(preds, _value);
    for (let i = 0; i < preds.length; ++i) {
        if (preds[i](value))
            return false;
    }
    return true;
}
exports.nonePass = nonePass;
