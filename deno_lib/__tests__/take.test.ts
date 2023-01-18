import { take, takeWhile, takeRight, takeRightWhile, lt, gt } from "../main.ts";

describe("take", () => {
  it("take", () => {
    expect(take(3)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
  });

  it("takeWhile()", () => {
    expect(takeWhile(lt(4))([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
  });

  it("takeRight()", () => {
    expect(takeRight(3)([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4]);
    expect(takeRight(10, [1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("takeRightWhile()", () => {
    expect(takeRightWhile(gt(3))([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4]);
  });
});
