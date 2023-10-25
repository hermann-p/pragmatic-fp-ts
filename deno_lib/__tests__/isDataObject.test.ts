import { isDataObject } from "../isDataObject.ts";

describe("isDataObject()", () => {
  it("should identify data objects", () => {
    expect(isDataObject({})).toBe(true);
    expect(isDataObject({ foo: 1, bar: "two" })).toBe(true);
    expect(isDataObject({ arr: [1, 2, 3] })).toBe(true);
  });
  it("should reject arrays", () => {
    expect(isDataObject([])).toBe(false);
  });
  it("should reject objects with methods", () => {
    expect(isDataObject({ foo: () => null })).toBe(false);
  });
  it("should reject primitives", () => {
    expect(isDataObject(1)).toBe(false);
    expect(isDataObject(null)).toBe(false);
  });
});
