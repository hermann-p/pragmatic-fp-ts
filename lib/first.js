"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
// find first letter of string or first element of list
function first(coll) {
    return (coll || [])[0] || null;
}
exports.first = first;
