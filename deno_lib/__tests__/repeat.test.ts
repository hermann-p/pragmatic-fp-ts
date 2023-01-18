import { repeat } from "../main.ts";

describe("repeat", () => {
  it("repeats things", () => {
    expect(repeat("ho")(3)).toEqual(["ho", "ho", "ho"]);
  });
});
