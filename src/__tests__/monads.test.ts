import * as l from "../main";
import {
  Chain,
  chain,
  either,
  identity,
  Just,
  just,
  Left,
  left,
  maybe,
  Nothing,
  nothing,
  Right,
  right,
  M,
} from "../main";

describe("monads", () => {
  describe("Maybe", () => {
    expect(maybe(1)).toBeInstanceOf(Just);
    expect(maybe(null)).toBeInstanceOf(Nothing);
    expect(maybe(undefined)).toBeInstanceOf(Nothing);

    expect(just(4).bind(() => null)).toBeInstanceOf(Nothing);
    expect(nothing().bind(() => 1)).toBeInstanceOf(Nothing);

    expect(
      just("just")
        .match({ just: identity, nothing: () => "nothing" })
        .getValue()
    ).toBe("just");

    expect(
      nothing()
        .match({ just: identity, nothing: () => "nothing" })
        .getValue()
    ).toBe("nothing");

    expect(just(1).filter(() => true)).toBeInstanceOf(Just);
    expect(just(1).filter(() => false)).toBeInstanceOf(Nothing);

    expect(nothing().filter(() => true)).toBeInstanceOf(Nothing);

    const x = maybe([1, 2, 3])
      ._(l.find(l.eq(4)))
      ._(l.add(3));
    expect(x).toBeInstanceOf(Nothing);
  });

  describe("Either", () => {
    expect(either(1)).toBeInstanceOf(Right);
    expect(either(null)).toBeInstanceOf(Left);
    expect(either(undefined)).toBeInstanceOf(Left);

    expect(right(4).bind(() => null)).toBeInstanceOf(Left);
    expect(left("Error").bind(() => 1)).toBeInstanceOf(Left);

    expect(
      right("right")
        .match({ right: identity, left: () => "left" })
        .getValue()
    ).toBe("right");

    expect(
      left("Error")
        .match({ right: identity, left: () => "left" })
        .getValue()
    ).toBe("left");

    expect(right(1).filter(() => true)).toBeInstanceOf(Right);
    expect(right(1).filter(() => false)).toBeInstanceOf(Left);

    expect(left("Error").filter(() => true)).toBeInstanceOf(Left);
  });

  describe("transformers", () => {
    it("transforms Maybe to Chain", () => {
      expect(just(5).to(chain)).toBeInstanceOf(Chain);
      expect(nothing().to(chain)).toBeInstanceOf(Chain);
      expect(nothing().to(chain).getValue()).toBe(null);
    });

    it("transforms Maybe to Either", () => {
      expect(just(5).to(either)).toBeInstanceOf(Right);
      expect(just(null).to(either)).toBeInstanceOf(Left);
    });

    it("transforms Chain to Maybe", () => {
      expect(chain(1).to(maybe)).toBeInstanceOf(Just);
      expect(chain(null).to(maybe)).toBeInstanceOf(Nothing);
    });

    it("transforms Chain to Either", () => {
      expect(chain(1).to(either)).toBeInstanceOf(Right);
      expect(chain(null).to(either)).toBeInstanceOf(Left);
    });

    it("transforms Either to Chain", () => {
      expect(left(1).to(chain)).toBeInstanceOf(Chain);
      expect(right(1).to(chain)).toBeInstanceOf(Chain);
    });

    it("transforms Either to Maybe", () => {
      expect(left(1).to(maybe)).toBeInstanceOf(Nothing);
      expect(right(1).to(maybe)).toBeInstanceOf(Just);
    });
  });
});

describe("generic monad functions", () => {
  describe("bind()", () => {
    it("should map just", () => {
      const j = M.bind((x: number) => x + 1)(just(1));
      expect(j.isJust()).toBe(true);
      expect(j.getValue()).toBe(2);
    });
    it("should map nothing", () => {
      const j = M.bind((x: number) => x + 1)(nothing<number>());
      expect(j.isNothing()).toBe(true);
    });
    it("should map right", () => {
      const j = M.bind((x: number) => x + 1)(right<number, any>(1));
      expect(j.isRight()).toBe(true);
      expect(j.getValue()).toBe(2);
    });
    it("should map left", () => {
      const j = M.bind((x: number) => x + 1)(left<any, any>(1));
      expect(j.isLeft()).toBe(true);
    });
    it("should map chain", () => {
      const j = M.bind((x: number) => x + 1)(chain(1));
      expect(j.getValue()).toBe(2);
    });
  });

  describe("bindM()", () => {
    it("should map just", () => {
      const j = M.bindM((x: number) => just(x + 1))(just(1));
      console.log({ j });
      expect(j.isJust()).toBe(true);
      expect(j.getValue()).toBe(2);
    });
    it("should map nothing", () => {
      const j = M.bindM((x: number) => just(x + 1))(nothing<number>());
      expect(j.isNothing()).toBe(true);
    });
    it("should map right", () => {
      const j = M.bindM((x: number) => right(x + 1))(right<number, any>(1));
      expect(j.isRight()).toBe(true);
      expect(j.getValue()).toBe(2);
    });
    it("should map left", () => {
      const j = M.bindM((x: number) => left(x + 1))(right<any, any>(1));
      expect(j.isLeft()).toBe(true);
    });
    it("should map chain", () => {
      const j = M.bindM((x: number) => chain(x + 1))(chain(1));
      expect(j.getValue()).toBe(2);
    });
  });
});
