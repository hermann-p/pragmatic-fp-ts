import * as l from "../main";

const even = (n: number) => n % 2 === 0;

describe("fns", () => {
  describe("add()", () => {
    it("adds numbers", () => {
      expect(l.add(1)(2)).toBe(3);
    });
  });
  describe("all()", () => {
    it("checks all predicates", () => {
      expect(l.all(l.gte(0))([1, 2, 3])).toBeTruthy();
      expect(l.all(l.gte(0))([1, 2, 3, -1])).toBeFalsy();
    });
  });

  describe("allPass()", () => {
    expect(l.allPass([l.gte(0), l.lte(3)])(2)).toBeTruthy();
    expect(l.allPass([l.gte(0), l.lte(3)])(6)).toBeFalsy();
  });

  describe("and()", () => {
    it("tests if both params are truthy", () => {
      expect(l.and(true)(true)).toBeTruthy();
      expect(l.and(true)(false)).toBeFalsy();
      expect(l.and(false)(true)).toBeFalsy();
      expect(l.and(false)(false)).toBeFalsy();
    });
  });

  describe("append()", () => {
    it("appends arrays", () => {
      expect(l.append(3)([1, 2])).toEqual([1, 2, 3]);
      expect(l.append(3)([])).toEqual([3]);
    });

    it("appends strings", () => {
      expect(l.append("bar")("foo")).toEqual("foobar");
    });
  });

  describe("apply()", () => {
    expect(l.apply(l.add)([1, 1])).toEqual(2);
  });

  describe("applyTo()", () => {
    it("applies 2nd param to 1st", () => {
      expect(l.applyTo(1)(l.inc)).toEqual(2);
      expect(l.applyTo(1)(String)).toEqual("1");

      expect(l.applyTo(1)(null as any)).toBe(null);
    });
  });

  describe("both()", () => {
    it("tests if value satisfies both preds", () => {
      expect(l.both(l.gt(0))(l.lt(2))(1)).toBeTruthy();
      expect(l.both(l.gt(0))(l.lt(1))(1)).toBeFalsy();
      expect(l.both(l.gt(1))(l.lt(2))(1)).toBeFalsy();
      expect(l.both(l.gt(1))(l.lt(1))(1)).toBeFalsy();
    });
  });

  describe("clamp()", () => {
    it("Clamps numbers between [min,max]", () => {
      expect(l.clamp(0)(2)(1)).toBe(1);
      expect(l.clamp(0)(2)(3)).toBe(2);
      expect(l.clamp(0)(2)(-1)).toBe(0);
      expect(l.clamp(0, 2, 1)).toBe(1);
    });

    it("Clamps strings between [min,max]", () => {
      expect(l.clamp<string>("aaa")("bbb")("aab")).toBe("aab");
      expect(l.clamp<string>("aaa")("bbb")("cab")).toBe("bbb");
      expect(l.clamp<string>("aab")("bbb")("aaa")).toBe("aab");
      expect(l.clamp<string>("aaa")("bbb")("aab")).toBe("aab");
    });
  });

  describe("comparator()", () => {
    it("creates a comparator from an ordering function", () => {
      const bySize = (a: number, b: number) => a < b;
      const compare = l.comparator(bySize);
      expect(compare(1, 2)).toBe(1);
      expect(compare(2, 1)).toBe(-1);
      expect(compare(0, 0)).toBe(0);
    });
  });

  describe("complement()", () => {
    it("inverts predicates", () => {
      const p = (a: number) => a > 0;
      expect(p(1)).toBeTruthy();
      expect(l.complement(p)(1)).toBeFalsy();
    });
  });

  describe("cond()", () => {
    it("matches patterns", () => {
      const findBoundary = l.cond([
        [l.gt(3), () => 3],
        [l.gt(0), () => 0],
      ]);

      expect(findBoundary(4)).toBe(3);
      expect(findBoundary(1)).toBe(0);
      expect(findBoundary(-1)).toBe(null);
    });
  });

  describe("constantly()", () => {
    it("always returns the value", () => {
      const c = l.constantly(7);
      expect(c()).toBe(7);
      expect(c("foo", "bar")).toBe(7);
    });
  });

  describe("converge()", () => {
    it("transforms stuff", () => {
      expect(l.converge(l.join(""))([l.toUpper, l.toLower])("foo")).toEqual("FOOfoo");

      expect(l.converge(l.sum)([l.max, l.min, l.mean])([1, 2, 3, 4, 5])).toBe(9);
    });
  });

  describe("countBy()", () => {
    it("counts by mappable", () => {
      expect(l.countBy(l.gt(2))(l.range(0, 6))).toEqual({ true: 3, false: 3 });

      const grade = l.prop("grade");
      const students = [
        { name: "fred", grade: "A" },
        { name: "adrian", grade: "D" },
        { name: "john", grade: "A" },
        { name: "peter", grade: "C" },
      ];

      expect(l.countBy(grade)(students)).toEqual({ A: 2, C: 1, D: 1 });
    });
  });

  describe("dissoc()", () => {
    it("removes a key from an object", () => {
      const dict = { foo: 1, bar: 2 };
      expect(l.dissoc("foo")(dict)).toEqual({ bar: 2 });
    });
  });

  describe("dissocIn()", () => {
    it("removes deep elements from objects", () => {
      const input = { foo: { bar: 1, baz: 2 } };
      expect(l.dissocIn(["foo", "baz"])(input)).toEqual({ foo: { bar: 1 } });
    });
  });

  describe("drop()", () => {
    it("drops first n elements", () => {
      let rng = l.range(0, 9);
      expect(l.drop(4)(rng)).toEqual([4, 5, 6, 7, 8]);
      expect(l.drop(0, rng)).toEqual(rng);
      expect(l.drop(100, rng)).toEqual([]);
      expect(l.drop(-1, rng)).toEqual(rng);
      expect(l.drop(-17, rng)).toEqual(rng);
    });
  });

  describe("dropRepeats()", () => {
    it("removes successive repeats in a list, leaving only one copy", () => {
      const withRepeats = [0, 1, 1, 1, 2, 3, 4, 4, 3, 2, 2, 1];
      const clean = [0, 1, 2, 3, 4, 3, 2, 1];
      expect(l.dropRepeats(withRepeats)).toEqual(clean);
    });
  });

  describe("dropRepeatsWith()", () => {
    it("removes successive repeats in a list, identify them with mappable, leaving only one copy", () => {
      const withRepeats = [0, 1, 1, 1, 2, 3, 4, 4, 3, 2, 2, 1];
      const clean = [0, 1, 2, 3, 4, 3, 2, 1];
      expect(l.dropRepeatsWith(l.eq)(withRepeats)).toEqual(clean);
    });
  });

  describe("dropRight()", () => {
    it("drops n elements from the end of a list", () => {
      expect(l.dropRight(3)(l.range(0, 6))).toEqual(l.range(0, 3));
    });
  });

  describe("dropWhile()", () => {
    it("drops while pred", () => {
      expect(l.dropWhile(l.lt(3))(l.range(0, 5))).toEqual([3, 4]);
    });
  });

  describe("dropRightWhile()", () => {
    it("drops while pred", () => {
      const rng = l.range(0, 5);
      expect(l.dropRightWhile(l.gt(3))(rng)).toEqual([0, 1, 2, 3]);
      expect(l.dropRightWhile(l.gte(0))(rng)).toEqual(rng);
    });
  });

  describe("eitherOr", () => {
    it("returns first result if trutyh, else second", () => {
      expect(l.eitherOr(l.identity)(l.T)(false)).toBeTruthy();
      expect(l.eitherOr(l.T)(l.identity)(false)).toBeTruthy();
      expect(l.eitherOr(l.identity)(l.identity)(false)).toBeFalsy();
    });
  });

  describe("eqProps()", () => {
    it("tests if two objects have equal props", () => {
      const objA = { foo: 1, bar: 2 };
      const objB = { foo: 1, bar: 3 };

      expect(l.eqProps("foo")(objA)(objB)).toBeTruthy();
      expect(l.eqProps("bar", objA, objB)).toBeFalsy();
    });
  });

  describe("filter()", () => {
    const even = (x: number) => x % 2 === 0;
    it("filters lists", () => {
      expect(l.filter(even)(l.range(0, 5))).toEqual([0, 2, 4]);
    });
    it("filters object values", () => {
      const obj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
      expect(l.filter(even)(obj)).toEqual({ 0: 0, 2: 2, 4: 4 });
    });
  });

  describe("filterKeys()", () => {
    it("filters objects by testing predicates on their property names", () => {
      const obj = { foo: 1, bar: 2, foobar: 3 };
      expect(l.filterKeys((str) => str.startsWith("foo"))(obj)).toEqual({
        foo: 1,
        foobar: 3,
      });
    });
  });

  describe("find()", () => {
    it("finds elements within an array", () => {
      expect(l.find(l.eq(2))([1, 2, 3])).toEqual(2);
      expect(l.find(l.eq(4))([1, 2, 3])).toEqual(null);
    });
  });

  describe("findIndex()", () => {
    it("finds elements within an array", () => {
      expect(l.findIndex(l.eq(2))([1, 2, 3])).toEqual(1);
      expect(l.findIndex(l.eq(4))([1, 2, 3])).toEqual(-1);
    });
    it("finds elements within an object", () => {
      expect(l.findIndex(l.eq(2))({ foo: 1, bar: 2, yordle: 3 })).toEqual("bar");
    });
  });

  describe("findLast()", () => {
    it("finds elements within an array", () => {
      expect(l.findLast(l.eq(2))([1, 2, 3, 2, 1])).toEqual(2);
      expect(l.findLast(l.eq(4))([1, 2, 3, 2, 1])).toEqual(null);
    });
  });

  describe("findLastIndex()", () => {
    it("finds elements within an array", () => {
      expect(l.findLastIndex(l.eq(2))([1, 2, 3, 2, 1])).toEqual(3);
      expect(l.findLastIndex(l.eq(4))([1, 2, 3, 2, 1])).toEqual(-1);
    });
    it("finds elements within an object", () => {
      expect(l.findLastIndex(l.eq(2))({ foo: 1, bar: 2, yordle: 2 })).toEqual("yordle");
    });
  });

  describe("first()", () => {
    it("finds first letter of string", () => {
      expect(l.first("Hello")).toEqual("H");
    });
    it("finds first element of list", () => {
      expect(l.first([1, 2, 3])).toEqual(1);
    });
  });

  describe("flatMap()", () => {
    describe("flatMap()", () => {
      it("maps over a list and flattens one level of results", () => {
        expect(l.flatMap(l.inc)([1, 2, [3, 4], 5])).toEqual([2, 3, 4, 5, 6]);
      });
    });
  });

  describe("forEach()", () => {
    it("performs side effects on lists", () => {
      const result: any[] = [];
      const rng = l.range(0, 5);
      l.forEach((x) => result.push(x))(rng);
      expect(result).toEqual(rng);
    });
    it("performs side effects on object values", () => {
      const result: any[] = [];
      l.forEach((x) => result.push(x))({ foo: 1, bar: 2, baz: 3 });
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe("fromPairs()", () => {
    it("creates dictionaries from lists", () => {
      expect(
        l.fromPairs([
          ["foo", 1],
          ["bar", 2],
        ])
      ).toEqual({ foo: 1, bar: 2 });
    });
  });

  describe("getIn()", () => {
    it("gets elements deep", () => {
      const obj = { foo: { bar: [1, 2, 3] } };
      expect(l.getIn(["foo", "bar", 2])(obj)).toEqual(3);
    });
  });

  describe("getOr()", () => {
    it("gets elements deep, with default", () => {
      const obj = { foo: { bar: [1, 2, 3] } };
      expect(l.getOr(0)(["foo", "bar", 2])(obj)).toEqual(3);
      expect(l.getOr(0)(["foo", "bar", 17])(obj)).toEqual(0);
    });
    it("gets elements flat", () => {
      expect(l.getOr(0)("foo")({ foo: 1 })).toEqual(1);
      expect(l.getOr(0)("bar")({ foo: 1 })).toEqual(0);
      expect(l.getOr(0)(1)([1, 2, 3])).toEqual(2);
      expect(l.getOr(0)(9)([1, 2, 3])).toEqual(0);
    });
  });

  describe("groupBy()", () => {
    it("groups stuff by mappable", () => {
      const fred = { name: "fred", grade: "A" };
      const adrian = { name: "adrian", grade: "D" };
      const john = { name: "john", grade: "A" };
      const peter = { name: "peter", grade: "C" };
      const students = [fred, adrian, john, peter];

      expect(l.groupBy(l.prop("grade"))(students)).toEqual({
        A: [fred, john],
        C: [peter],
        D: [adrian],
      });
    });
  });

  describe("has()", () => {
    it("tests if property exists", () => {
      expect(l.has("foo")({ foo: "bar" })).toBeTruthy();
      expect(l.has("bar")({ foo: "bar" })).toBeFalsy();
      expect(l.has("foo")({ foo: undefined })).toBeTruthy();
    });
  });

  describe("identical()", () => {
    it("test for referential identity, aka why is mutation bad", () => {
      const foo = { foo: 1 };
      const bar = { foo: 1 };
      expect(l.identical(foo, foo)).toBe(true);
      expect(l.identical(foo, bar)).toBe(false);
      const isFoo = l.identical(foo);
      foo.foo = 18;
      expect(isFoo(foo)).toBe(true);
    });
  });

  describe("lenses", () => {
    describe("lensProp()", () => {
      const obj = { foo: 1 };
      const barLens = l.lensProp<number>("bar");

      expect(l.view(barLens)(obj)).toBe(undefined);
      expect(l.set(barLens)(2)(obj)).toEqual({ foo: 1, bar: 2 });
      expect(l.over(barLens)(l.inc)({ bar: 1 })).toEqual({ bar: 2 });
    });

    describe("lensIndex()", () => {
      const arr = [1, 2, 3];
      const headLens = l.lensIndex<number>(0);

      expect(l.view(headLens, arr)).toBe(1);
      expect(l.set(headLens, 2, arr)).toEqual([2, 2, 3]);
      expect(l.over(headLens, l.inc, arr)).toEqual([2, 2, 3]);
    });

    describe("lensPath()", () => {
      const person = {
        name: "John Doe",
        tags: {
          positive: ["anonymous hero"],
          negative: ["most often in criminal records"],
        },
      };

      const posTagLens = l.lensPath(["tags", "positive", 0]);
      expect(l.view(posTagLens, person)).toEqual("anonymous hero");
      expect(l.set(posTagLens, "nice guy", person)).toEqual({
        name: "John Doe",
        tags: {
          positive: ["nice guy"],
          negative: ["most often in criminal records"],
        },
      });
      expect(l.over(posTagLens, l.toUpper, person)).toEqual({
        name: "John Doe",
        tags: {
          positive: ["ANONYMOUS HERO"],
          negative: ["most often in criminal records"],
        },
      });
    });
  });

  describe("ifElse()", () => {
    expect(l.ifElse(l.eq(1))(l.dec)(l.inc)(1)).toBe(0);
    expect(l.ifElse(l.eq(1), l.dec, l.inc, -1)).toBe(0);
  });

  describe("includes()", () => {
    expect(l.includes("foo")("foobar")).toBe(true);
    expect(l.includes("foo")("fobar")).toBe(false);
    expect(l.includes(1)([1, 2, 3])).toBe(true);
    expect(l.includes(5)([1, 2, 3])).toBe(false);
  });

  describe("indexBy()", () => {
    const list = [
      { id: "xyz", title: "A" },
      { id: "abc", title: "B" },
    ];
    const indexed = {
      abc: { id: "abc", title: "B" },
      xyz: { id: "xyz", title: "A" },
    };
    expect(l.indexBy(l.prop("id"))(list)).toEqual(indexed);
  });

  describe("init()", () => {
    expect(l.init(l.range(0, 5))).toEqual(l.range(0, 4));
  });

  describe("invert()", () => {
    expect(l.invert({ foo: 1, bar: 2 })).toEqual({ 1: ["foo"], 2: ["bar"] });
  });

  describe("invertObj()", () => {
    expect(l.invertObj({ foo: 1, bar: 2 })).toEqual({ 1: "foo", 2: "bar" });
  });

  describe("isIn()", () => {
    expect(l.isIn([1, 2, 3])(1)).toBe(true);
    expect(l.isIn([1, 2, 3])(4)).toBe(false);
    expect(l.isIn("foo")("o")).toBe(true);
    expect(l.isIn("foo")("x")).toBe(false);
  });

  describe("predicates", () => {
    expect(l.isPos(1)).toBe(true);
    expect(l.isPos(0)).toBe(false);
    expect(l.isPos(-1)).toBe(false);
    expect(l.isNeg(-1)).toBe(true);
    expect(l.isNeg(0)).toBe(false);
    expect(l.isNeg(1)).toBe(false);
    expect(l.isNumber(1)).toBe(true);
    expect(l.isNumber(NaN)).toBe(false);
    expect(l.isNumber("x")).toBe(false);
    expect(l.isZero(0)).toBe(true);
    expect(l.isZero(1)).toBe(false);
  });

  describe("keys()", () => {
    expect(l.keys({ foo: 1, bar: 2 })).toEqual(["foo", "bar"]);
    expect(l.keys({})).toEqual([]);
  });

  describe("values()", () => {
    expect(l.values({ foo: 1, bar: 2 })).toEqual([1, 2]);
    expect(l.values({})).toEqual([]);
  });

  describe("map()", () => {
    it("maps over arrays", () => {
      expect(l.map(l.add(2))([1, 2, 3])).toEqual([3, 4, 5]);
    });
    it("maps over object values", () => {
      expect(l.map(l.inc)({ foo: 1, bar: 2 })).toEqual({ foo: 2, bar: 3 });
    });
  });

  describe("last()", () => {
    expect(l.last([1, 2, 3])).toBe(3);
    expect(l.last([])).toBe(null);
  });

  describe("mapKeys()", () => {
    const obj = { foo: 1, bar: 2 };
    const expected = { FOO: 1, BAR: 2 };

    expect(l.mapKeys(l.toUpper)(obj)).toEqual(expected);
    expect(l.mapKeys(l.toUpper)({})).toEqual({});
  });

  describe("memoizeWith()", () => {
    let counter = 0;
    const updateCounter = (n: Number) => {
      counter += 1;
      return n;
    };

    const memoized = l.memoizeWith((_: number) => "foo")(updateCounter);

    const rng = l.range(0, 10);
    const result = rng.map(memoized);

    expect(result.length).toEqual(rng.length);
    result.forEach((r) => expect(r).toBe(0));
    expect(counter).toBe(1);
  });

  describe("negate()", () => {
    expect(l.negate(1)).toBe(-1);
    expect(l.negate(-1)).toBe(1);
  });

  describe("not()", () => {
    expect(l.not(true)).toBe(false);
    expect(l.not(false)).toBe(true);
  });

  describe("partial()", () => {
    const fn = (a: number, b: number) => a + b;
    const add5 = l.partial(fn, 5);

    expect(add5(1)).toBe(6);
  });

  describe("partition()", () => {
    const rng = l.range(0, 6);
    const expected = { t: [3, 4, 5], f: [0, 1, 2] };
    expect(l.partition(l.gt(2))(rng)).toEqual(expected);
  });

  describe("none()", () => {
    expect(l.none(l.gt(3))(l.range(0, 4))).toBe(true);
    expect(l.none(l.gt(3))(l.range(0, 5))).toBe(false);
  });

  describe("nonePass()", () => {
    expect(l.nonePass([l.gt(3), l.gt(4), l.gt(5)])(3)).toBe(true);
    expect(l.nonePass([l.isPos, l.gt(3), l.gt(4)])(3)).toBe(false);
  });

  describe("prepend()", () => {
    expect(l.prepend("foo")("bar")).toEqual("foobar");
    expect(l.prepend(0)([1, 2, 3])).toEqual([0, 1, 2, 3]);
  });

  describe("product()", () => {
    expect(l.product([1, 2, 3, 4])).toEqual(24);
  });

  describe("propEq()", () => {
    const obj = { foo: 1, bar: { baz: 2, sth: [1, 2, 3] } };
    expect(l.propEq("foo")(1)(obj)).toBe(true);
    expect(l.propEq("baz", 1, obj)).toBe(false);
    expect(l.propEq(["bar", "baz"], 2, obj)).toBe(true);
    expect(l.propEq(["bar", "sth", 1], 2, obj)).toBe(true);
    expect(l.propEq(["bar", "sth", 1], 1, obj)).toBe(false);
  });

  describe("propSatisfies()", () => {
    const obj = { foo: 1, bar: { baz: 2, sth: [1, 2, 3] } };
    expect(l.propSatisfies("foo")(l.gt(1))(obj)).toBe(false);
    expect(l.propSatisfies("foo")(l.isPos)(obj)).toBe(true);
    expect(l.propSatisfies(["bar", "baz"], l.gt(1), obj)).toBe(true);

    expect("prop");
  });

  describe("props()", () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    expect(l.props(["foo", "bar"])(obj)).toEqual([1, 2]);
  });

  describe("reduceKV()", () => {
    const obj = {
      foo: 1,
      bar: 2,
      baz: 3,
    };

    const result = l.reduceKV((accum: string, n: number, k: string) =>
      [...(accum ? [accum] : []), k + ":" + String(n)].join(",")
    )("")(obj);

    expect(result).toEqual("foo:1,bar:2,baz:3");
  });

  describe("reject()", () => {
    expect(l.reject(even)(l.range(0, 6))).toEqual([1, 3, 5]);
    expect(l.reject(even)([])).toEqual([]);
    expect(l.reject(even)(null as any)).toEqual([]);
  });

  describe("some()", () => {
    expect(l.some(even)(l.range(0, 4))).toBe(true);
    expect(l.some(l.isNeg)(l.range(0, 4))).toBe(false);
    expect(l.some(even)(null as any)).toBe(false);
  });

  describe("somePass()", () => {
    expect(l.somePass([l.isPos, l.isNeg])(1)).toBe(true);
    expect(l.somePass([even, l.isNeg])(1)).toBe(false);
    expect(l.somePass(null as any, 1)).toBe(false);
  });

  describe("sort()", () => {
    const unsorted = ["this", "is", "a", "text"];
    const sorted = ["a", "is", "text", "this"];

    expect(l.sort(unsorted)).toEqual(sorted);
  });

  describe("sortBy()", () => {
    const unsorted = [4, 3, 5, 1, 2];
    const sorted = [1, 2, 3, 4, 5];
    const numeric = (a: number, b: number) => a - b;

    expect(l.sortBy(numeric)(unsorted)).toEqual(sorted);
  });

  describe("split()", () => {
    const text = "this is a text";
    const words = ["this", "is", "a", "text"];

    expect(l.split(" ")(text)).toEqual(words);
  });

  describe("test()", () => {
    const re = /\d{4}-\d{2}-\d{2}/;

    expect(l.test(re)("2020-01-01")).toBe(true);
    expect(l.test(re, "not-a-date")).toBe(false);
  });

  describe("toPairs()", () => {
    expect(l.toPairs({ foo: 1, bar: 2 })).toEqual([
      ["foo", 1],
      ["bar", 2],
    ]);
  });

  describe("trim()", () => {
    expect(l.trim("   text  ")).toEqual("text");
  });

  describe("tryCatch()", () => {
    const bomb = (_: number): number => {
      throw "boom";
      return 0;
    };

    const catcher = (_: Error, n: number) => {
      return n + 1;
    };

    expect(l.tryCatch(bomb)(catcher)(1)).toEqual(2);
    expect(l.tryCatch(l.dec, catcher, 1)).toEqual(0);
  });

  describe("unless()", () => {
    expect(l.unless(l.isPos)(l.negate)(-1)).toBe(1);
    expect(l.unless(l.isPos)(l.negate)(1)).toBe(1);
  });

  describe("when()", () => {
    expect(l.when(l.isNeg)(l.negate)(-1)).toBe(1);
    expect(l.when(l.isNeg)(l.negate)(1)).toBe(1);
  });

  describe("xor()", () => {
    expect(l.xor(true)(true)).toBe(false);
    expect(l.xor(true)(false)).toBe(true);
    expect(l.xor(false)(true)).toBe(true);
    expect(l.xor(false)(false)).toBe(false);
  });

  describe("where()", () => {
    const arr = [
      { foo: 1, id: 1 },
      { foo: -1, id: 1 },
    ];
    const noFoo = l.where({ foo: l.isNeg });
    expect(l.find<typeof arr[0]>(noFoo, arr)?.id).toBe(1);
    expect(l.find<typeof arr[0]>(noFoo, [])?.id).toBe(undefined);
  });

  describe("whereEq()", () => {
    const arr = [
      { foo: 1, id: 1 },
      { foo: -1, id: 1 },
    ];
    const noFoo = l.whereEq({ foo: -1 });
    expect(l.find<typeof arr[0]>(noFoo)(arr)?.id).toBe(1);
    expect(l.find<typeof arr[0]>(noFoo)([])?.id).toBe(undefined);
  });

  describe("zip()", () => {
    const a1 = ["a", "b"];
    const a2 = [1, 2, 3, 4, 5];

    expect(l.zip(a1)(a2)).toEqual([
      ["a", 1],
      ["b", 2],
    ]);

    expect(l.zip(a1, null as any)).toEqual([]);
    expect(l.zip(null as any, a2)).toEqual([]);
    expect(l.zip(null as any, null as any)).toEqual([]);
  });

  describe("zipMap()", () => {
    const a1 = ["a", "b"];
    const a2 = [1, 2, 3, 4, 5];

    const join = ([txt, n]: [string, number]) => txt + ":" + String(n);

    expect(l.zipMap(join)(a1)(a2)).toEqual(["a:1", "b:2"]);

    expect(l.zipMap(join, a1, null as any)).toEqual([]);
    expect(l.zipMap(join, null as any, a2)).toEqual([]);
    expect(l.zipMap(join, null as any, null as any)).toEqual([]);
  });
});
