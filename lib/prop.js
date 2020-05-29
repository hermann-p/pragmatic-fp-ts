"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function prop(path, input) {
    if (arguments.length === 1) {
        return (i) => prop(path, i);
    }
    const i = input || {};
    return path instanceof Array ? main_1.getIn(path, i) : main_1.get(path, i);
}
exports.prop = prop;
