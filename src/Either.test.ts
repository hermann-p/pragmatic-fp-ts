import { Left, Right, either, eitherIf, eitherNullable, EitherPattern } from "./Either";
import { just, nothing } from "./Maybe";

describe("Either", () => {
  const throwError = (_: any) => {
    throw new Error("BOOM!");
  };

  const dontThrow = (x: any) => x;

  const good = eitherNullable<string>("result");
  const bad = eitherNullable(null);

  it("can be constructed from different value", () => {
    expect(either(1)).toBeInstanceOf(Right);
    expect(either(null)).toBeInstanceOf(Right);

    const pred = (x: number) => x > 2;
    expect(eitherIf(pred)(5)).toBeInstanceOf(Right);
    expect(eitherIf(pred)(2)).toBeInstanceOf(Left);

    expect(eitherNullable(1)).toBeInstanceOf(Right);
    expect(eitherNullable(null)).toBeInstanceOf(Left);

    expect(eitherNullable(null).getReason()).toBeTruthy();

    expect(either(just(5))).toBeInstanceOf(Right);
    expect(either(nothing())).toBeInstanceOf(Left);

    expect(just(5).toEither()).toBeInstanceOf(Right);
    expect(nothing().toEither()).toBeInstanceOf(Left);
  });

  it("wraps values", () => {
    expect(either(1).getValue()).toBe(1);
    expect(either(null).getValue()).toBe(null);
    expect(() => eitherNullable(null).getValue()).toThrow();

    expect(eitherNullable(null).getReason()).toBeDefined();
    expect(() => either(1).getReason()).toThrow();

    expect(good.getValueOr("fallback")).toBe("result");
    expect(bad.getValueOr("fallback")).toBe("fallback");
  });

  it("binds safely", () => {
    expect(good.bind(dontThrow)).toBeInstanceOf(Right);
    expect(good.bind(throwError)).toBeInstanceOf(Left);
    expect(bad.bind(dontThrow)).toBeInstanceOf(Left);

    expect(good.bind(throwError).getReason()).toEqual(new Error("BOOM!"));
  });

  it("wraps side effects", () => {
    let n = 0;
    const fxAdd = (_?: any) => n++;

    expect(good.effect(fxAdd).getValue()).toBe("result");
    expect(bad.effect(fxAdd)).toBeInstanceOf(Left);

    expect(n).toBe(1);
  });

  it("works as branching", () => {
    const pattern: EitherPattern<any, string> = {
      left: () => "left branch",
      right: (_: any) => "right branch",
    };

    expect(good.match(pattern).getValue()).toEqual("right branch");
    expect(bad.match(pattern).getValue()).toEqual("left branch");
    expect(
      good
        .match(pattern)
        .bind(throwError)
        .match(pattern)
        .getValue()
    ).toEqual("left branch");
  });

  it("can filter with predicates", () => {
    const identity = (x: any) => x;
    expect(good.filter((x: any) => x === null)).toBeInstanceOf(Left);
    expect(bad.filter(identity)).toBeInstanceOf(Left);
    expect(good.filter(identity)).toBeInstanceOf(Right);
    expect(good.filter(throwError)).toBeInstanceOf(Left);
  });
});
