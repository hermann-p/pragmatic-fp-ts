"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logic_1 = require("../logic");
const Maybe_1 = require("../Maybe");
describe("logic", () => {
    const gt2 = (x) => x > 2;
    const even = (x) => x % 2 === 0;
    const preds = [gt2, even];
    describe("somePass()", () => {
        it("behaves well", () => {
            expect(logic_1.somePass(preds)(1)).toBe(false);
            expect(logic_1.somePass(preds)(2)).toBe(true);
            expect(logic_1.somePass(preds)(3)).toBe(true);
            expect(logic_1.somePass(preds)(undefined)).toBe(false);
            expect(logic_1.somePass(null)(null)).toBe(false);
        });
    });
    describe("some()", () => { });
    describe("equals()", () => {
        it("performs a safe deep comparison", () => {
            expect(logic_1.equals(1)(1)).toBe(true);
            expect(logic_1.equals("foo")("foo")).toBe(true);
            expect(logic_1.equals({ foo: 1 })({ foo: 1 })).toBe(true);
            expect(logic_1.equals(Maybe_1.maybe(1))(1)).toBe(true);
            expect(logic_1.equals("foo")(Maybe_1.maybe("foo"))).toBe(true);
            expect(logic_1.equals({ foo: 1 })({ foo: 1 })).toBe(true);
            expect(logic_1.equals(1)(2)).toBe(false);
            expect(logic_1.equals("foo")("fox")).toBe(false);
            expect(logic_1.equals({ foo: 1 })({ foo: 2 })).toBe(false);
            expect(logic_1.equals(0)(null)).toBe(false);
            expect(logic_1.equals(null)(null)).toBe(true);
            expect(logic_1.equals(Maybe_1.maybe(null))(null)).toBe(false);
        });
    });
    describe("eqShallow()", () => {
        it("performs a safe shallow comparison", () => {
            expect(logic_1.eqShallow(1)(1)).toBe(true);
            expect(logic_1.eqShallow("foo")("foo")).toBe(true);
            expect(logic_1.eqShallow({ foo: 1 })({ foo: 1 })).toBe(false);
            expect(logic_1.eqShallow(Maybe_1.maybe(1))(1)).toBe(true);
            expect(logic_1.eqShallow("foo")(Maybe_1.maybe("foo"))).toBe(true);
            expect(logic_1.eqShallow({ foo: 1 })({ foo: 1 })).toBe(false);
            expect(logic_1.eqShallow(1)(2)).toBe(false);
            expect(logic_1.eqShallow("foo")("fox")).toBe(false);
            expect(logic_1.eqShallow({ foo: 1 })({ foo: 2 })).toBe(false);
            expect(logic_1.eqShallow(0)(null)).toBe(false);
            expect(logic_1.eqShallow(null)(null)).toBe(true);
            expect(logic_1.eqShallow(Maybe_1.maybe(null))(null)).toBe(false);
        });
    });
});
//# sourceMappingURL=logic.test.js.map