import { descend } from "../main.ts";

describe("descend", () => {
  it("correctly orders string keys", () => {
    const cmp = descend((x: string) => x);
    expect(cmp("a", "b")).toBe(-1);
    expect(cmp("a", "a")).toBe(0);
    expect(cmp("", "")).toBe(0);
    expect(cmp("b", "a")).toBe(1);
  });

  it("correctly orders string keys", () => {
    const cmp = descend((x: number) => x);
    expect(cmp(1, 2)).toBe(-1);
    expect(cmp(1, 1)).toBe(0);
    expect(cmp(NaN, NaN)).toBe(0);
    expect(cmp(2, 1)).toBe(1);
  });

  it("handles empty values", () => {
    const cmp = descend((x: any) => x.value);

    expect(cmp({ value: 1 }, { value: 2 })).toBe(-1);
    expect(cmp({ value: 1 }, null)).toBe(1);
    expect(cmp({ value: 1 }, {})).toBe(1);
    expect(cmp({}, { value: 2 })).toBe(-1);
    expect(cmp(null, { value: 2 })).toBe(-1);
    expect(cmp(null, null)).toBe(0);
  });
});
