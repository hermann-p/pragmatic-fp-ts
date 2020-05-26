"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function prop(lens, input) {
    if (arguments.length === 1) {
        return (i) => prop(lens, i);
    }
    return lens instanceof Array
        ? main_1.getIn(lens, input)
        : main_1.get(lens, input);
}
exports.prop = prop;
