import { range, repeat, scan, add } from "../main";

describe("scan", () => {
  it("folds while keeping interim results", () => {
    const input = repeat(1, 5);
    const expected = range(1, 6);

    expect(scan(add)(0)(input)).toEqual(expected);
  });
});
