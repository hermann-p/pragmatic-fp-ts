import { mapIndexed } from "../main";

describe("mapIndexed()", () => {
  const fn = (value: number, idx: number | string) => `${value + 1}-${idx}`;

  it("maps over arrays", () => {
    const input = [0, 1, 2, 3];
    const expected = ["1-0", "2-1", "3-2", "4-3"];
    expect(mapIndexed(fn, input)).toEqual(expected);
  });

  it("maps over objects", () => {
    const input = { foo: 1, bar: 2, baz: 3 };
    const expected = { foo: "2-foo", bar: "3-bar", baz: "4-baz" };
    expect(mapIndexed(fn, input)).toEqual(expected);
  });
});
