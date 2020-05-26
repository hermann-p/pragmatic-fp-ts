import * as l from "../main";

describe("pipe()", () => {
  it("composes arbitrary functions", () => {
    expect(l.pipe(l.inc, String)(1)).toEqual("2");
    expect(l.pipe(l.inc, (x: any) => [x], l.adjust(0, l.inc))(0)).toEqual([2]);
  });
});
