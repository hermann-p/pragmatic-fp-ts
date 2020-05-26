"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tryCatch(tryer, catcher, value) {
    if (arguments.length === 1) {
        return function (c, v) {
            return arguments.length === 1
                ? tryCatch(tryer, c)
                : tryCatch(tryer, c, v);
        };
    }
    else if (arguments.length === 2) {
        return (v) => tryCatch(tryer, catcher, v);
    }
    try {
        return tryer(value);
    }
    catch (err) {
        return catcher(err, value);
    }
}
exports.tryCatch = tryCatch;
