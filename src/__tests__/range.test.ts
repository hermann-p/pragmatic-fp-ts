import { range } from "../main";

describe("range", () => {
  it("creates ascending ranges", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(3, 6)).toEqual([3, 4, 5]);
    expect(range(3, 3)).toEqual([]);
  });

  it("creates descending ranges", () => {
    expect(range(5, 0)).toEqual([5, 4, 3, 2, 1]);
    expect(range(6, 3)).toEqual([6, 5, 4]);
  });
});
