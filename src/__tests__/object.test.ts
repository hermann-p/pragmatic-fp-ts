import { Dictionary } from "../types";
import { Nothing } from "../Maybe";
import {
  assoc,
  assocIn,
  dissoc,
  fromPairs,
  get,
  getIn,
  keys,
  mapFilterValues,
  mapKeys,
  mapValues,
  pick,
  pickBy,
  pickValuesBy,
  toPairs,
  update,
  updateIn,
  values,
  reduceKV,
} from "../object";

describe("object", () => {
  describe("getIn()()", () => {
    const obj = { foo: 1, bar: { baz: 2, great: [4, 5, 6] } };

    it("gets values", () => {
      expect(getIn(["foo"])(obj).isJust()).toBe(true);
      expect(getIn(["foo"])(obj).getValue()).toBe(1);
      expect(getIn(["bar", "baz"])(obj).getValue()).toBe(2);
      expect(getIn([1])([7, 8, 9]).getValue()).toBe(8);
      expect(getIn(["bar", "great", 2])(obj).getValue()).toBe(6);
    });

    it("does not throw on invalid paths", () => {
      expect(getIn(["baz"])(obj).isNothing()).toBe(true);
      expect(getIn(["some", "invalid", "path"])(obj).isNothing()).toBe(true);
    });

    it("is nil safe", () => {
      expect(getIn((null as any) as Array<number>)(obj).isNothing()).toBe(true);
      expect(getIn(["foo"])((null as any) as Dictionary).isNothing()).toBe(true);
      expect(getIn((null as any) as Array<number>)((null as any) as Dictionary).isNothing()).toBe(
        true
      );
    });
  });

  describe("get()", () => {
    it("gets values safely", () => {
      expect(get("foo")({ foo: 1 }).getValue()).toBe(1);
      expect(get("bar")({ foo: 1 })).toBeInstanceOf(Nothing);
      expect(get(null as any)({ foo: 1 })).toBeInstanceOf(Nothing);
      expect(get("foo")(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("assoc()", () => {
    it("associates values", () => {
      expect(assoc("bar")(2)({ foo: 1 }).getValue()).toEqual({ foo: 1, bar: 2 });
    });
  });

  describe("assocIn()", () => {
    it("associates values", () => {
      expect(assocIn(["foo", "bar"])(2)({}).getValue()).toEqual({ foo: { bar: 2 } });
    });
  });

  describe("dissoc()", () => {
    it("dissociates values", () => {
      expect(dissoc("foo")({ foo: 1, bar: 2 }).getValue()).toEqual({ bar: 2 });
    });
  });

  describe("update", () => {
    it("safely updates values", () => {
      expect(update<number, number>("foo")((x: number) => x + 1)({ foo: 1 }).getValue()).toEqual({
        foo: 2,
      });
    });
  });

  describe("updateIn", () => {
    it("safely updates values", () => {
      expect(
        updateIn<number, number>(["foo", "bar"])((x: number) => x + 1)({
          foo: { bar: 1 },
          baz: 2,
        }).getValue()
      ).toEqual({
        foo: { bar: 2 },
        baz: 2,
      });
    });
  });

  describe("keys()", () => {
    it("safely gets object keys", () => {
      expect(keys({ foo: 1, bar: 2 }).getValue()).toEqual(["foo", "bar"]);
      expect(keys([1, 2, 3]).getValue()).toEqual(["0", "1", "2"]);
      expect(keys({})).toBeInstanceOf(Nothing);

      expect(keys(1 as any)).toBeInstanceOf(Nothing);
      expect(keys(null as any)).toBeInstanceOf(Nothing);
      expect(keys("test" as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("values()", () => {
    it("safely gets object values", () => {
      expect(values({ foo: 1, bar: 2 }).getValue()).toEqual([1, 2]);
      expect(values([1, 2, 3]).getValue()).toEqual([1, 2, 3]);
      expect(values({})).toBeInstanceOf(Nothing);

      expect(values(1 as any)).toBeInstanceOf(Nothing);
      expect(values(null as any)).toBeInstanceOf(Nothing);
      expect(values("test" as any)).toBeInstanceOf(Nothing);
    });
  });

  const toUpper = (input: string) => input.toUpperCase();
  describe("mapKeys()", () => {
    it("safely maps over object keys", () => {
      const obj = { foo: 1, bar: "hello" };

      expect(mapKeys(toUpper)(obj).getValue()).toEqual({ FOO: 1, BAR: "hello" });
      expect(mapKeys(toUpper)({})).toEqual({});

      expect(mapKeys(toUpper)([1, 2, 3])).toBeInstanceOf(Nothing);
      expect(mapKeys(toUpper)(null as any)).toBeInstanceOf(Nothing);
      expect(mapKeys(null as any)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("reduceKV()", () => {
    it("reduces over keys and values", () => {
      const reducer = (accum: Dictionary, key: string, value: number) => {
        accum[key + "Double"] = 2 * value;
        return accum;
      };

      expect(reduceKV(reducer)({})({ foo: 1, bar: 3 }).getValue()).toEqual({
        fooDouble: 2,
        barDouble: 6,
      });
    });
  });

  describe("mapValues", () => {
    it("safely maps values", () => {
      expect(mapValues(toUpper)({ foo: "bar", baz: "foobar" }).getValue()).toEqual({
        foo: "BAR",
        baz: "FOOBAR",
      });

      expect(mapValues(toUpper)({ foo: "bar", baz: 1 }).getValue()).toEqual({ foo: "BAR", baz: 1 });

      expect(mapValues(toUpper)({})).toBeInstanceOf(Nothing);
      expect(mapValues(toUpper)(null as any)).toBeInstanceOf(Nothing);
      expect(mapValues(null as any)({ foo: "bar" })).toBeInstanceOf(Nothing);
      expect(mapValues(null as any)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("mapFilterValues", () => {
    it("safely maps values", () => {
      expect(mapFilterValues(toUpper)({ foo: "bar", baz: "foobar" }).getValue()).toEqual({
        foo: "BAR",
        baz: "FOOBAR",
      });

      expect(mapFilterValues(toUpper)({ foo: "bar", baz: 1 }).getValue()).toEqual({
        foo: "BAR",
      });

      expect(mapFilterValues(toUpper)({})).toBeInstanceOf(Nothing);
      expect(mapFilterValues(toUpper)(null as any)).toBeInstanceOf(Nothing);
      expect(mapFilterValues(null as any)({ foo: "bar" })).toBeInstanceOf(Nothing);
      expect(mapFilterValues(null as any)(null as any)).toBeInstanceOf(Nothing);
    });
  });

  describe("pickBy()", () => {
    it("safely picks object keys", () => {
      const obj = { foo: 1, bar: 2, foobar: 3 };
      expect(pickBy((key) => key.length === 3)(obj).getValue()).toEqual({ foo: 1, bar: 2 });
    });
  });

  describe("fromPairs()", () => {
    it("creates objects from pairs", () => {
      expect(
        fromPairs([
          ["foo", 1],
          ["bar", 2],
        ]).getValue()
      ).toEqual({ foo: 1, bar: 2 });

      expect(fromPairs([])).toBeInstanceOf(Nothing);
      expect(fromPairs([["foo"], ["bar", 1]]).getValue()).toEqual({ bar: 1 });
      expect(fromPairs([["foo"], ["bar", 1], ["baz", 2, 3]]).getValue()).toEqual({
        bar: 1,
        baz: 2,
      });
    });
  });

  describe("toPairs()", () => {
    it("creates key-value pairs from objects", () => {
      expect(toPairs({ foo: 1, bar: 2 }).getValue()).toEqual([
        ["foo", 1],
        ["bar", 2],
      ]);
      expect(toPairs({})).toBeInstanceOf(Nothing);
    });
  });

  describe("pick()", () => {
    expect(pick(["foo", "bar"])({ foo: 1, bar: 2, baz: 3 }).getValue()).toEqual({ foo: 1, bar: 2 });
  });
  describe("pickValuesBy()", () => {
    const pred = (x: number) => x > 1;
    expect(pickValuesBy(pred)({ foo: 1, bar: 2 }).getValue()).toEqual({ bar: 2 });
  });
});
