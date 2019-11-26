import { somePass } from "../logic";

describe("logic", () => {
  const gt2 = (x: number) => x > 2;
  const even = (x: number) => x % 2 === 0;
  const preds = [gt2, even];

  describe("somePass()", () => {
    it("behaves well", () => {
      expect(somePass(preds)(1)).toBe(false);
      expect(somePass(preds)(2)).toBe(true);
      expect(somePass(preds)(3)).toBe(true);

      expect(somePass(preds)(undefined as any)).toBe(false);
      expect(somePass(null as any)(null as any)).toBe(false);
    });
  });

  describe("some()", () => {});
});
