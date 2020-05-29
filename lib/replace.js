"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replace(what, by, where) {
    switch (arguments.length) {
        case 1:
            return function (by_, where_) {
                return arguments.length === 1 ? replace(what, by_) : replace(what, by_, where_);
            };
        case 2:
            return (where_) => replace(what, by, where_);
        default:
            return (where || "").replace(what || "", (by || ""));
    }
}
exports.replace = replace;
