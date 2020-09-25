"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const main_1 = require("./main");
function assoc(at, value, coll) {
    if (arguments.length === 1) {
        return function (_value, _coll) {
            return arguments.length === 1
                ? assoc(at, _value)
                : assoc(at, _value, _coll);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => assoc(at, value, _coll);
    }
    if (typeof at === "number") {
        const arr = Array.from(main_1.getValueOr([], coll));
        arr[at] = value;
        return arr;
    }
    else {
        return Object.assign(Object.assign({}, main_1.getValueOr({}, coll)), { [at]: value });
    }
}
exports.assoc = assoc;
