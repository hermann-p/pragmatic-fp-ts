"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
const main_1 = require("./main");
function mean(ns) {
    return main_1.chain(ns)
        .bind(main_1.reduce(main_1.add, 0))
        .bind(main_1.divideBy(main_1.count(ns)))
        .getValue();
}
exports.mean = mean;
