import { concat } from "../main";

describe("concat()", () => {
  it("concatenates arrays", () => {
    const arrA = [1, 2, 3];
    const arrB = [4, 5, 6];
    expect(concat(arrA, arrB)).toEqual(arrA.concat(arrB));
  });

  it("concatenates strings", () => {
    const a = "foo";
    const b = "bar";
    expect(concat(a, b)).toEqual(a.concat(b));
  });

  it("handles nil values", () => {
    expect(concat("foo", null as any)).toEqual("foo");
    expect(concat(null as any, "bar")).toEqual("bar");
    expect(concat([1, 2], null as any)).toEqual([1, 2]);
    expect(concat(null as any, [1, 2, 3])).toEqual([1, 2, 3]);
  });
});
