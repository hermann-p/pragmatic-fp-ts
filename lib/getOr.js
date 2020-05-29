"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getOr(alt, path, input) {
    if (arguments.length === 1) {
        return function (l, i) {
            return arguments.length === 1 ? getOr(alt, l) : getOr(alt, l, i);
        };
    }
    else if (arguments.length === 2) {
        return (i) => getOr(alt, path, i);
    }
    const i = input || {};
    const value = path instanceof Array ? main_1.getIn(path || [], i) : main_1.get((path || ""), i);
    return value || alt;
}
exports.getOr = getOr;
