import { forkJoin } from "../forkJoin";
import { add } from "../add";

describe("forkJoin()", () => {
  it("should fork and join", () => {
    expect(forkJoin(add)(add(1))(add(1))(1)).toBe(4);
  });
});
