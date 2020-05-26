"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function init(coll) {
    return main_1.getValueOr([], coll).slice(0, -1);
}
exports.init = init;
