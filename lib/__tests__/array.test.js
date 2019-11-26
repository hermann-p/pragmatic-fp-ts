"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("../Maybe");
const array_1 = require("../array");
describe("array functions", () => {
    describe("head()", () => {
        it("delivers first Array elements", () => {
            const arr1 = [1, 2, 3];
            const arr2 = ["foo", "bar"];
            expect(array_1.head(arr1).getValue()).toBe(1);
            expect(array_1.head(arr2).getValue()).toEqual("foo");
        });
        it("is nil safe", () => {
            expect(array_1.head(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.head([])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("tail()", () => {
        it("delivers first Array elements", () => {
            const arr1 = [1, 2, 3];
            const arr2 = ["foo", "bar"];
            expect(array_1.tail(arr1).getValue()).toBe(3);
            expect(array_1.tail(arr2).getValue()).toEqual("bar");
            expect(array_1.tail(Maybe_1.maybe(arr1)).getValue()).toBe(3);
            expect(array_1.tail(Maybe_1.maybe(arr2)).getValue()).toEqual("bar");
        });
        it("is nil safe", () => {
            expect(array_1.tail(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.tail([])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("reverse()", () => {
        it("reverses sequences", () => {
            expect(array_1.reverse([1, 2, 3]).getValue()).toEqual([3, 2, 1]);
            expect(array_1.reverse(Maybe_1.maybe([1, 2, 3])).getValue()).toEqual([3, 2, 1]);
        });
        it("is nil safe", () => {
            expect(array_1.reverse(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("take()()", () => {
        it("takes n elements from array", () => {
            expect(array_1.take(2)([1, 2, 3]).getValue()).toEqual([1, 2]);
            expect(array_1.take(10)([1, 2, 3]).getValue()).toEqual([1, 2, 3]);
            expect(array_1.take(3)([])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("takeWhile()()", () => {
        it("takes matching elements", () => {
            expect(array_1.takeWhile((x) => x > 2)([4, 3, 2, 1, 2, 3, 4, 5]).getValue()).toEqual([4, 3]);
        });
    });
    describe("sortBy()()", () => {
        it("sorts correctly", () => {
            expect(array_1.sortBy((x) => x)([3, 2, 5, 4, 6, 1]).getValue()).toEqual([1, 2, 3, 4, 5, 6]);
            expect(array_1.sortBy((x) => -x)([3, 2, 5, 4, 6, 1]).getValue()).toEqual([6, 5, 4, 3, 2, 1]);
        });
        it("is nil safe", () => {
            expect(array_1.sortBy((x) => x)([4, 1, null, 3]).getValue()).toEqual([null, 1, 3, 4]);
            expect(array_1.sortBy(null)([1, 2, 3])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.sortBy((x) => x)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("map()()", () => {
        it("maps values", () => {
            expect(array_1.map((x) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
        });
        it("is nil safe", () => {
            expect(array_1.map((x) => x * 2)([1, 2, undefined])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.map(null)([1, 2, 3])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.map((x) => x)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("mapOr()()()", () => {
        it("maps values", () => {
            expect(array_1.mapOr(-1)((x) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
        });
        it("is nil safe", () => {
            expect(array_1.mapOr("-1")((x) => x.toString())([1, 2, null]).getValue()).toEqual(["1", "2", "-1"]);
        });
    });
    describe("mapJust()()", () => {
        it("maps only Justs or Justables", () => {
            expect(array_1.mapJust((x) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
            expect(array_1.mapJust((x) => x + 1)([1, 2, null, 4]).getValue()).toEqual([2, 3, 5]);
            expect(array_1.mapJust((x) => x + 1)([null, undefined])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.mapJust(null)([1, 2, 3])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("join()()", () => {
        expect(array_1.join("--")([1, 2, 3]).getValue()).toEqual("1--2--3");
        expect(array_1.join(Maybe_1.nothing())([1, 2, 3]).getValue()).toEqual("123");
        expect(array_1.join()([1, 2, 3]).getValue()).toEqual("123");
        expect(array_1.join("--")([])).toBeInstanceOf(Maybe_1.Nothing);
        expect(array_1.join("--")(Maybe_1.nothing())).toBeInstanceOf(Maybe_1.Nothing);
    });
    describe("filter()()", () => {
        it("filters arrays", () => {
            const pred = (x) => x > 2;
            expect(array_1.filter(pred)([1, 2, 3, 4, 5]).getValue()).toEqual([3, 4, 5]);
            expect(array_1.filter(pred)([1, 2, null, 4, 5]).getValue()).toEqual([4, 5]);
        });
    });
    describe("reject()()", () => {
        it("filters arrays", () => {
            const pred = (x) => x > 2;
            expect(array_1.reject(pred)([1, 2, 3, 4, 5]).getValue()).toEqual([1, 2]);
            expect(array_1.reject(pred)([1, 2, null, 4, 5]).getValue()).toEqual([1, 2]);
        });
    });
    describe("isIn()()", () => {
        it("delivers correct results", () => {
            expect(array_1.isIn([1, 2, 3])(2)).toBe(true);
            expect(array_1.isIn("word")("or")).toBe(true);
            expect(array_1.isIn(Maybe_1.maybe("word"))(Maybe_1.maybe("or"))).toBe(true);
            expect(array_1.isIn([1, 2, 3])(4)).toBe(false);
            expect(array_1.isIn("word")("something else")).toBe(false);
        });
        it("is nil safe", () => {
            expect(array_1.isIn([null])(null)).toBe(true);
            expect(array_1.isIn(null)(null)).toBe(false);
        });
    });
    describe("contains()()", () => {
        it("delivers correct results", () => {
            expect(array_1.contains(3)([1, 2, 3])).toBe(true);
            expect(array_1.contains("or")("word")).toBe(true);
            expect(array_1.contains("error")("word")).toBe(false);
            expect(array_1.contains(Maybe_1.maybe("or"))(Maybe_1.maybe("word"))).toBe(true);
        });
    });
    describe("cons()()", () => {
        const arr = [1, 2, 3];
        it("constructs new arrays", () => {
            expect(array_1.cons(0)(arr).getValue()).toEqual([0, 1, 2, 3]);
            expect(array_1.cons(Maybe_1.maybe(0))(Maybe_1.maybe(arr)).getValue()).toEqual([0, 1, 2, 3]);
        });
        it("is nil safe", () => {
            expect(array_1.cons(null)(arr)).toBeInstanceOf(Maybe_1.Just);
            expect(array_1.cons(1)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.cons(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("conj()()", () => {
        const arr = [1, 2, 3];
        it("constructs new arrays", () => {
            expect(array_1.conj(4)(arr).getValue()).toEqual([1, 2, 3, 4]);
            expect(array_1.conj(Maybe_1.maybe(4))(Maybe_1.maybe(arr)).getValue()).toEqual([1, 2, 3, 4]);
        });
        it("is nil safe", () => {
            expect(array_1.conj(null)(arr)).toBeInstanceOf(Maybe_1.Just);
            expect(array_1.conj(null)(arr).getValue()).toEqual([...arr, null]);
            expect(array_1.conj(1)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.conj(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("append()()", () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        it("concatenates sequences ", () => {
            expect(array_1.append("foo")("bar").getValue()).toEqual("barfoo");
            expect(array_1.append(Maybe_1.maybe("foo"))(Maybe_1.maybe("bar")).getValue()).toEqual("barfoo");
            expect(array_1.append(arr1)(arr2).getValue()).toEqual([4, 5, 6, 1, 2, 3]);
        });
        it("is nil safe", () => {
            expect(array_1.append(arr1)(null).getValue()).toEqual(arr1);
            expect(array_1.append([])(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.append(null)(arr2).getValue()).toEqual(arr2);
            expect(array_1.append([])([])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("prepend()()", () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        it("concatenates sequences ", () => {
            expect(array_1.prepend("foo")("bar").getValue()).toEqual("foobar");
            expect(array_1.prepend(Maybe_1.maybe("foo"))(Maybe_1.maybe("bar")).getValue()).toEqual("foobar");
            expect(array_1.prepend(arr1)(arr2).getValue()).toEqual([1, 2, 3, 4, 5, 6]);
        });
        it("is nil safe", () => {
            expect(array_1.prepend(arr1)(null).getValue()).toEqual(arr1);
            expect(array_1.prepend([])(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.prepend(null)(arr2).getValue()).toEqual(arr2);
            expect(array_1.prepend([])([])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("rest()", () => {
        it("delivers the rest of arrays", () => {
            expect(array_1.rest([1, 2, 3]).getValue()).toEqual([2, 3]);
            expect(array_1.rest("foo").getValue()).toEqual("oo");
            expect(array_1.rest(Maybe_1.maybe([1, 2, 3])).getValue()).toEqual([2, 3]);
            expect(array_1.rest(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.rest([])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.rest([1])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("butLast()", () => {
        it("delivers the butLast of arrays", () => {
            expect(array_1.butLast([1, 2, 3]).getValue()).toEqual([1, 2]);
            expect(array_1.butLast("foo").getValue()).toEqual("fo");
            expect(array_1.butLast(Maybe_1.maybe([1, 2, 3])).getValue()).toEqual([1, 2]);
            expect(array_1.butLast(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.butLast([])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.butLast([1])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("insertAt()()()", () => {
        it("inserts stuff into sequences", () => {
            expect(array_1.insertAt(2)(42)([1, 2, 3, 4, 5]).getValue()).toEqual([1, 2, 42, 3, 4, 5]);
            expect(array_1.insertAt(0)(1)([2, 3]).getValue()).toEqual([1, 2, 3]);
            expect(array_1.insertAt(Maybe_1.maybe(0))(Maybe_1.maybe(1))(Maybe_1.maybe([2, 3])).getValue()).toEqual([1, 2, 3]);
            expect(array_1.insertAt(-2)(9)([0, 1, 2, 3, 4, 5]).getValue()).toEqual([0, 1, 2, 3, 9, 4, 5]);
            expect(array_1.insertAt(19)(3)([0, 1, 2]).getValue()).toEqual([0, 1, 2, 3]);
        });
        it("is nil safe", () => {
            expect(array_1.insertAt(null)(null)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.insertAt(0)(1)([]).getValue()).toEqual([1]);
            expect(array_1.insertAt(0)(1)(null)).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("removeAt()", () => {
        it("removes", () => {
            expect(array_1.removeAt(1)([1, 2, 3]).getValue()).toEqual([1, 3]);
            expect(array_1.removeAt(1)([1, 2]).getValue()).toEqual([1]);
            expect(array_1.removeAt(0)([1])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
    describe("find()", () => {
        it("finds array elements", () => {
            const pred = (x) => x === 5;
            expect(array_1.find(pred)([1, 2, 3, 4, 5]).getValue()).toBe(5);
            expect(array_1.find(pred)([1, 2, 3])).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.find(pred)(null)).toBeInstanceOf(Maybe_1.Nothing);
            expect(array_1.find(null)([1, 2, 3, 4, 5])).toBeInstanceOf(Maybe_1.Nothing);
        });
    });
});
//# sourceMappingURL=array.test.js.map