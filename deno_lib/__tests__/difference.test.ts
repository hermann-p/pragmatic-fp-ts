import { difference, differenceWith, identity } from "../main.ts";

describe("difference()", () => {
  it("should find set difference of primitives", () => {
    expect(difference([1, 2, 3, 4])([2, 4, 5, 6])).toEqual([1, 3]);
  });
  it("should find set differences of strings", () => {
    expect(difference(["foo", "bar", "baz"])(["foo", "di", "doo"])).toEqual(["bar", "baz"]);
  });
  it("will not find object differences", () => {
    expect(
      difference([{ foo: 1 }, { foo: 3 }, { foo: 4 }])([{ foo: 1 }, { foo: 2 }, { foo: 3 }])
    ).toEqual([{ foo: 1 }, { foo: 3 }, { foo: 4 }]);
  });

  describe("differenceWith()", () => {
    it("should find set difference of primitives", () => {
      expect(differenceWith(identity)([1, 2, 3, 4])([2, 4, 5, 6])).toEqual([1, 3]);
    });
    it("should find set differences of strings", () => {
      expect(differenceWith(identity)(["foo", "bar", "baz"])(["foo", "di", "doo"])).toEqual([
        "bar",
        "baz",
      ]);
    });
    it("should find object differences", () => {
      expect(
        differenceWith(({ foo }: any) => foo)([{ foo: 1 }, { foo: 3 }, { foo: 4 }])([
          { foo: 1 },
          { foo: 2 },
          { foo: 3 },
        ])
      ).toEqual([{ foo: 4 }]);
    });
  });
});
