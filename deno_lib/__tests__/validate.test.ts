import V from "../validate.ts";

describe("Validator", () => {
  describe("any", () => {
    it.each`
      value
      ${null}
      ${undefined}
      ${"foo"}
      ${12}
      ${[1, 2, 3]}
    `("should parse $value unchanged", ({ value }) => {
      expect(V.any(value).getValue()).toEqual(value);
    });
  });
  describe("unknown", () => {
    it.each`
      value
      ${null}
      ${undefined}
      ${"foo"}
      ${12}
      ${[1, 2, 3]}
    `("should parse $value unchanged", ({ value }) => {
      expect(V.unknown(value).getValue()).toEqual(value);
    });
  });
  describe("boolean()", () => {
    it("should parse booleans", () => {
      expect(V.boolean(true).getValue()).toBe(true);
      expect(V.boolean(false).getValue()).toBe(false);
    });
    it("should recognise non-booleans", () => {
      expect(V.boolean("true").getReason()?.message).toMatch("expected boolean");
      expect(V.boolean(1).getReason()?.message).toMatch("expected boolean");
      expect(V.boolean(NaN).getReason()?.message).toMatch("expected boolean");
    });
  });
  describe("ISO date string", () => {
    it("should recognise valid date strings", () => {
      expect(V.dateString("2023").isRight()).toBe(true);
      expect(V.dateString("2023-11-11").isRight()).toBe(true);
      expect(V.dateString("2023-11-11T12:24").isRight()).toBe(true);
    });
    it("should reject nonsense date strings", () => {
      expect(V.dateString("2023-15").getReason()?.message).toMatch("expected ISO date string");
      expect(V.dateString("30 BCE").isLeft()).toBe(true);
      expect(V.dateString(12321312).isLeft()).toBe(true);
    });
  });
  describe("enum()", () => {
    it("should parse enum members", () => {
      expect(V.enum(["foo", "bar"])("foo").isRight()).toBe(true);
      expect(V.enum([1, 2])(1).isRight()).toBe(true);
    });
    it("should find bad members", () => {
      expect(V.enum(["foo", "bar"])("baz").getReason()?.message).toMatch(
        "expected one of [foo,bar]"
      );
      expect(V.enum([1, 2])(3).getReason()?.message).toMatch("expected one of [1,2]");
    });
  });
  describe("nil()", () => {
    it("should identify nils", () => {
      expect(V.nil(null).isRight()).toBe(true);
      expect(V.nil(undefined).isRight()).toBe(true);
      expect(V.nil(0).isRight()).toBe(false);
    });
  });
  describe("number()", () => {
    it("should identify numbers", () => {
      expect(V.number(0).isRight()).toBe(true);
      expect(V.number(NaN).isRight()).toBe(false);
      expect(V.number("1").isRight()).toBe(false);
    });
  });
  describe("null()", () => {
    it("should identify nulls", () => {
      expect(V.null(null).isRight()).toBe(true);
      expect(V.null(undefined).isRight()).toBe(false);
      expect(V.null(0).isRight()).toBe(false);
    });
  });
  describe("string()", () => {
    it("should identify strings", () => {
      expect(V.string("foo").isRight()).toBe(true);
      expect(V.string(undefined).isRight()).toBe(false);
      expect(V.string(0).isRight()).toBe(false);
    });
  });

  describe("array()", () => {
    const isStringArray = V.array(V.string);
    it("should identify arrays", () => {
      expect(isStringArray([]).isRight()).toBe(true);
      expect(isStringArray(["foo", "bar"]).isRight()).toBe(true);
      expect(isStringArray("[foo bar]").getReason()?.message).toMatch("expected Array<string>");
    });
    it("should parse array members", () => {
      expect(isStringArray(["foo", 42]).getReason()?.message).toMatch("[1: expected string");
    });
  });
  describe("record()", () => {
    const isMyRecord = V.record({ foo: V.string, bar: V.number });
    it("should identify records", () => {
      expect(isMyRecord({ foo: "bar", bar: 1 }).isRight()).toBe(true);
      expect(isMyRecord("foo").getReason()?.message).toMatch(
        "expected Record<{foo: string, bar: number}>"
      );
    });
    it("should check members", () => {
      expect(isMyRecord({ foo: "bar" }).getReason()?.message).toMatch("{bar: expected number");
      expect(isMyRecord({}).getReason()?.message).toMatch(
        /{foo: expected string.*bar: expected number/
      );
    });
  });
  describe("oneOf()", () => {
    const stringOrNumber = V.oneOf<string | number>(V.string, V.number);
    it("should match either types", () => {
      expect(stringOrNumber("xxx").isRight()).toBe(true);
      expect(stringOrNumber(42).isRight()).toBe(true);
      expect(stringOrNumber(NaN).getReason()?.message).toMatch("expected [string | number]");
      expect(
        V.oneOf<number | "foo" | "bar">(V.number, V.enum(["foo", "bar"]))("wrong").getReason()
          ?.message
      ).toMatch("expected [number | one of [foo,bar]]");
    });
  });
  describe("dictionary()", () => {
    const isStringDict = V.dictionary(V.string);
    it("should recognise dictionaries", () => {
      expect(isStringDict({}).isRight()).toBe(true);
      expect(isStringDict({ foo: "bar" }).isRight()).toBe(true);
      expect(isStringDict([]).getReason()?.message).toMatch(
        "expected Dictionary<string>, got array"
      );
    });
  });
});
