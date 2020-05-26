"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function getValueOr(alt, candidate) {
    if (arguments.length === 1) {
        return ((_candidate) => getValueOr(alt, _candidate));
    }
    if (main_1.isMonad(candidate)) {
        try {
            return candidate.getValueOr(alt);
        }
        catch (_a) {
            return alt;
        }
    }
    else {
        return main_1.isNil(candidate) ? alt : candidate;
    }
}
exports.getValueOr = getValueOr;
