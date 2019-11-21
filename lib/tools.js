(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./predicates"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const predicates_1 = require("./predicates");
    exports.getMonadValue = (input, alternate) => {
        if (predicates_1.isNil(input)) {
            return null;
        }
        else if (predicates_1.isFunction(input.getValue)) {
            return typeof alternate === "undefined"
                ? input.getValue()
                : input.getValueOr(alternate);
        }
        else {
            return input;
        }
    };
});
//# sourceMappingURL=tools.js.map