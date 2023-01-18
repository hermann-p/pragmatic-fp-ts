import { intersects } from "../main.ts";

describe("intersects()", () => {
  const arrA = [1, 2, 3];
  const arrB = [4, 5, 6];
  const arrC = [3, 4, 5];

  it("should find non-intersections", () => {
    expect(intersects(arrA)(arrB)).toBe(false);
  });

  it("should find intersections", () => {
    expect(intersects(arrA, arrC)).toBe(true);
  });
});
