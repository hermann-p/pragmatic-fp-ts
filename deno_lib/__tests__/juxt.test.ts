import { juxt, min, max } from "../main.ts";

describe("juxt()", () => {
  it("juxtaposes fns over values", () => {
    expect(juxt([min, max])([5, -3, 9, -1, 7])).toEqual([-3, 9]);
  });
});
