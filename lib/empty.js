"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function empty(val) {
    return typeof val === "string"
        ? ""
        : val instanceof Array
            ? []
            : main_1.isMaybe(val)
                ? main_1.nothing()
                : main_1.isChain(val)
                    ? main_1.chain(null)
                    : val instanceof Function
                        ? () => undefined
                        : val instanceof Object
                            ? val.empty instanceof Function
                                ? val.empty()
                                : {}
                            : null;
}
exports.empty = empty;
