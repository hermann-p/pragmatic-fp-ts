import { inc, update } from "../main";

describe("update()", () => {
  it("updates dicts", () => {
    const input = { foo: 1 };
    const expected = { foo: 2 };

    expect(update("foo")(inc)(input)).toEqual(expected);
  });

  it("updates arrays", () => {
    const input = [1, 2, 3];
    const expected = [1, 3, 3];
    expect(update(1)(inc)(input)).toEqual(expected);
  });
});
