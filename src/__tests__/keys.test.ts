import { keys } from "../keys";

describe("keys()", () => {
  it("should get keys from an object", () => {
    expect(keys({ foo: 1, bar: 2 })).toEqual(["foo", "bar"]);
  });
  it("should get keys from a map", () => {
    const m = new Map<string, number>().set("foo", 1).set("bar", 2);
    expect(keys(m)).toEqual(["foo", "bar"]);
  });
});
