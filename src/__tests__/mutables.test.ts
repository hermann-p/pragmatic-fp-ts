import { MutableArray, MutableObject, MutablePrimitive } from "../Mutable";

describe("mutable values", () => {
  describe("MutableArray()", () => {
    it("should mutate arrays, leaving the originals alone", () => {
      const coll = [1, 2, 3];
      const collM = MutableArray(coll);

      collM.change((arr) => arr.push(4));

      expect(coll).toEqual([1, 2, 3]);
      expect(collM.value()).toEqual([1, 2, 3, 4]);
    });

    it("should allow successive changes of an array", () => {
      const collM = MutableArray([1, 2, 3]);
      collM.change((arr) => (arr[4] = 1));
      collM.change((arr) => arr.push(15));
      collM.set([3, 2, 1]);
      expect(collM.value()).toEqual([3, 2, 1]);
    });

    it("should not allow modifying observed arrays", () => {
      const collM = MutableArray([1, 2, 3]);
      expect(collM.value()).toEqual([1, 2, 3]);
      expect(() => collM.change((arr) => arr.push(4))).toThrowError();
    });

    it("should allow multiple observations of the same array", () => {
      const collM = MutableArray([1, 2, 3]);
      expect(collM.value()).toEqual([1, 2, 3]);
      expect(collM.value()).toEqual([1, 2, 3]);
      expect(collM.value()).toEqual([1, 2, 3]);
    });
  });

  describe("MutablePrimitive()", () => {
    it("should allow resetting values", () => {
      const n = MutablePrimitive(1);
      n.set(5);
      expect(n.value()).toBe(5);
    });
    it("should allow updating values", () => {
      const n = MutablePrimitive(1);
      n.update((n) => n + 4);
      expect(n.value()).toBe(5);
    });
    test("primitives can not be mutated directly", () => {
      const n = MutablePrimitive(1);
      n.change((m) => !m);
      expect(n.value()).toBe(1);
    });
  });

  describe("MutableObject()", () => {
    it("should allow modifying fields", () => {
      const o = MutableObject({ foo: 1 });
      o.change((oo) => ((oo as any).bar = 2));
      expect(o.value()).toEqual({ foo: 1, bar: 2 });
    });
  });
});
