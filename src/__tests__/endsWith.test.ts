import { endsWith } from "../main";

describe("endsWith()", () => {
  it("works for strings", () => {
    expect(endsWith("ar")("foobar")).toBe(true);
    expect(endsWith("foor", "foobar")).toBe(false);
  });

  it("works for arrays", () => {
    expect(endsWith(1)([3, 2, 1])).toBe(true);
    expect(endsWith(1, [1, 2, 3])).toBe(false);
  });

  it("works for longer tails", () => {
    expect(endsWith([2, 1])([3, 2, 1])).toBe(true);
    expect(endsWith([2, 1], [1, 2, 3])).toBe(false);
    expect(endsWith([], [1, 2, 3])).toBe(true);
  });
});
