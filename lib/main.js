(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Monad", "./Maybe", "./Either", "./array", "./object", "./functools", "./predicates"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./Monad"));
    __export(require("./Maybe"));
    __export(require("./Either"));
    __export(require("./array"));
    __export(require("./object"));
    __export(require("./functools"));
    __export(require("./predicates"));
});
//# sourceMappingURL=main.js.map