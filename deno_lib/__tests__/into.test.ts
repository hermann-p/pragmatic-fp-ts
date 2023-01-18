import { into } from "../main.ts";

describe("into()", () => {
  it("aggregates arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    expect(into(arr1, arr2)).toEqual(expected);
  });

  it("aggregates objects", () => {
    const obj1 = { foo: "foo", bar: "bar" };
    const list: [string, string][] = [
      ["monty", "python"],
      ["flying", "circus"],
    ];

    expect(into(obj1, list)).toEqual({
      foo: "foo",
      bar: "bar",
      monty: "python",
      flying: "circus",
    });
  });
});
