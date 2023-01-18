import { intersection } from "../main.ts";

describe("intersection()", () => {
  it("creates mathematically correct intersections", () => {
    expect(intersection([1, 2, 3, 4, 5], [2, 4, 6, 8])).toEqual([2, 4]);
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });
});
