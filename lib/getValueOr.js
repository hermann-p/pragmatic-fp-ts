"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getValueOr(alt, candidate) {
    var _a;
    if (arguments.length === 1) {
        return ((_candidate) => getValueOr(alt, _candidate));
    }
    if (main_1.isFunction((_a = candidate) === null || _a === void 0 ? void 0 : _a.getValue)) {
        try {
            return candidate.getValueOr(alt);
        }
        catch (_b) {
            return alt;
        }
    }
    else {
        return main_1.isNil(candidate) ? alt : candidate;
    }
}
exports.getValueOr = getValueOr;
