import { chain, getValue, maybe } from "../main";
import { nothing } from "../Maybe";

describe("getValueOr()", () => {
  it("returns simple values", () => {
    expect(getValue(2)).toBe(2);
  });

  it("returns values from monads", () => {
    expect(getValue(chain(2))).toBe(2);
    expect(getValue(maybe(2))).toBe(2);
    expect(getValue(maybe(2)._(() => null as any))).toBe(null);
    expect(getValue(nothing())).toBe(null);
  });
});
