"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
const main_1 = require("./main");
function forEach(fn, data) {
    if (arguments.length === 1) {
        return (theData) => forEach(fn, theData);
    }
    const theData = main_1.getValueOr([], data);
    if (theData instanceof Array) {
        theData.forEach(fn);
    }
    else {
        const keys = Object.keys(theData);
        keys.forEach((key) => fn(theData[key], key));
    }
    return theData;
}
exports.forEach = forEach;
