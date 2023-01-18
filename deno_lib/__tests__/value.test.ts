import { values } from "../values.ts";

describe("values()", () => {
  it("should extract values from an object", () => {
    const o = { foo: 1, bar: 2, baz: 3 };
    expect(values(o)).toEqual([1, 2, 3]);
  });

  it("should extract values from a set", () => {
    const s = new Set<number>().add(1).add(2).add(3);
    expect(values(s)).toEqual([1, 2, 3]);
  });

  it("should extract values from a map", () => {
    const m = new Map<string, number>().set("foo", 1).set("bar", 2).set("baz", 3);
    expect(values(m)).toEqual([1, 2, 3]);
  });
});
