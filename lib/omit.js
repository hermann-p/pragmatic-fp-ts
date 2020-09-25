"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = void 0;
function omit(props, dict) {
    if (arguments.length === 1)
        return (_dict) => omit(props, _dict);
    const result = {};
    Object.keys(dict || {}).forEach((key) => {
        if (!props.includes(key)) {
            result[key] = dict[key];
        }
    });
    return result;
}
exports.omit = omit;
