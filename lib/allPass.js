"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function allPass(preds, value) {
    if (arguments.length === 1) {
        return (_value) => allPass(preds, _value);
    }
    const theValue = main_1.getValue(value);
    return preds.reduce((result, nextPred) => result && nextPred(theValue), true);
}
exports.allPass = allPass;
