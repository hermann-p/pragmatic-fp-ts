import { mod } from "../main.ts";

describe("mod()", () => {
  it("calculates the module", () => {
    expect(mod(4, 1)).toBe(1);
    expect(mod(2)(81191)).toBe(1);
  });

  it("calculates the negative module", () => {
    expect(mod(2)(-1)).toBe(1);
    expect(mod(2)(-2)).toBe(0);
    expect(mod(4)(-37)).toBe(3);
  });
});
