import { equals as eq } from "../main";

describe("equals()", () => {
  it.each`
    a            | b            | result
    ${0}         | ${0}         | ${true}
    ${0}         | ${1}         | ${false}
    ${null}      | ${null}      | ${true}
    ${null}      | ${undefined} | ${false}
    ${undefined} | ${undefined} | ${true}
    ${"foo"}     | ${"foo"}     | ${true}
    ${"foo"}     | ${"bar"}     | ${false}
    ${NaN}       | ${NaN}       | ${true}
    ${NaN}       | ${null}      | ${false}
  `(`Primitives: eq($a, $b) should be $result`, ({ a, b, result }) => {
    expect(eq(a)(b)).toBe(result);
  });

  it("should compare arrays", () => {
    expect(eq([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(eq([1, 2, 3], [1, 2, 3, 4])).toBe(false);
    expect(eq([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it("should compare objects", () => {
    expect(eq({ foo: 1, bar: 2 }, { foo: 1, bar: 2 })).toBe(true);
    expect(eq({ foo: 1, bar: 2 }, { foo: 1, bar: 3 })).toBe(false);
    expect(eq({ foo: 1, bar: 2 }, { foo: 1, bar: 2, baz: 3 })).toBe(false);
  });

  it("should compare sets", () => {
    expect(eq(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    expect(eq(new Set([1, 2, 3]), new Set([1, 2, 3, 4]))).toBe(false);
    expect(eq(new Set([1, 2, 3]), new Set([1, 2, 4]))).toBe(false);
  });

  it("should should compare maps", () => {
    const mapFrom = (obj: { [key: string]: any }) => {
      const m = new Map();
      Object.keys(obj).forEach((key) => m.set(key, obj[key]));
      return m;
    };
    expect(eq(mapFrom({ foo: 1, bar: 2 }), mapFrom({ foo: 1, bar: 2 }))).toBe(true);
    expect(eq(mapFrom({ foo: 1, bar: 2 }), mapFrom({ foo: 1, bar: 3 }))).toBe(false);
    expect(eq(mapFrom({ foo: 1, bar: 2 }), mapFrom({ foo: 1, bar: 2, baz: 3 }))).toBe(false);
  });

  it("should compare RegExes", () => {
    expect(eq(/foo/, /foo/)).toBe(true);
    expect(eq(/foo/i, /foo/)).toBe(false);
    expect(eq(/foo/g, /foo/g)).toBe(true);
    expect(eq(/foo/, /bar/)).toBe(false);
  });

  it("should compare diffent items", () => {
    expect(eq(1, "a" as any)).toBe(false);
    expect(eq([1, 2, 3], new Set([1, 2, 3]) as any)).toBe(false);
    expect(eq(new Set(), new Map() as any)).toBe(false);
    expect(eq(new Map(), new Set() as any)).toBe(false);
  });
});
