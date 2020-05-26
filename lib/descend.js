"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function descend(toComparable) {
    return (a, b) => {
        const valA = main_1.getValueOr(null, a);
        const valB = main_1.getValueOr(null, b);
        const cvalA = valA && toComparable(valA);
        const cvalB = valB && toComparable(valB);
        if (cvalA === cvalB) {
            return 0;
        }
        else if (main_1.isSome(cvalA) && main_1.isSome(cvalB)) {
            return cvalA > cvalB ? 1 : -1;
        }
        else if (main_1.isNil(cvalA)) {
            return -1;
        }
        else {
            return 1;
        }
    };
}
exports.descend = descend;
