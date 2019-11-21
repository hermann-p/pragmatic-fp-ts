(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./logic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const logic_1 = require("./logic");
    describe("logic", () => {
        const gt2 = (x) => x > 2;
        const even = (x) => x % 2 === 0;
        const preds = [gt2, even];
        describe("somePass()()", () => {
            it("behaves well", () => {
                expect(logic_1.somePass(preds)(1)).toBe(false);
                expect(logic_1.somePass(preds)(2)).toBe(true);
                expect(logic_1.somePass(preds)(3)).toBe(true);
                expect(logic_1.somePass(preds)(undefined)).toBe(false);
                expect(logic_1.somePass(null)(null)).toBe(false);
            });
        });
    });
});
//# sourceMappingURL=logic.test.js.map