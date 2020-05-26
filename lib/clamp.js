"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function clamp(min, max, value) {
    if (arguments.length === 1) {
        return function (_max, _value) {
            if (arguments.length === 1) {
                return clamp(min, _max);
            }
            else {
                return clamp(min, _max, _value);
            }
        };
    }
    else if (arguments.length === 2) {
        return (_value) => clamp(min, max, _value);
    }
    const [val, minVal, maxVal] = [value, min, max].map(main_1.getValue);
    if (val === undefined || minVal === undefined || maxVal === undefined) {
        throw new Error("clamp() retrieved undefined input" +
            JSON.stringify({ min: min, max, value }));
    }
    return val < minVal ? minVal : val > maxVal ? maxVal : val;
}
exports.clamp = clamp;
