import { times, identity } from "../main.ts";

describe("times", () => {
  it("repeats functions as told", () => {
    expect(times(5)(identity)).toEqual([0, 1, 2, 3, 4]);
  });
});
