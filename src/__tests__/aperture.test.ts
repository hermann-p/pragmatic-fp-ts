import { aperture } from "../main";

describe("aperture", () => {
  it("splits up arrays", () => {
    expect(aperture(2, [1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);

    expect(aperture(3, [1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ]);
    expect(aperture(3, [1, 2, 3])).toEqual([[1, 2, 3]]);
  });

  it("is curried", () => {
    expect(aperture(2)([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);

    expect(aperture(3)([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ]);
    expect(aperture(3)([1, 2, 3])).toEqual([[1, 2, 3]]);
  });

  it("treats error cases correctly", () => {
    expect(aperture(4, [1, 2, 3])).toEqual([]);
    expect(aperture(-1, [1, 2, 3])).toEqual([]);
    expect(aperture(0, [1, 2, 3])).toEqual([]);
  });
});
