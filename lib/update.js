"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const updateArray = (idx, fn, arr) => {
    const result = Array.from(arr);
    result[idx] = fn(result[idx]);
    return result;
};
function update(propName, fn, dict) {
    if (arguments.length === 1) {
        return function (_fn, _dict) {
            return arguments.length === 1 ? update(propName, _fn) : update(propName, _fn, _dict);
        };
    }
    else if (arguments.length === 2) {
        return (_dict) => update(propName, fn, _dict);
    }
    const d = main_1.getValueOr({}, dict);
    return d instanceof Array
        ? updateArray(propName, fn, d)
        : Object.assign(Object.assign({}, d), { [propName]: fn(d[propName]) });
}
exports.update = update;
