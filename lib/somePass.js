"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somePass = void 0;
const main_1 = require("./main");
function somePass(preds, value) {
    if (arguments.length === 1) {
        return (_value) => somePass(preds, _value);
    }
    const theValue = main_1.getValue(value);
    return (preds || []).reduce((result, nextPred) => result || nextPred(theValue), false);
}
exports.somePass = somePass;
