import { gt, gte, lt, lte } from "../main.ts";

describe("gt", () => {
  const greaterThree = gt(3);
  it("works", () => {
    expect(greaterThree(4)).toBe(true);
    expect(greaterThree(3)).toBe(false);
    expect(greaterThree(1)).toBe(false);

    expect(gt(null as any)(1)).toBe(true);
    expect(gt(1)(null as any)).toBe(false);
  });
});

describe("gte", () => {
  const greaterThanEqual = gte(3);
  it("works", () => {
    expect(greaterThanEqual(4)).toBe(true);
    expect(greaterThanEqual(3)).toBe(true);
    expect(greaterThanEqual(1)).toBe(false);

    expect(gte(null as any)(1)).toBe(true);
    expect(gte(1)(null as any)).toBe(false);
  });
});

describe("lt", () => {
  const lessThanThree = lt(3);
  it("works", () => {
    expect(lessThanThree(4)).toBe(false);
    expect(lessThanThree(3)).toBe(false);
    expect(lessThanThree(1)).toBe(true);

    expect(lt(null as any)(1)).toBe(false);
    expect(lt(1)(null as any)).toBe(true);
  });
});

describe("lte", () => {
  const lessThanEqualThree = lte(3);
  it("works", () => {
    expect(lessThanEqualThree(4)).toBe(false);
    expect(lessThanEqualThree(3)).toBe(true);
    expect(lessThanEqualThree(1)).toBe(true);

    expect(lte(null as any)(1)).toBe(false);
    expect(lte(1)(null as any)).toBe(true);
  });
});
