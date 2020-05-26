"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getOr(alt, lens, input) {
    if (arguments.length === 1) {
        return function (l, i) {
            return arguments.length === 1 ? getOr(alt, l) : getOr(alt, l, i);
        };
    }
    else if (arguments.length === 2) {
        return (i) => getOr(alt, lens, i);
    }
    const value = lens instanceof Array ? main_1.getIn(lens, input) : main_1.get(lens, input);
    return value || alt;
}
exports.getOr = getOr;
