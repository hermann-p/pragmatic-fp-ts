import { splitAt, splitEvery, splitWhen, gt } from "../main.ts";

describe("splitAt", () => {
  it("splits", () => {
    const split1 = splitAt(3)("foobar");
    const split2 = splitAt(3)([1, 2, 3, 4, 5, 6]);
    expect(split1).toEqual(["foo", "bar"]);
    expect(split2).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(splitAt(2, "")).toEqual(["", ""]);
    expect(splitAt(2, [])).toEqual([[], []]);
    expect(splitAt(2, null as any)).toEqual([[], []]);
    expect(() => splitAt(2, 5 as any)).toThrow();
  });
});

describe("splitEvery()", () => {
  it("splits arrays", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    const split1 = splitEvery(2, input);
    expect(split1).toEqual(expected);

    const split = splitEvery(2)(input);
    expect(split).toEqual(expected);
  });

  it("splits strings", () => {
    const input = "foobarbaz";
    const expected = ["foo", "bar", "baz"];

    const split1 = splitEvery(3, input);
    expect(split1).toEqual(expected);

    const split = splitEvery(3)(input);
    expect(split).toEqual(expected);
  });
});

describe("splitWhen", () => {
  it("splits correctly", () => {
    const input = [0, 1, 2, 3, 4, 5];
    const expected = [
      [0, 1, 2],
      [3, 4, 5],
    ];

    expect(splitWhen(gt(2))(input)).toEqual(expected);
    expect(splitWhen(gt(7), input)).toEqual([input, []]);
  });
});
