import { mean, median } from "../main";

describe("statistics", () => {
  it("calculates the mean", () => {
    expect(mean([1, 2, 3])).toBe(2);
    expect(mean([1, 2, 3, 4, 5, 6, 7])).toBe(4);
  });

  it("calculates the median", () => {
    expect(median([-1, 1, -2, 2, 0])).toBe(0);
    expect(median([-1, 1, -2, 2])).toBe(0);
    expect(isNaN(median([]))).toBe(true);
  });
});
