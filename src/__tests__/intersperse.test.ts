import { intersperse } from "../main";

describe("intersperse()", () => {
  it("intersperses collections", () => {
    expect(intersperse("a", ["b", "n", "n", "s"]).join("")).toEqual("bananas");
  });

  it("handles corner cases", () => {
    expect(intersperse("a", ["b"])).toEqual(["b"]);
    expect(intersperse("a", [])).toEqual([]);
  });
});
