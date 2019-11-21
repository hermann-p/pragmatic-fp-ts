(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Maybe"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Maybe_1 = require("./Maybe");
    /**
     * mathematical identity.
     * const identity = a => a
     */
    exports.identity = (a) => a;
    /**
     * Return the complement of a predicate.
     * complement(isEmpty)([]) === true
     */
    exports.complement = (pred) => (a) => !pred(a);
    /**
     * Return the complement of a predicate.
     * complement(isEmpty)([]) === true
     */
    exports.invert = exports.complement;
    /**
     * Invert truthyness
     */
    exports.not = (val) => Maybe_1.maybe(val)
        .bind((v) => !v)
        .match({ just: (v) => v, nothing: () => true })
        .getValue();
    /**
     * Negate a number
     */
    exports.negate = (val) => Maybe_1.maybe(val).bind((n) => n * -1);
    /**
     * Call fn with inverted arguments
     **/
    exports.flip = (fn) => (a) => (b) => fn(b)(a);
    /**
     * composable if-else-switch
     *
     * const tellIfItIsNil = ifElse(isNil)(() => "it is nil")(() => "it is not nil")
     * tellIfItIsNil(null)  ->  "it is nil"
     * tellIfItIsNil(1)     ->  "it is not nil"
     */
    exports.ifElse = (pred) => (ifFn) => (elseFn) => (value) => Maybe_1.maybe(value).bind((value) => (pred(value) ? ifFn(value) : elseFn(value)));
    /**
     * applies ifFn only when pred is true
     */
    exports.when = (pred) => (ifFn) => exports.ifElse(pred)(ifFn)(exports.identity);
    /**
     * applies elseFn only when pred is false
     */
    exports.unless = (pred) => (elseFn) => exports.ifElse(pred)(exports.identity)(elseFn);
});
//# sourceMappingURL=functools.js.map