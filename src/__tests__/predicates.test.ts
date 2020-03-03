import { isEmpty, where, whereEq } from "../predicates";

describe("predicates", () => {
  describe("isEmpty()", () => {
    it("does as expected", () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty("")).toBe(true);

      expect(isEmpty("foo")).toBe(false);
      expect(isEmpty(["foo"])).toBe(false);
      expect(isEmpty({ foo: 1 })).toBe(false);
      expect(isEmpty(1)).toBe(false);
      expect(isEmpty(null as any)).toBe(false);
      expect(isEmpty(undefined as any)).toBe(false);
    });
  });

  describe("where", () => {
    it("applies template tests", () => {
      const obj = { foo: 1, bar: "baz" };
      const tmpl = {
        foo: (n: unknown) => typeof n === "number",
        bar: (b: unknown[]) => typeof b === "string" && b!.length === 3,
      };

      expect(where(tmpl)(obj)).toBe(true);
      expect(
        where({
          foo: (n: unknown) => typeof n === "number",
        })(obj)
      ).toBe(true);
      expect(where(tmpl)({ ...obj, monty: "python" })).toBe(true);
      expect(where(tmpl)({ foo: 1, bar: "foobar" })).toBe(false);
      expect(where(tmpl)({ foo: 1 } as any)).toBe(false);
    });

    it("lets pass anything when empty", () => {
      expect(where({})({ foo: 1 })).toBe(true);
    });
  });

  describe("whereEq", () => {
    it("compares values to template", () => {
      const obj = { foo: 1, bar: "baz" };
      expect(whereEq(obj)(obj)).toBe(true);
      expect(whereEq(obj)({ ...obj, monty: "python" })).toBe(true);
      expect(whereEq(obj)({ foo: 1, bar: "foobar" })).toBe(false);
      expect(whereEq(obj)({ foo: 1 } as any)).toBe(false);
    });
  });
});
