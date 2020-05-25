import { assoc, assocIn } from "../main";

describe("assoc()", () => {
  it("associates in arrays", () => {
    const input = [1, 2, 3];
    const expected = [1, 4, 3];

    expect(assoc(1)(4)(input)).toEqual(expected);
  });

  it("associates in dicts", () => {
    const input = { foo: 1 };
    const expected = { foo: 1, bar: 2 };

    expect(assoc("bar")(2)(input)).toEqual(expected);
  });
});

describe("assocIn()", () => {
  it("associates deep", () => {
    expect(assocIn(["foo", "baz"])(3)({ foo: { bar: 2 } })).toEqual({
      foo: { bar: 2, baz: 3 },
    });

    expect(assocIn([0, "foo", "bar"])(1)([{ foo: {} }])).toEqual([
      { foo: { bar: 1 } },
    ]);
  });
});
