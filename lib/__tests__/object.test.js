"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("../Maybe");
const object_1 = require("../object");
describe("object", () => {
    describe("getIn()()", () => {
        const obj = { foo: 1, bar: { baz: 2, great: [4, 5, 6] } };
        it("gets values", () => {
            expect(object_1.getIn(["foo"])(obj).isJust()).toBe(true);
            expect(object_1.getIn(["foo"])(obj).getValue()).toBe(1);
            expect(object_1.getIn(["bar", "baz"])(obj).getValue()).toBe(2);
            expect(object_1.getIn([1])([7, 8, 9]).getValue()).toBe(8);
            expect(object_1.getIn(["bar", "great", 2])(obj).getValue()).toBe(6);
        });
        it("does not throw on invalid paths", () => {
            expect(object_1.getIn(["baz"])(obj).isNothing()).toBe(true);
            expect(object_1.getIn(["some", "invalid", "path"])(obj).isNothing()).toBe(true);
        });
        it("is nil safe", () => {
            expect(object_1.getIn(null)(obj).isNothing()).toBe(true);
            expect(object_1.getIn(["foo"])(null).isNothing()).toBe(true);
            expect(object_1.getIn(null)(null).isNothing()).toBe(true);
        });
    });
    describe("get()", () => {
        it("gets values safely", () => {
            expect(object_1.get("foo")({ foo: 1 }).getValue()).toBe(1);
            expect(object_1.get("bar")({ foo: 1 })).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.get(null)({ foo: 1 })).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.get("foo")(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("assoc()", () => {
        it("associates values", () => {
            expect(object_1.assoc("bar")(2)({ foo: 1 }).getValue()).toEqual({ foo: 1, bar: 2 });
        });
    });
    describe("update", () => {
        it("safely updates values", () => {
            expect(object_1.update("foo")((x) => x + 1)({ foo: 1 }).getValue()).toEqual({
                foo: 2,
            });
        });
    });
    describe("updateIn", () => {
        it("safely updates values", () => {
            expect(object_1.updateIn(["foo", "bar"])((x) => x + 1)({
                foo: { bar: 1 },
                baz: 2,
            }).getValue()).toEqual({
                foo: { bar: 2 },
                baz: 2,
            });
        });
    });
    describe("keys()", () => {
        it("safely gets object keys", () => {
            expect(object_1.keys({ foo: 1, bar: 2 }).getValue()).toEqual(["foo", "bar"]);
            expect(object_1.keys([1, 2, 3]).getValue()).toEqual(["0", "1", "2"]);
            expect(object_1.keys({})).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.keys(1)).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.keys(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.keys("test")).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    const toUpper = (input) => input.toUpperCase();
    describe("mapKeys()", () => {
        it("safely maps over object keys", () => {
            const obj = { foo: 1, bar: "hello" };
            expect(object_1.mapKeys(toUpper)(obj).getValue()).toEqual({ FOO: 1, BAR: "hello" });
            expect(object_1.mapKeys(toUpper)({})).toEqual({});
            expect(object_1.mapKeys(toUpper)([1, 2, 3])).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapKeys(toUpper)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapKeys(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("mapValues", () => {
        it("safely maps values", () => {
            expect(object_1.mapValues(toUpper)({ foo: "bar", baz: "foobar" }).getValue()).toEqual({
                foo: "BAR",
                baz: "FOOBAR",
            });
            expect(object_1.mapValues(toUpper)({ foo: "bar", baz: 1 }).getValue()).toEqual({ foo: "BAR", baz: 1 });
            expect(object_1.mapValues(toUpper)({})).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapValues(toUpper)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapValues(null)({ foo: "bar" })).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapValues(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("mapFilterValues", () => {
        it("safely maps values", () => {
            expect(object_1.mapFilterValues(toUpper)({ foo: "bar", baz: "foobar" }).getValue()).toEqual({
                foo: "BAR",
                baz: "FOOBAR",
            });
            expect(object_1.mapFilterValues(toUpper)({ foo: "bar", baz: 1 }).getValue()).toEqual({
                foo: "BAR",
            });
            expect(object_1.mapFilterValues(toUpper)({})).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapFilterValues(toUpper)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapFilterValues(null)({ foo: "bar" })).toBeInstanceOf(Maybe_1.Nothing);
            expect(object_1.mapFilterValues(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("pickBy()", () => {
        it("safely picks object keys", () => {
            const obj = { foo: 1, bar: 2, foobar: 3 };
            expect(object_1.pickBy((key) => key.length === 3)(obj).getValue()).toEqual({ foo: 1, bar: 2 });
        });
    });
});
//# sourceMappingURL=object.test.js.map