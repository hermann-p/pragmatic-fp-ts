"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
// inverts key->value to value->key object
function invertObj(obj) {
    const dict = main_1.getValueOr({}, obj);
    return Object.keys(dict).reduce((accum, key) => {
        accum[String(dict[key])] = key;
        return accum;
    }, {});
}
exports.invertObj = invertObj;
