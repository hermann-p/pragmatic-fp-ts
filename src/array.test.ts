import { Just, Nothing, maybe, nothing } from "./Maybe";
import {
  append,
  butLast,
  conj,
  cons,
  contains,
  filter,
  head,
  insertAt,
  isIn,
  join,
  map,
  mapJust,
  mapOr,
  prepend,
  reject,
  removeAt,
  rest,
  reverse,
  sortBy,
  tail,
  take,
  takeWhile,
} from "./array";

describe("array functions", () => {
  describe("head()", () => {
    it("delivers first Array elements", () => {
      const arr1 = [1, 2, 3];
      const arr2 = ["foo", "bar"];

      expect(head(arr1).getValue()).toBe(1);
      expect(head(arr2).getValue()).toEqual("foo");
    });

    it("is nil safe", () => {
      expect(head((null as any) as Array<any>)).toBeInstanceOf(Nothing);
      expect(head([])).toBeInstanceOf(Nothing);
    });
  });

  describe("tail()", () => {
    it("delivers first Array elements", () => {
      const arr1 = [1, 2, 3];
      const arr2 = ["foo", "bar"];

      expect(tail(arr1).getValue()).toBe(3);
      expect(tail(arr2).getValue()).toEqual("bar");
      expect(tail(maybe(arr1)).getValue()).toBe(3);
      expect(tail(maybe(arr2)).getValue()).toEqual("bar");
    });

    it("is nil safe", () => {
      expect(tail((null as any) as Array<any>)).toBeInstanceOf(Nothing);
      expect(tail([])).toBeInstanceOf(Nothing);
    });
  });

  describe("reverse()", () => {
    it("reverses sequences", () => {
      expect(reverse([1, 2, 3]).getValue()).toEqual([3, 2, 1]);
      expect(reverse(maybe([1, 2, 3])).getValue()).toEqual([3, 2, 1]);
    });

    it("is nil safe", () => {
      expect(reverse((null as any) as Array<any>)).toBeInstanceOf(Nothing);
    });
  });

  describe("take()()", () => {
    it("takes n elements from array", () => {
      expect(take(2)([1, 2, 3]).getValue()).toEqual([1, 2]);
      expect(take(10)([1, 2, 3]).getValue()).toEqual([1, 2, 3]);
      expect(take(3)([])).toBeInstanceOf(Nothing);
    });
  });

  describe("takeWhile()()", () => {
    it("takes matching elements", () => {
      expect(takeWhile<number>((x) => x > 2)([4, 3, 2, 1, 2, 3, 4, 5]).getValue()).toEqual([4, 3]);
    });
  });

  describe("sortBy()()", () => {
    it("sorts correctly", () => {
      expect(sortBy((x) => x)([3, 2, 5, 4, 6, 1]).getValue()).toEqual([1, 2, 3, 4, 5, 6]);
      expect(sortBy((x: number) => -x)([3, 2, 5, 4, 6, 1]).getValue()).toEqual([6, 5, 4, 3, 2, 1]);
    });
    it("is nil safe", () => {
      expect(sortBy((x) => x)([4, 1, null, 3]).getValue()).toEqual([null, 1, 3, 4]);
      expect(sortBy(null as any)([1, 2, 3])).toBeInstanceOf(Nothing);
      expect(sortBy((x) => x)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("map()()", () => {
    it("maps values", () => {
      expect(map((x: number) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
    });
    it("is nil safe", () => {
      expect(map((x: number) => x * 2)([1, 2, undefined] as any[])).toBeInstanceOf(Nothing);
      expect(map(null as any)([1, 2, 3])).toBeInstanceOf(Nothing);
      expect(map((x) => x)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("mapOr()()()", () => {
    it("maps values", () => {
      expect(mapOr<number, number>(-1)((x) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
    });
    it("is nil safe", () => {
      expect(
        mapOr<number, string>("-1")((x) => x.toString())([1, 2, null] as any).getValue()
      ).toEqual(["1", "2", "-1"]);
    });
  });

  describe("mapJust()()", () => {
    it("maps only Justs or Justables", () => {
      expect(mapJust((x: number) => x + 1)([1, 2, 3]).getValue()).toEqual([2, 3, 4]);
      expect(mapJust((x: number) => x + 1)([1, 2, null as any, 4]).getValue()).toEqual([2, 3, 5]);
      expect(mapJust((x: number) => x + 1)([null, undefined] as any)).toBeInstanceOf(Nothing);
      expect(mapJust(null as any)([1, 2, 3])).toBeInstanceOf(Nothing);
    });
  });

  describe("join()()", () => {
    expect(join("--")([1, 2, 3]).getValue()).toEqual("1--2--3");
    expect(join(nothing())([1, 2, 3]).getValue()).toEqual("123");
    expect(join()([1, 2, 3]).getValue()).toEqual("123");
    expect(join("--")([])).toBeInstanceOf(Nothing);
    expect(join("--")(nothing())).toBeInstanceOf(Nothing);
  });

  describe("filter()()", () => {
    it("filters arrays", () => {
      const pred = (x: number) => x > 2;
      expect(filter(pred)([1, 2, 3, 4, 5]).getValue()).toEqual([3, 4, 5]);
      expect(filter(pred)([1, 2, null, 4, 5] as any).getValue()).toEqual([4, 5]);
    });
  });

  describe("reject()()", () => {
    it("filters arrays", () => {
      const pred = (x: number) => x > 2;
      expect(reject(pred)([1, 2, 3, 4, 5]).getValue()).toEqual([1, 2]);
      expect(reject(pred)([1, 2, null, 4, 5] as any).getValue()).toEqual([1, 2]);
    });
  });

  describe("isIn()()", () => {
    it("delivers correct results", () => {
      expect(isIn([1, 2, 3])(2)).toBe(true);
      expect(isIn("word")("or")).toBe(true);
      expect(isIn(maybe("word"))(maybe("or"))).toBe(true);

      expect(isIn([1, 2, 3])(4)).toBe(false);
      expect(isIn("word")("something else")).toBe(false);
    });
    it("is nil safe", () => {
      expect(isIn([null])(null)).toBe(true);
      expect(isIn(null as any)(null as any)).toBe(false);
    });
  });

  describe("contains()()", () => {
    it("delivers correct results", () => {
      expect(contains(3)([1, 2, 3])).toBe(true);
      expect(contains("or")("word" as any)).toBe(true);
      expect(contains("error")("word" as any)).toBe(false);

      expect(contains(maybe("or"))(maybe("word") as any)).toBe(true);
    });
  });

  describe("cons()()", () => {
    const arr = [1, 2, 3];
    it("constructs new arrays", () => {
      expect(cons(0)(arr).getValue()).toEqual([0, 1, 2, 3]);
      expect(cons(maybe(0))(maybe(arr)).getValue()).toEqual([0, 1, 2, 3]);
    });
    it("is nil safe", () => {
      expect(cons(null as any)(arr)).toBeInstanceOf(Just);
      expect(cons(1)(null as any)).toBeInstanceOf(Nothing);
      expect(cons(null)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("conj()()", () => {
    const arr = [1, 2, 3];
    it("constructs new arrays", () => {
      expect(conj(4)(arr).getValue()).toEqual([1, 2, 3, 4]);
      expect(conj(maybe(4))(maybe(arr)).getValue()).toEqual([1, 2, 3, 4]);
    });
    it("is nil safe", () => {
      expect(conj(null as any)(arr)).toBeInstanceOf(Just);
      expect(conj(null as any)(arr).getValue()).toEqual([...arr, null]);
      expect(conj(1)(null as any)).toBeInstanceOf(Nothing);
      expect(conj(null)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("append()()", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    it("concatenates sequences ", () => {
      expect(append("foo")("bar").getValue()).toEqual("barfoo");
      expect(append(maybe("foo"))(maybe("bar")).getValue()).toEqual("barfoo");
      expect(append(arr1)(arr2).getValue()).toEqual([4, 5, 6, 1, 2, 3]);
    });
    it("is nil safe", () => {
      expect(append(arr1)(null as any).getValue()).toEqual(arr1);
      expect(append([])(null as any)).toBeInstanceOf(Nothing);
      expect(append(null as any)(arr2).getValue()).toEqual(arr2);
      expect(append([])([])).toBeInstanceOf(Nothing);
    });
  });

  describe("prepend()()", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    it("concatenates sequences ", () => {
      expect(prepend("foo" as any)("bar" as any).getValue()).toEqual("foobar");
      expect(prepend(maybe("foo") as any)(maybe("bar") as any).getValue()).toEqual("foobar");
      expect(prepend(arr1)(arr2).getValue()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("is nil safe", () => {
      expect(prepend(arr1)(null as any).getValue()).toEqual(arr1);
      expect(prepend([])(null as any)).toBeInstanceOf(Nothing);
      expect(prepend(null as any)(arr2).getValue()).toEqual(arr2);
      expect(prepend([])([])).toBeInstanceOf(Nothing);
    });
  });

  describe("rest()", () => {
    it("delivers the rest of arrays", () => {
      expect(rest([1, 2, 3]).getValue()).toEqual([2, 3]);
      expect(rest("foo" as any).getValue()).toEqual("oo");
      expect(rest(maybe([1, 2, 3])).getValue()).toEqual([2, 3]);

      expect(rest(null as any)).toBeInstanceOf(Nothing);
      expect(rest([])).toBeInstanceOf(Nothing);
      expect(rest([1])).toBeInstanceOf(Nothing);
    });
  });

  describe("butLast()", () => {
    it("delivers the butLast of arrays", () => {
      expect(butLast([1, 2, 3]).getValue()).toEqual([1, 2]);
      expect(butLast("foo" as any).getValue()).toEqual("fo");
      expect(butLast(maybe([1, 2, 3])).getValue()).toEqual([1, 2]);

      expect(butLast(null as any)).toBeInstanceOf(Nothing);
      expect(butLast([])).toBeInstanceOf(Nothing);
      expect(butLast([1])).toBeInstanceOf(Nothing);
    });
  });

  describe("insertAt()()()", () => {
    it("inserts stuff into sequences", () => {
      expect(insertAt(2)(42)([1, 2, 3, 4, 5]).getValue()).toEqual([1, 2, 42, 3, 4, 5]);
      expect(insertAt(0)(1)([2, 3]).getValue()).toEqual([1, 2, 3]);
      expect(insertAt(maybe(0))(maybe(1))(maybe([2, 3])).getValue()).toEqual([1, 2, 3]);
      expect(insertAt(-2)(9)([0, 1, 2, 3, 4, 5]).getValue()).toEqual([0, 1, 2, 3, 9, 4, 5]);
      expect(insertAt(19)(3)([0, 1, 2]).getValue()).toEqual([0, 1, 2, 3]);
    });

    it("is nil safe", () => {
      expect(insertAt(null as any)(null as any)(null as any)).toBeInstanceOf(Nothing);
      expect(insertAt(0)(1)([]).getValue()).toEqual([1]);
      expect(insertAt(0)(1)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("removeAt()", () => {
    it("removes", () => {
      expect(removeAt(1)([1, 2, 3]).getValue()).toEqual([1, 3]);
      expect(removeAt(1)([1, 2]).getValue()).toEqual([1]);
      expect(removeAt(0)([1])).toBeInstanceOf(Nothing);
    });
  });
});
