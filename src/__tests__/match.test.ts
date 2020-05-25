import { match } from "../main";

describe("match()", () => {
  it("delivers matches", () => {
    expect(match(/foo/)("I am foofoo")).toEqual(["foo"]);
    expect(match(/foo/g)("I am foofoo")).toEqual(["foo", "foo"]);
    expect(match("foo")("foo bar")).toEqual(["foo"]);
  });
});
