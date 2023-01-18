import { subtract, subtractFrom } from "../subtract.ts";

describe("subtraction", () => {
  it("subtract()", () => {
    expect(subtract(5)(7)).toBe(2);
  });
  it("sustractFrom()", () => {
    expect(subtractFrom(7)(5)).toBe(2);
  });
});
