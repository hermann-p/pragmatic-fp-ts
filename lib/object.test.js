(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("./object");
    describe("object", () => {
        describe("get()()", () => {
            const obj = { foo: 1, bar: { baz: 2, great: [4, 5, 6] } };
            it("gets values", () => {
                expect(object_1.get(["foo"])(obj).isJust()).toBe(true);
                expect(object_1.get(["foo"])(obj).getValue()).toBe(1);
                expect(object_1.get(["bar", "baz"])(obj).getValue()).toBe(2);
                expect(object_1.get([1])([7, 8, 9]).getValue()).toBe(8);
                expect(object_1.get(["bar", "great", 2])(obj).getValue()).toBe(6);
            });
            it("does not throw on invalid paths", () => {
                expect(object_1.get(["baz"])(obj).isNothing()).toBe(true);
                expect(object_1.get(["some", "invalid", "path"])(obj).isNothing()).toBe(true);
            });
            it("is nil safe", () => {
                expect(object_1.get(null)(obj).isNothing()).toBe(true);
                expect(object_1.get(["foo"])(null).isNothing()).toBe(true);
                expect(object_1.get(null)(null).isNothing()).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=object.test.js.map