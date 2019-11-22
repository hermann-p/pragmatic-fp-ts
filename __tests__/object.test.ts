import { Dictionary } from "./types.d";
import { get } from "./object";

describe("object", () => {
  describe("get()()", () => {
    const obj = { foo: 1, bar: { baz: 2, great: [4, 5, 6] } };

    it("gets values", () => {
      expect(get(["foo"])(obj).isJust()).toBe(true);
      expect(get(["foo"])(obj).getValue()).toBe(1);
      expect(get(["bar", "baz"])(obj).getValue()).toBe(2);
      expect(get([1])([7, 8, 9]).getValue()).toBe(8);
      expect(get(["bar", "great", 2])(obj).getValue()).toBe(6);
    });

    it("does not throw on invalid paths", () => {
      expect(get(["baz"])(obj).isNothing()).toBe(true);
      expect(get(["some", "invalid", "path"])(obj).isNothing()).toBe(true);
    });

    it("is nil safe", () => {
      expect(get((null as any) as Array<number>)(obj).isNothing()).toBe(true);
      expect(get(["foo"])((null as any) as Dictionary).isNothing()).toBe(true);
      expect(get((null as any) as Array<number>)((null as any) as Dictionary).isNothing()).toBe(
        true
      );
    });
  });
});
