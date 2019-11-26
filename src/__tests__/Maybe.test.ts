import { Just, Maybe, Nothing, just, maybe, maybeFalsy, maybeIf, nothing } from "../Maybe";
import { Predicate } from "../types";
import { either, eitherNullable } from "../Either";

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
    expect(just(1).isMonad()).toBe(true);
    expect(nothing().isMonad()).toBe(true);
    expect(maybeFalsy(0)).toBeInstanceOf(Nothing);
    expect(maybeFalsy(null)).toBeInstanceOf(Nothing);
    expect(maybeFalsy(undefined)).toBeInstanceOf(Nothing);
    expect(maybeFalsy("")).toBeInstanceOf(Nothing);
    expect(maybeFalsy(1)).toBeInstanceOf(Just);
    expect(maybeFalsy("foo")).toBeInstanceOf(Just);
    expect(maybeFalsy({})).toBeInstanceOf(Just);
    expect(maybeFalsy(just(0))).toBeInstanceOf(Nothing);
    expect(maybeFalsy(just(""))).toBeInstanceOf(Nothing);
    expect(maybeFalsy(just(null))).toBeInstanceOf(Nothing);
    expect(maybeFalsy(just(undefined))).toBeInstanceOf(Nothing);
    expect(maybeFalsy(nothing())).toBeInstanceOf(Nothing);

    const pred = (x: number) => (typeof x === "number" && x < 0) || x % 2 === 0;
    expect(maybeIf(pred)(5)).toBeInstanceOf(Nothing);
    expect(maybeIf(pred)(4)).toBeInstanceOf(Just);
    expect(maybeIf(pred)(null as any)).toBeInstanceOf(Nothing);
    expect(maybeIf(pred)(just(5))).toBeInstanceOf(Nothing);
    expect(maybeIf(pred)(just(4))).toBeInstanceOf(Just);
    expect(maybeIf(nothing<Predicate<any>>())(just(5))).toBeInstanceOf(Nothing);
    expect(maybeIf(null as any)(5)).toBeInstanceOf(Nothing);

    expect(maybe(either(5))).toBeInstanceOf(Just);
    expect(maybe(either(null))).toBeInstanceOf(Nothing);
    expect(maybe(eitherNullable(null))).toBeInstanceOf(Nothing);
  });

  it("composes", () => {
    expect(
      maybe(5)
        .bind<number>((x: number) => x + 1)
        .getValue()
    ).toBe(6);
  });

  it("delivers default values", () => {
    expect(maybe(5).getValueOr(7)).toBe(5);
    expect(maybe<any>(null).getValueOr(7)).toBe(7);
    expect(
      just(5)
        .bind<number>(() => (null as any) as number)
        .getValueOr(7)
    ).toBe(7);

    expect(() => nothing().getValue()).toThrow();
    expect(
      nothing()
        .bind<number>(() => (null as any) as number)
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
