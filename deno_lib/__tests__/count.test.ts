import { count } from "../count.ts";
import { cycle } from "../cycle.ts";

describe("count()", () => {
  it("should count arrays", () => {
    expect(count([])).toBe(0);
    expect(count([1, 2, 3])).toBe(3);
  });

  it("should count infinite arrays", () => {
    expect(count(cycle([1]))).toBe(Number.POSITIVE_INFINITY);
  });

  it("should count chars of a string", () => {
    expect(count("")).toBe(0);
    expect(count("foobar")).toBe(6);
  });

  it("should count object keys", () => {
    expect(count({})).toBe(0);
    expect(count({ foo: 1, bar: 2 })).toBe(2);
  });

  it("should not be fooled by uncountables", () => {
    expect(count(null as any)).toBe(0);
    expect(count(1 as any)).toBe(0);
    expect(count(true as any)).toBe(0);
  });
});
