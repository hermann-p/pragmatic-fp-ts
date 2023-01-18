import { inc, updateIn } from "../main.ts";

describe("updateIn()", () => {
  it("updates", () => {
    const input = { foo: { bar: 1 } };
    const expected = { foo: { bar: 2 } };

    expect(updateIn(["foo", "bar"])(inc)(input)).toEqual(expected);
  });

  it("updates in nested arrays", () => {
    const input = { foo: [1, 2, 3] };
    const expected = { foo: [1, 3, 3] };
    expect(updateIn(["foo", 1])(inc)(input)).toEqual(expected);
  });
});
