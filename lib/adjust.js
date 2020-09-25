"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjust = void 0;
const main_1 = require("./main");
function adjust(idx, fn, coll) {
    if (arguments.length === 1) {
        return function (fn_, coll_) {
            return arguments.length === 1
                ? adjust(idx, fn_)
                : adjust(idx, fn_, coll_);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => adjust(idx, fn, _coll);
    }
    else {
        const input = main_1.getValueOr([], coll);
        const output = Array.from(input);
        const i = main_1.getValueOr(-1, idx);
        if (0 <= i && i < input.length) {
            output[i] = fn(input[i]);
        }
        return output;
    }
}
exports.adjust = adjust;
