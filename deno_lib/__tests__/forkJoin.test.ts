import { forkJoin } from "../forkJoin.ts";
import { add } from "../add.ts";

describe("forkJoin()", () => {
  it("should fork and join", () => {
    expect(forkJoin(add)(add(1))(add(1))(1)).toBe(4);
  });
});
