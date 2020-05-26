import { repeat } from "../main";

describe("repeat", () => {
  it("repeats things", () => {
    expect(repeat("ho")(3)).toEqual(["ho", "ho", "ho"]);
  });
});
