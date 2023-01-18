import { assoc, assocIn, chain } from "../main.ts";
import { mkDataList } from "./helpers.ts";
import { performance } from "https://deno.land/std@0.173.0/node/perf_hooks.ts";

describe("assoc()", () => {
  it("associates in arrays", () => {
    const input = [1, 2, 3];
    const expected = [1, 4, 3];

    expect(assoc(1)(4)(input)).toEqual(expected);
  });

  it("associates in dicts", () => {
    const input = { foo: 1 };
    const expected = { foo: 1, bar: 2 };

    expect(assoc("bar")(2)(input)).toEqual(expected);
  });

  it("is nil safe", () => {
    expect(assoc("foo", 1, null as any)).toEqual({ foo: 1 });
    expect(assoc(0, 1, null as any)).toEqual([1]);
  });
});

describe("assocIn()", () => {
  it("associates objects deep", () => {
    expect(assocIn(["foo", "baz"])(3)({ foo: { bar: 2 } })).toEqual({
      foo: { bar: 2, baz: 3 },
    });

    expect(assocIn([], 1, { foo: 1 })).toEqual({ foo: 1 });
  });

  it("should associate deep within arrays", () => {
    expect(
      assocIn([0, 1], "bam", [
        ["foo", "bar", "baz"],
        [1, 2, 3],
      ])
    ).toEqual([
      ["foo", "bam", "baz"],
      [1, 2, 3],
    ]);
  });

  it("should associate deep within mixed array-object paths", () => {
    expect(assocIn([0, "foo", "bar"])(1)([{ foo: {} }])).toEqual([{ foo: { bar: 1 } }]);
  });

  it("is nil safe", () => {
    expect(assocIn([0, "foo", "bar"], 1, [])).toEqual([{ foo: { bar: 1 } }]);
    expect(assocIn([0, 0, "foo", "bar"], 1, [])).toEqual([[{ foo: { bar: 1 } }]]);
    expect(assocIn(["foo", 0, "foo", "bar"], 1, null as any)).toEqual({
      foo: [{ foo: { bar: 1 } }],
    });
  });

  describe("performance", () => {
    const lotsOfData = mkDataList(4000, 71, 20);
    const idces = [1872, 2682, 3428, 4172];
    const keyName = "i-am-a-new-key";
    const value = "here is some value";
    it("should be reasonably fast with big data structures", () => {
      // prior versions were extremely slow here due to conversions (~7000ms in browser)
      const start = performance.now();
      const modified = chain(lotsOfData)
        ._(assocIn([idces[0], keyName], value))
        ._(assocIn([idces[1], keyName], value))
        ._(assocIn([idces[2], keyName], value))
        ._(assocIn([idces[3], keyName], value))
        .getValue();

      expect(performance.now() - start).toBeLessThan(20); // allow more time for jest bootup, runs 99% of times when set to < 1ms
      idces.forEach((idx) => expect(modified[idx][keyName]).toEqual(value));
    });
  });
});
