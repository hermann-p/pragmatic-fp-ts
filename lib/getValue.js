"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getValue(candidate) {
    var _a;
    if (main_1.isFunction((_a = candidate) === null || _a === void 0 ? void 0 : _a.getValue)) {
        try {
            return getValue(candidate.getValue());
        }
        catch (_b) {
            return null;
        }
    }
    else {
        return candidate;
    }
}
exports.getValue = getValue;
