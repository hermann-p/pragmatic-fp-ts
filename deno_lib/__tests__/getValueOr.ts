import { chain, getValueOr } from "../main.ts";

describe("getValueOr()", () => {
  it("returns simple values", () => {
    expect(getValueOr(1)(2)).toBe(2);
    expect(getValueOr(1, 2)).toBe(2);
    expect(getValueOr(1)(0)).toBe(0);
    expect(getValueOr(1, 0)).toBe(0);
    expect(getValueOr(1, null)).toBe(1);
  });

  it("returns values from monads", () => {
    expect(getValueOr(1)(chain(2))).toBe(2);
    expect(getValueOr(1, chain(2))).toBe(2);
    expect(getValueOr(1)(chain(0))).toBe(1);
    expect(getValueOr(1, chain(0))).toBe(1);
  });
});
