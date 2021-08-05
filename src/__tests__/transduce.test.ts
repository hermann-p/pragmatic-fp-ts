import * as l from "../main";
import * as t from "../transduce";

describe("transducers", () => {
  describe("composition", () => {
    const mapInc = t.map((x: number) => x + 1);
    const mapMul3 = t.map((x: number) => x * 3);
    const filterEven = t.filter((n: number) => n % 2 === 0);
    const filterSmall = t.filter((n: number) => n < 15);
    const mapRange = t.map((n: number) => [n, n]);

    it("should compose multiple transducers", () => {
      expect(
        t.transformList(
          mapInc, //[1,2,3,4,5,6,7]
          mapRange, // [[1,1],[2,2],[3,3],...,[7,7]]
          t.flatten, // [1,1,2,2,3,3,...,7,7]
          mapMul3, // [3,3,6,6,...,21,21]
          filterEven, // [6,6,12,12,18,18]
          filterSmall, // [6,6,12,12]
          mapInc
        )([0, 1, 2, 3, 4, 5])
      ).toEqual([7, 7, 13, 13]);
    });
  });

  describe("basic functions", () => {
    test("map()", () => {
      expect(t.transformList(t.map(l.inc))([1, 2, 3])).toEqual([2, 3, 4]);
    });

    test("filter()", () => {
      expect(t.transformList(t.filter((x: number) => x % 2 === 0))([1, 2, 3, 4])).toEqual([2, 4]);
    });

    test("take()", () => {
      expect(t.transformList(t.take(2), [1, 2, 3, 4, 5])).toEqual([1, 2]);
    });

    test("drop()", () => {
      expect(t.transformList(t.drop(2), [1, 2, 3, 4])).toEqual([3, 4]);
    });

    describe("flatMap()", () => {
      it("should keep flat values", () => {
        expect(t.transformList(t.flatMap(l.identity), [1, 2, 3])).toEqual([1, 2, 3]);
        expect(t.transformList(t.flatMap(l.identity), [{ foo: 1 }, { bar: 2 }])).toEqual([
          { foo: 1 },
          { bar: 2 },
        ]);
      });

      it("should flatten arrays", () => {
        expect(
          t.transformList(
            t.flatMap((end: number) => l.range(0, end)),
            [2, 3, 4]
          )
        ).toEqual([0, 1, 0, 1, 2, 0, 1, 2, 3]);
      });

      it("should treat mixed arrays correctly", () => {
        expect(t.transformList(t.flatMap(l.identity), [1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
      });
    });

    test("insert()", () => {
      expect(t.transformList(t.map(l.inc), t.insert(2), t.map(l.inc))([2, 3, 4])).toEqual([
        3,
        4,
        5,
        6,
      ]);
    });

    test("find()", () => {
      expect(
        t.transformList(
          t.map(l.inc),
          t.find((x) => x === 2),
          t.map(l.inc),
          [1, 2, 3]
        )
      ).toEqual([3]);
    });

    test("compact", () => {
      const input = [1, 2, 3, null, undefined, NaN, l.nothing(), l.left("bad!"), 4, 5];
      expect(t.transformList(t.compact, t.map(l.inc), input)).toEqual([2, 3, 4, 5, 6]);
    });

    describe("flatten()", () => {
      it("should keep flat values", () => {
        expect(t.transformList(t.flatten, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(t.transformList(t.flatten, [{ foo: 1 }, { bar: 2 }])).toEqual([
          { foo: 1 },
          { bar: 2 },
        ]);
      });

      it("should treat mixed arrays correctly", () => {
        expect(t.transformList(t.flatten)([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
      });
    });

    test("uniq()", () => {
      expect(t.transformList(t.uniq)([1, 2, 3, 4, 4, 5, 6, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    test("uniqBy()", () => {
      const coll = [
        { id: 1, foo: "foo" },
        { id: 2, foo: "bar" },
        { id: 1, foo: "baz" },
      ];
      expect(t.transformList(t.uniqBy(l.prop("id")))(coll)).toEqual([
        { id: 1, foo: "foo" },
        { id: 2, foo: "bar" },
      ]);
    });
  });

  describe("reducers", () => {
    it("insertM", () => {
      const cmp = (a: number, b: number) => a < b;
      expect(t.insertM(cmp, [1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
      expect(t.insertM(cmp, [1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
      expect(t.insertM(cmp, [2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
      expect(t.insertM(cmp, [1, 2, 3], 2)).toEqual([1, 2, 2, 3]);
    });
  });

  describe("transduceObj()", () => {
    it("should transduce objects by using kv-pairs", () => {
      const input = { a: 1, b: 2, foo: 1, bar: 2, baz: 3, bazoo: 17, baba: 42 };
      expect(
        t.transformObj(
          t.map(([k, v]) => [k, v + 1]),
          t.filter(([k, _v]) => k.length > 1),
          t.filter(([_k, v]) => v % 2 === 0)
        )(input)
      ).toEqual({
        baz: 4,
        bazoo: 18,
        foo: 2,
      });
    });
  });
});
