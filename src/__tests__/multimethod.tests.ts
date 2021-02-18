import { defmulti, defmethod } from "../multimethod";

describe("multimethods", () => {
  describe("unary", () => {
    it("should dispatch on the dispatchFn", () => {
      const dispatch = (str?: string) =>
        str?.length > 5 ? "long" : str?.length > 0 ? "short" : "empty";

      const strLen = defmulti(dispatch);
      defmethod(strLen, "long", (input: string) => "It was a long string");
      defmethod(strLen, "short", (str) => "It was a short string: " + str.toUpperCase());
      defmethod(strLen, "default", () => "No implementation found");

      expect(strLen("foo")).toEqual("It was a short string: FOO");
      expect(strLen()).toEqual("No implementation found");
    });

    it("should throw on missing implementations", () => {
      const fn = defmulti((i: any) => "foo");
      defmethod(fn, "bar", (_i: any) => "??");
      expect(() => fn(123)).toThrow();
    });
  });

  describe("multi-ary", () => {
    it("should dispatch on the dispatchFn", () => {
      const dispatch = (a: num, b: num) => Math.sign(a * b);

      const tellRange = defmulti(dispatch);
      const rngInt = "Integers";
      const natZero = "Natural numbers, Zero";
      const natural = "Natural numbers";

      defmethod(tellRange, -1, () => rngInt);
      defmethod(tellRange, 0, () => natZero);
      defmethod(tellRange, 1, () => natural);

      expect(tellRange(1, 1)).toEqual(natural);
      expect(tellRange(1, 0)).toEqual(natZero);
      expect(tellRange(12, -2)).toEqual(rngInt);
    });

    it("should throw on missing implementations", () => {
      const fn = defmulti((i: any, u: any) => "foo");
      defmethod(fn, "bar", (_i: any, _u: any) => "??");
      expect(() => fn(123, 456)).toThrow();
    });
  });
});
