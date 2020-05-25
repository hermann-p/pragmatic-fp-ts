import { symDiff } from "../main";

describe("symmetricDifference()", () => {
  it("behaves well", () => {
    expect(symDiff([1, 2, 3, 4])([7, 6, 5, 4, 3])).toEqual([1, 2, 7, 6, 5]);
  });
});
