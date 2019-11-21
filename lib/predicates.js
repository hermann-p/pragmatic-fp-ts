(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Maybe", "./Either"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Maybe_1 = require("./Maybe");
    const Either_1 = require("./Either");
    exports.isNil = (value) => value === undefined || value === null;
    exports.isFunction = (value) => typeof value === "function";
    exports.isNaN = (value) => typeof value === "number" && window.isNaN(value);
    exports.isString = (value) => typeof value === "string";
    exports.isArray = (value) => value instanceof Array;
    exports.isNumber = (value) => typeof value === "number" && !window.isNaN(value);
    exports.isObject = (value) => typeof value === "object" && !exports.isArray(value);
    exports.isEmpty = (coll) => exports.isNil(coll)
        ? false
        : (exports.isArray(coll) && coll.length === 0) ||
            (exports.isObject(coll) && Object.keys(coll).length === 0) ||
            (exports.isString(coll) && coll === "");
    exports.isNotEmpty = (coll) => !exports.isEmpty(coll);
    exports.isJust = (value) => value instanceof Maybe_1.Just;
    exports.isNothing = (value) => value instanceof Maybe_1.Nothing;
    exports.isMaybe = (value) => exports.isJust(value) || exports.isNothing(value);
    exports.isRight = (value) => value instanceof Either_1.Right;
    exports.isLeft = (value) => value instanceof Either_1.Left;
    exports.isEither = (value) => exports.isLeft(value) || exports.isRight(value);
    exports.isMonad = (value) => exports.isMaybe(value) || exports.isEither(value);
    exports.isSome = (value) => !exports.isNil(value) && !exports.isNothing(value) && !exports.isLeft(value);
});
//# sourceMappingURL=predicates.js.map