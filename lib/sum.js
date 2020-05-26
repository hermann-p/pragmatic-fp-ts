"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function sum(coll) {
    return coll.reduce(main_1.add, 0);
}
exports.sum = sum;
