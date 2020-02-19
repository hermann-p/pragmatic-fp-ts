import * as t from "../tools";
import { Nothing } from "../Maybe";

describe("tools", () => {
  describe("toNumber()", () => {
    it("reads numeric strings and numbers", () => {
      expect(t.toNumber("123").getValue()).toBe(123);
      expect(t.toNumber(123).getValue()).toBe(123);
      expect(t.toNumber("123.45").getValue()).toBe(123.45);
      expect(t.toNumber(123.45).getValue()).toBe(123.45);
    });

    it("returns Nothing when it can't parse its input", () => {
      expect(t.toNumber("one")).toBeInstanceOf(Nothing);
    });
  });

  describe("toInteger()", () => {
    it("reads numeric strings and numbers", () => {
      expect(t.toInteger("123").getValue()).toBe(123);
      expect(t.toInteger(123).getValue()).toBe(123);
      expect(t.toInteger("123.45").getValue()).toBe(123);
      expect(t.toInteger(123.45).getValue()).toBe(123);
    });

    it("returns Nothing when it can't parse its input", () => {
      expect(t.toInteger("one")).toBeInstanceOf(Nothing);
    });
  });

  describe("tap()", () => {
    it("does not effect its input value", () => {
      expect(t.tap<number>((x) => x + 1)(2)).toBe(2);
      expect(t.spy<number>()(2)).toBe(2);
    });
  });
});
