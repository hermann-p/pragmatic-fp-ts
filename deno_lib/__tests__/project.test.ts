import { project } from "../main.ts";

describe("procject()", () => {
  it("projects values", () => {
    const abby = { name: "Abby", age: 7, hair: "blond", grade: 2 };
    const fred = { name: "Fred", age: 12, hair: "brown", grade: 7 };
    const kids = [abby, fred];
    const expected = [
      { name: "Abby", grade: 2 },
      { name: "Fred", grade: 7 },
    ];

    expect(
      project<typeof abby, keyof typeof abby>(["name", "grade"])(kids)
    ).toEqual(expected);
    expect(project(["name", "grade"], kids)).toEqual(expected);
  });
});
