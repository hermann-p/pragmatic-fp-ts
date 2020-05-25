import { insert } from "../main";

describe("insert()", () => {
  it("inserts elements at given array positions", () => {
    expect(insert(2, 3, [1, 2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("inserts into empty arrays", () => {
    expect(insert(4, 1, [])).toEqual([1]);
  });
});
