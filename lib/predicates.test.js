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
    describe("predicates", () => {
        describe("isEmpty()", () => {
            it("does as expected", () => {
                expect(predicates_1.isEmpty([])).toBe(true);
                expect(predicates_1.isEmpty({})).toBe(true);
                expect(predicates_1.isEmpty("")).toBe(true);
                expect(predicates_1.isEmpty("foo")).toBe(false);
                expect(predicates_1.isEmpty(["foo"])).toBe(false);
                expect(predicates_1.isEmpty({ foo: 1 })).toBe(false);
                expect(predicates_1.isEmpty(1)).toBe(false);
                expect(predicates_1.isEmpty(null)).toBe(false);
                expect(predicates_1.isEmpty(undefined)).toBe(false);
            });
        });
    });
});
//# sourceMappingURL=predicates.test.js.map