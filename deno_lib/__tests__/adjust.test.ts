import { adjust, inc } from "../main.ts";

describe("adjust", () => {
  it("adjusts given array item", () => {
    const input = [1, 2, 3];
    const expected = [1, 3, 3];

    expect(adjust(1)(inc)(input)).toEqual(expected);
  });
});
