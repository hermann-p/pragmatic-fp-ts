import { get } from "../main";

describe("get", () => {
  it("gets elements from arrays", () => {
    expect(get(1, [1, 2, 3])).toBe(2);
    expect(get(1)([1, 2, 3])).toBe(2);
  });
  it("gets elements from objects", () => {
    expect(get("foo", { foo: 1, bar: 2 })).toBe(1);
    expect(get("foo")({ foo: 1, bar: 2 })).toBe(1);
  });
});
