import { Dictionary } from "../types";
import { Nothing } from "../Maybe";
import {
  get,
  keys,
  mapFilterValues,
  mapKeys,
  mapValues,
  pickBy
} from '../object';

describe("object", () => {
  describe("get()()", () => {
    const obj = { foo: 1, bar: { baz: 2, great: [4, 5, 6] } };

    it("gets values", () => {
      expect(get(["foo"])(obj).isJust()).toBe(true);
      expect(get(["foo"])(obj).getValue()).toBe(1);
      expect(get(["bar", "baz"])(obj).getValue()).toBe(2);
      expect(get([1])([7, 8, 9]).getValue()).toBe(8);
      expect(get(["bar", "great", 2])(obj).getValue()).toBe(6);
    });

    it("does not throw on invalid paths", () => {
      expect(get(["baz"])(obj).isNothing()).toBe(true);
      expect(get(["some", "invalid", "path"])(obj).isNothing()).toBe(true);
    });

    it("is nil safe", () => {
      expect(get((null as any) as Array<number>)(obj).isNothing()).toBe(true);
      expect(get(["foo"])((null as any) as Dictionary).isNothing()).toBe(true);
      expect(get((null as any) as Array<number>)((null as any) as Dictionary).isNothing()).toBe(
        true
      );
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
});
