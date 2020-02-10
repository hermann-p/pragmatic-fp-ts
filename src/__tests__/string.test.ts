import * as s from "../string";

describe("string", () => {
  describe("replace()", () => {
    it("replaces matches with string", () => {
      expect(
        s
          .replace("bar")("foo")("foobar")
          .getValue()
      ).toEqual("foofoo");
    });

    it("replaces matches with function", () => {
      expect(
        s
          .replace("foo")((str: string) => str.toUpperCase())("foobar")
          .getValue()
      ).toEqual("FOObar");
    });
  });

  describe("test()", () => {
    it("finds patterns in strings", () => {
      expect(s.test(/f.*x/)("fox")).toBe(true);
    });
    it("is type safe", () => {
      expect(s.test(/5/)(5 as any)).toBe(false);
      expect(s.test(null as any)("foo")).toBe(false);
    });
  });

  it("toUpper()", () => {
    expect(s.toUpper("foo").getValue()).toEqual("FOO");
  });
  it("toLower()", () => {
    expect(s.toLower("FOO").getValue()).toEqual("foo");
  });

  describe("split", () => {
    it("splits strings correctly", () => {
      expect(
        s
          .split("-")("some-long-string")
          .getValue()
      ).toEqual(["some", "long", "string"]);
      expect(
        s
          .split(" ")("some long string")
          .getValue()
      ).toEqual(["some", "long", "string"]);
      expect(
        s
          .split("o")("some long string")
          .getValue()
      ).toEqual(["s", "me l", "ng string"]);
    });
  });
});
