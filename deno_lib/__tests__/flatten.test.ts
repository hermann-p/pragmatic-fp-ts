import { flatten } from "../main.ts";

describe("flatten", () => {
  it("flattens arrays", () => {
    const nestedArray = [1, 2, [3, 4], 5, [6, 7, 8], [9, 10, 11, 12]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(flatten<number>(nestedArray)).toEqual(expected);
  });
});
