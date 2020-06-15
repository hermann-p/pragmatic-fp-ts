"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function get(p, coll) {
    if (arguments.length === 1)
        return (coll_) => get(p, coll_);
    const defVal = typeof p === "string" ? {} : [];
    return main_1.getValueOr(defVal, coll)[p];
}
exports.get = get;
