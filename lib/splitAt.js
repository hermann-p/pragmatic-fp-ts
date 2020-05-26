"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function splitAt(idx, input) {
    if (arguments.length === 1)
        return (_input) => splitAt(idx, _input);
    if (typeof input !== "string" && !(input instanceof Array) && !main_1.isNil(input)) {
        throw new Error("Can only split string or array, got " + typeof input);
    }
    return typeof input === "string"
        ? [input.slice(0, idx) || "", input.slice(idx) || ""]
        : [(input || []).slice(0, idx), (input || []).slice(idx)];
}
exports.splitAt = splitAt;
