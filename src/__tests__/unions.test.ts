import { uniq, uniqBy, union, unionBy } from "../main";

describe("unions", () => {
  const multiples = [1, 2, 3, 2, 1, 3, 4];
  const more = [4, 3, 2, 8];
  const uniques = [1, 2, 3, 4];
  const united = [...uniques, 8];

  it("uniq()", () => {
    expect(uniq(multiples)).toEqual(uniques);
  });

  it("uniqBy()", () => {
    expect(uniqBy(String)(multiples)).toEqual(uniques);
  });

  it("union()", () => {
    expect(union(multiples)(more)).toEqual(united);
  });

  it("unionBy", () => {
    expect(unionBy(String)(multiples)(more)).toEqual(united);
  });
});
