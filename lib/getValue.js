"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getValue(candidate) {
    if (main_1.isMonad(candidate)) {
        try {
            return candidate.getValue();
        }
        catch (_a) {
            return null;
        }
    }
    else {
        return candidate;
    }
}
exports.getValue = getValue;
