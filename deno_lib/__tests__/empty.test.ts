import { chain, Chain, empty, just, nothing, Nothing } from "../main.ts";

describe("empty()", () => {
  it("creates empty strings", () => {
    expect(empty("foo")).toEqual("");
    expect(empty("")).toEqual("");
  });

  it("creates empty arrays", () => {
    expect(empty([1, 2, 3])).toEqual([]);
    expect(empty([])).toEqual([]);
  });

  it("creates empty maybes", () => {
    expect(empty(just(1))).toBeInstanceOf(Nothing);
    expect(empty(nothing())).toBeInstanceOf(Nothing);
  });

  it("creates empty chain", () => {
    expect(empty(chain(1))).toBeInstanceOf(Chain);
    expect(empty(chain(1)).getValue()).toBe(null);
  });

  it("creates empty objects", () => {
    expect(empty({ foo: "bar" })).toEqual({});
    expect(empty({})).toEqual({});
  });

  it("uses objects' fantasy-land empty constructor", () => {
    expect(empty({ empty: () => "empty" })).toEqual("empty");
  });

  it("empties everything else to `null`", () => {
    expect(empty(1)).toBe(null);
    expect(empty(true)).toBe(null);
    expect(empty(false)).toBe(null);
    expect(empty(undefined)).toBe(null);
    expect(empty((x: any) => x)(19)).toBe(undefined);
  });
});
