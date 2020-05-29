import { replace, toUpper } from "../main";

describe("replace()", () => {
  it("replaces strings with strings", () => {
    expect(replace("a")("o")("banana")).toEqual("bonana");
  });
  it("replaces strings by applying functions", () => {
    expect(replace("a")(toUpper)("banana")).toEqual("bAnana");
  });
  it("replaces regex with strings", () => {
    expect(replace(/a/g)("o")("banana")).toEqual("bonono");
  });
  it("replaces regex with functions", () => {
    expect(replace(/a/g)(toUpper)("banana")).toEqual("bAnAnA");
  });
});
