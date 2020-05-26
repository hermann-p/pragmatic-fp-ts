"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function where(pattern, dict) {
    if (arguments.length === 1)
        return (_dict) => where(pattern, _dict);
    return Object.keys(pattern).reduce((success, key) => success && pattern[key](dict[key]), true);
}
exports.where = where;
