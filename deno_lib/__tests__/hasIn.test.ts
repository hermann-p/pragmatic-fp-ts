import { hasIn } from "../main.ts";

describe("hasIn()", () => {
  const testObj = { foo: { bar: [1, 2, 3] } };
  it("finds existing values", () => {
    expect(hasIn(["foo", "bar"], testObj)).toBe(true);
    expect(hasIn(["foo", "bar", 1], testObj)).toBe(true);
    expect(hasIn(["foo", "baz"], testObj)).toBe(false);
    expect(hasIn(["foo", "bar", 9], testObj)).toBe(false);
    expect(hasIn(["foo", "baz", 9], testObj)).toBe(false);
  });

  it("handles empty values", () => {
    expect(hasIn([], testObj)).toBe(false);
    expect(hasIn(["foo"], {})).toBe(false);
    expect(hasIn([], {})).toBe(false);
  });
});
