"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
// creates dictionaries from [key,value][] lists
function fromPairs(pairs) {
    return main_1.getValueOr([], pairs).reduce((accum, [key, value]) => {
        accum[key] = value;
        return accum;
    }, {});
}
exports.fromPairs = fromPairs;
