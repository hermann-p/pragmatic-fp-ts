import { eqBy, equals, groupWith, identity, inc } from "../main";

describe("groupWith()", () => {
  const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  it("groups with equals", () => {
    const expected = [[0], [1, 1], [2], [3], [5], [8], [13], [21]];
    expect(groupWith(equals, fib)).toEqual(expected);
  });

  it("groups with identity", () => {
    const expected = [[0], [1, 1], [2], [3], [5], [8], [13], [21]];
    expect(groupWith(eqBy(identity), fib)).toEqual(expected);
  });

  it("groups with inc", () => {
    const expected = [[0], [1, 1], [2], [3], [5], [8], [13], [21]];
    expect(groupWith(eqBy(inc), fib)).toEqual(expected);
  });

  it("groups with is successor", () => {
    const expected = [[0, 1], [1, 2, 3], [5], [8], [13], [21]];
    expect(groupWith((a, b) => a + 1 === b, fib)).toEqual(expected);
  });
});
