import { intersectsBy, get } from "../main.ts";

describe("intersectsBy()", () => {
  const arrA = [
    { key: 1, val: 2 },
    { key: 2, val: 3 },
  ];
  const arrB = [
    { key: 3, val: 4 },
    { key: 4, val: 5 },
  ];
  const arrC = [
    { key: 2, val: 11 },
    { key: 3, val: 22 },
  ];

  it("should find non-intersections", () => {
    expect(intersectsBy(get("key"))(arrA)(arrB)).toBe(false);
  });

  it("should find intersections", () => {
    expect(intersectsBy(get("key"), arrA, arrC)).toBe(true);
  });
});
