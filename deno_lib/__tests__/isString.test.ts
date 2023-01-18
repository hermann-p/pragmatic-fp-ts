import { isString } from "../isString.ts";

describe("isString()", () => {
  it("should detect strings", () => {
    expect(isString("")).toBe(true);
    expect(isString("text")).toBe(true);
  });

  it("should detect non-strings", () => {
    expect(isString(true)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(new Date())).toBe(false);
  });
});
