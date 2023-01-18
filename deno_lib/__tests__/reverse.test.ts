import { reverse } from "../reverse.ts";

describe("reverse()", () => {
  it("should reverse strings", () => {
    expect(reverse("foobar")).toEqual("raboof");
  });
  it("should reverse arrays", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
