import { lte, pick, pickBy } from "../main.ts";

describe("pick()", () => {
  it("picks props", () => {
    const input = { foo: 1, bar: 2, baz: 3 };
    const expected = { foo: 1, baz: 3 };

    expect(pick(["foo", "baz"], input)).toEqual(expected);
  });
});

describe("pickBy()", () => {
  it("picks props", () => {
    const input = { foo: 1, bar: 2, baz: 3 };
    const expected = { foo: 1, bar: 2 };

    expect(pickBy(lte(2), input)).toEqual(expected);
  });
});
