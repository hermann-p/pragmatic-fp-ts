import { sum } from "../main";

describe("sum", () => {
  it("sums arrays", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
