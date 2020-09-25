"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
function uniq(coll) {
    return Array.from(new Set(coll));
}
exports.uniq = uniq;
