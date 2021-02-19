import { rest } from "../rest";

describe("rest()", () => {
  it("should retrieve the rest of an array", () => {
    expect(rest([])).toEqual([]);
    expect(rest([1])).toEqual([]);
    expect(rest([1, 2, 3])).toEqual([1, 2]);
  });
});
