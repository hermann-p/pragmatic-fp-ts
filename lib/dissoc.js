"use strict";
// Removes a key from an object or element from an array
Object.defineProperty(exports, "__esModule", { value: true });
exports.dissoc = void 0;
const dissocArray = (idx, array) => [
    ...array.slice(0, idx),
    ...array.slice(idx + 1),
];
const dissocObject = (propNAme, obj) => {
    const result = {};
    Object.keys(obj).forEach((k) => {
        if (k !== propNAme)
            result[k] = obj[k];
    });
    return result;
};
function dissoc(propName, dict) {
    if (arguments.length === 1) {
        return (theDict) => dissoc(propName, theDict);
    }
    return dict instanceof Array
        ? dissocArray(propName, dict)
        : dissocObject(propName, dict || {});
}
exports.dissoc = dissoc;
