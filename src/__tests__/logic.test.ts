import { somePass, equals, eqShallow } from "../logic";
import { maybe } from "../Maybe";

describe("logic", () => {
  const gt2 = (x: number) => x > 2;
  const even = (x: number) => x % 2 === 0;
  const preds = [gt2, even];

  describe("somePass()", () => {
    it("behaves well", () => {
      expect(somePass(preds)(1)).toBe(false);
      expect(somePass(preds)(2)).toBe(true);
      expect(somePass(preds)(3)).toBe(true);

      expect(somePass(preds)(undefined as any)).toBe(false);
      expect(somePass(null as any)(null as any)).toBe(false);
    });
  });

  describe("some()", () => {});

  describe("equals()", () => {
    it("performs a safe deep comparison", () => {
      expect(equals(1)(1)).toBe(true);
      expect(equals("foo")("foo")).toBe(true);
      expect(equals({ foo: 1 })({ foo: 1 })).toBe(true);
      expect(equals(maybe(1))(1)).toBe(true);
      expect(equals("foo")(maybe("foo"))).toBe(true);
      expect(equals({ foo: 1 })({ foo: 1 })).toBe(true);

      expect(equals(1)(2)).toBe(false);
      expect(equals("foo")("fox")).toBe(false);
      expect(equals({ foo: 1 })({ foo: 2 })).toBe(false);

      expect(equals(0)(null)).toBe(false);
      expect(equals(null)(null)).toBe(true);
      expect(equals(maybe(null))(null)).toBe(false);
    });
  });

  describe("eqShallow()", () => {
    it("performs a safe shallow comparison", () => {
      expect(eqShallow(1)(1)).toBe(true);
      expect(eqShallow("foo")("foo")).toBe(true);
      expect(eqShallow({ foo: 1 })({ foo: 1 })).toBe(false);
      expect(eqShallow(maybe(1))(1)).toBe(true);
      expect(eqShallow("foo")(maybe("foo"))).toBe(true);
      expect(eqShallow({ foo: 1 })({ foo: 1 })).toBe(false);

      expect(eqShallow(1)(2)).toBe(false);
      expect(eqShallow("foo")("fox")).toBe(false);
      expect(eqShallow({ foo: 1 })({ foo: 2 })).toBe(false);

      expect(eqShallow(0)(null)).toBe(false);
      expect(eqShallow(null)(null)).toBe(true);
      expect(eqShallow(maybe(null))(null)).toBe(false);
    });
  });
});
