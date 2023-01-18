import * as l from "../main.ts";

describe("composing functions", () => {
  describe("flow()", () => {
    it("composes arbitrary functions", () => {
      expect(l.flow(l.inc, String)(1)).toEqual("2");
      const fn = l.flow(Math.abs, l.add(4), l.divideBy(2), l.of);
      expect(fn(-2)).toEqual([3]);
    });
  });

  describe("pipe()", () => {
    it("should infix-compose arbitrary functions => ", () => {
      const fn = l.pipe(Math.abs)._(l.add(4))._(l.divideBy(2))._(l.of);
      expect(fn(-2)).toEqual([3]);
    });
  });

  describe("compose()", () => {
    it("should infix-compose arbitrary functions <-", () => {
      const fn = l.compose(l.of)._(l.divideBy(2))._(l.add(4))._(Math.abs);
      expect(fn(-2)).toEqual([3]);
    });
  });
});
