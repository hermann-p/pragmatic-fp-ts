import { isArray, isSeq } from "../main.ts";

describe("sequence tests", () => {
  describe("isArray()", () => {
    it("should detect arrays", () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2])).toBe(true);
    });

    it("should detect non-arrays", () => {
      expect(isArray(true)).toBe(false);
      expect(isArray(1)).toBe(false);
      expect(isArray("string")).toBe(false);
      expect(isArray({})).toBe(false);
      expect(isArray(new Date())).toBe(false);
    });
  });

  describe("isSeq()", () => {
    it("should detect sets", () => {
      expect(isSeq(new Set())).toBe(true);
    });
    it("should detect maps", () => {
      expect(isSeq(new Map())).toBe(true);
    });
    it("should detect arrays", () => {
      expect(isSeq([])).toBe(true);
    });
    it("should detect objects", () => {
      expect(isSeq({})).toBe(true);
    });

    it("should detect non-sequables", () => {
      expect(isSeq(1)).toBe(false);
      expect(isSeq(null)).toBe(false);
      expect(isSeq(undefined)).toBe(false);
      expect(isSeq(Symbol(1))).toBe(false);
      expect(isSeq(true)).toBe(false);
      expect(isSeq(false)).toBe(false);
    });
  });
});
