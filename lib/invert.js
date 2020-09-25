"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invert = void 0;
const main_1 = require("./main");
// inverts key->value to value->[all keys with that value]
function invert(obj) {
    const dict = main_1.getValueOr({}, obj);
    return Object.keys(dict).reduce((accum, key) => {
        const value = String(dict[key]);
        accum[value] = accum[value] || [];
        accum[value].push(key);
        return accum;
    }, {});
}
exports.invert = invert;
