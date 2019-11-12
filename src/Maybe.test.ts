import { just, maybe, nothing, Maybe } from "./Maybe";

// import { Transducer } from "./types";

describe("Maybe", () => {
  const five = just(5);
  const throwError = (_: any): string => {
    throw new Error("Boom!");
    return "Error not caught";
  };
  const matchers = {
    just: (_: any) => "success",
    nothing: () => "error",
  };

  it("can be constructed from all kinds of values", () => {
    expect(maybe(5).isMaybe()).toBe(true);
    expect(maybe(null).isMaybe()).toBe(true);
    expect(maybe(just(5)).getValue()).toBe(5);
    expect(maybe(nothing()).isNothing()).toBe(true);
  });

  it("composes", () => {
    expect(
      maybe(5)
        .bind((x) => x + 1)
        .getValue()
    ).toBe(6);
  });

  it("delivers default values", () => {
    expect(maybe(5).getValueOr(7)).toBe(5);
    expect(maybe<any>(null).getValueOr(7)).toBe(7);
    expect(
      just(5)
        .bind((_) => (null as any) as number)
        .getValueOr(7)
    ).toBe(7);

    expect(() => nothing().getValue()).toThrow();
    expect(
      nothing()
        .bind(() => (null as any) as number)
        .getValueOr(7)
    ).toBe(7);

    expect(nothing().getValueOr(just(7))).toBe(7);
  });

  it("catches Exceptions", () => {
    const fiveBomb = five.bind(throwError);
    expect(five.isNothing()).toBe(false);
    expect(five.isJust()).toBe(true);

    expect(fiveBomb.isNothing()).toBe(true);
    expect(fiveBomb.isJust()).toBe(false);

    expect(five.match({ nothing: () => throwError(null), just: throwError }).isNothing()).toBe(
      true
    );
    expect(
      (nothing().match({ nothing: () => throwError(null), just: throwError }) as Maybe<
        any
      >).isNothing()
    ).toBe(true);
  });

  it("matches return cases", () => {
    expect(five.match(matchers).getValue()).toEqual("success");
    console.log(five.bind(throwError).match(matchers));
    expect(
      five
        .bind(throwError)
        .match(matchers)
        .getValue()
    ).toEqual("error");

    expect(
      maybe(5)
        .bind(throwError)
        .match(matchers)
        .getValue()
    ).toEqual("error");

    expect(
      maybe(5)
        .match(matchers)
        .getValue()
    ).toEqual("success");
  });
});
