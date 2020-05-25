import { insertAll } from "../main";

describe("insertAll()", () => {
  it("inserts elements at given array positions", () => {
    expect(insertAll(2, [3, 4], [1, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("inserts into empty arrays", () => {
    expect(insertAll(4, [1, 2], [])).toEqual([1, 2]);
  });
});
