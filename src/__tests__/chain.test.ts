import { chain } from "../main";

describe("Chain monad", () => {
  it("chains methods", () => {
    const result = chain(12)
      .bind((x) => x + 1)
      .bind((x) => x * 2)
      .getValue();

    expect(result).toBe(26);
  });

  it("has JS-typical default value checks", () => {
    expect(chain(null as any).getValueOr("something")).toEqual("something");
    expect(chain(true).getValueOr(false)).toBe(true);
    expect(chain(false).getValueOr(true)).toBe(true);
  });

  it("does no error processing", () => {
    expect(() => chain({}).bind((x: any) => x.sayHello())).toThrow();
  });
});
