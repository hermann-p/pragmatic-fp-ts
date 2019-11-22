"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("./Maybe");
const Either_1 = require("./Either");
describe("Maybe", () => {
    const five = Maybe_1.just(5);
    const throwError = (_) => {
        throw new Error("Boom!");
        return "Error not caught";
    };
    const matchers = {
        just: (_) => "success",
        nothing: () => "error",
    };
    it("can be constructed from all kinds of values", () => {
        expect(Maybe_1.maybe(5).isMaybe()).toBe(true);
        expect(Maybe_1.maybe(null).isMaybe()).toBe(true);
        expect(Maybe_1.maybe(Maybe_1.just(5)).getValue()).toBe(5);
        expect(Maybe_1.maybe(Maybe_1.nothing()).isNothing()).toBe(true);
        expect(Maybe_1.just(1).isMonad()).toBe(true);
        expect(Maybe_1.nothing().isMonad()).toBe(true);
        expect(Maybe_1.maybeFalsy(0)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(null)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(undefined)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy("")).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(1)).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybeFalsy("foo")).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybeFalsy({})).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybeFalsy(Maybe_1.just(0))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(Maybe_1.just(""))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(Maybe_1.just(null))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(Maybe_1.just(undefined))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeFalsy(Maybe_1.nothing())).toBeInstanceOf(Maybe_1.Nothing);
        const pred = (x) => (typeof x === "number" && x < 0) || x % 2 === 0;
        expect(Maybe_1.maybeIf(pred)(5)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeIf(pred)(4)).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybeIf(pred)(null)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeIf(pred)(Maybe_1.just(5))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeIf(pred)(Maybe_1.just(4))).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybeIf(Maybe_1.nothing())(Maybe_1.just(5))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybeIf(null)(5)).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybe(Either_1.either(5))).toBeInstanceOf(Maybe_1.Just);
        expect(Maybe_1.maybe(Either_1.either(null))).toBeInstanceOf(Maybe_1.Nothing);
        expect(Maybe_1.maybe(Either_1.eitherNullable(null))).toBeInstanceOf(Maybe_1.Nothing);
    });
    it("composes", () => {
        expect(Maybe_1.maybe(5)
            .bind((x) => x + 1)
            .getValue()).toBe(6);
    });
    it("delivers default values", () => {
        expect(Maybe_1.maybe(5).getValueOr(7)).toBe(5);
        expect(Maybe_1.maybe(null).getValueOr(7)).toBe(7);
        expect(Maybe_1.just(5)
            .bind(() => null)
            .getValueOr(7)).toBe(7);
        expect(() => Maybe_1.nothing().getValue()).toThrow();
        expect(Maybe_1.nothing()
            .bind(() => null)
            .getValueOr(7)).toBe(7);
        expect(Maybe_1.nothing().getValueOr(Maybe_1.just(7))).toBe(7);
    });
    it("catches Exceptions", () => {
        const fiveBomb = five.bind(throwError);
        expect(five.isNothing()).toBe(false);
        expect(five.isJust()).toBe(true);
        expect(fiveBomb.isNothing()).toBe(true);
        expect(fiveBomb.isJust()).toBe(false);
        expect(five.match({ nothing: () => throwError(null), just: throwError }).isNothing()).toBe(true);
        expect(Maybe_1.nothing().match({ nothing: () => throwError(null), just: throwError }).isNothing()).toBe(true);
    });
    it("matches return cases", () => {
        expect(five.match(matchers).getValue()).toEqual("success");
        expect(five
            .bind(throwError)
            .match(matchers)
            .getValue()).toEqual("error");
        expect(Maybe_1.maybe(5)
            .bind(throwError)
            .match(matchers)
            .getValue()).toEqual("error");
        expect(Maybe_1.maybe(5)
            .match(matchers)
            .getValue()).toEqual("success");
    });
});
//# sourceMappingURL=Maybe.test.js.map