import { eager, lazy } from "../trampoline.ts";

describe("tail call optimisation tools", () => {
  const countTo = (goal: number) => {
    const doCount = lazy<number>((g: number, c: number): number =>
      g === c ? c : doCount(g, c + 1)
    );
    return eager(doCount)(goal, 0);
  };

  it("should recur and terminate correctly", () => {
    expect(countTo(10)).toBe(10);
  });

  it("should recur deeply without crashing", () => {
    expect(countTo(1e7)).toBe(1e7);
  });
});
