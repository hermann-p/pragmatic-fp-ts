import { isEmpty } from "../predicates";

describe("predicates", () => {
  describe("isEmpty()", () => {
    it("does as expected", () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty("")).toBe(true);

      expect(isEmpty("foo")).toBe(false);
      expect(isEmpty(["foo"])).toBe(false);
      expect(isEmpty({ foo: 1 })).toBe(false);
      expect(isEmpty(1)).toBe(false);
      expect(isEmpty(null as any)).toBe(false);
      expect(isEmpty(undefined as any)).toBe(false);
    });
  });
});
