import { cycle, zip } from "../main";

describe("cycle()", () => {
  it("should repeat array elements endlessly", () => {
    const seq = cycle(["a", "b"]);
    expect(seq.length).toBe(Number.POSITIVE_INFINITY);

    for (let i = 0; i < 20; ++i) expect(seq[i]).toEqual(i % 2 == 0 ? "a" : "b");
  });

  it("should work correctly with zip constraints", () => {
    const seq = zip([0, 1, 2], cycle(["a"]));
    expect(seq.length).toBe(3);
    seq.forEach(([n, c], idx) => {
      expect(n).toBe(idx);
      expect(c).toEqual("a");
    });

    const seq2 = zip(cycle(["a"]), [0, 1, 2]);
    seq2.forEach(([c, n], idx) => {
      expect(n).toBe(idx);
      expect(c).toEqual("a");
    });
  });
});
