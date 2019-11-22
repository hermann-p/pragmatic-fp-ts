"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("./Either");
const Maybe_1 = require("./Maybe");
describe("Either", () => {
    const throwError = (_) => {
        throw new Error("BOOM!");
    };
    const dontThrow = (x) => x;
    const good = Either_1.eitherNullable("result");
    const bad = Either_1.eitherNullable(null);
    it("can be constructed from different value", () => {
        expect(Either_1.either(1)).toBeInstanceOf(Either_1.Right);
        expect(Either_1.either(null)).toBeInstanceOf(Either_1.Right);
        const pred = (x) => x > 2;
        expect(Either_1.eitherIf(pred)(5)).toBeInstanceOf(Either_1.Right);
        expect(Either_1.eitherIf(pred)(2)).toBeInstanceOf(Either_1.Left);
        expect(Either_1.eitherNullable(1)).toBeInstanceOf(Either_1.Right);
        expect(Either_1.eitherNullable(null)).toBeInstanceOf(Either_1.Left);
        expect(Either_1.eitherNullable(null).getReason()).toBeTruthy();
        expect(Either_1.either(Maybe_1.just(5))).toBeInstanceOf(Either_1.Right);
        expect(Either_1.either(Maybe_1.nothing())).toBeInstanceOf(Either_1.Left);
        expect(Maybe_1.just(5).toEither()).toBeInstanceOf(Either_1.Right);
        expect(Maybe_1.nothing().toEither()).toBeInstanceOf(Either_1.Left);
    });
    it("wraps values", () => {
        expect(Either_1.either(1).getValue()).toBe(1);
        expect(Either_1.either(null).getValue()).toBe(null);
        expect(() => Either_1.eitherNullable(null).getValue()).toThrow();
        expect(Either_1.eitherNullable(null).getReason()).toBeDefined();
        expect(() => Either_1.either(1).getReason()).toThrow();
        expect(good.getValueOr("fallback")).toBe("result");
        expect(bad.getValueOr("fallback")).toBe("fallback");
    });
    it("binds safely", () => {
        expect(good.bind(dontThrow)).toBeInstanceOf(Either_1.Right);
        expect(good.bind(throwError)).toBeInstanceOf(Either_1.Left);
        expect(bad.bind(dontThrow)).toBeInstanceOf(Either_1.Left);
        expect(good.bind(throwError).getReason()).toEqual(new Error("BOOM!"));
    });
    it("wraps side effects", () => {
        let n = 0;
        const fxAdd = (_) => n++;
        expect(good.effect(fxAdd).getValue()).toBe("result");
        expect(bad.effect(fxAdd)).toBeInstanceOf(Either_1.Left);
        expect(n).toBe(1);
    });
    it("works as branching", () => {
        const pattern = {
            left: () => "left branch",
            right: (_) => "right branch",
        };
        expect(good.match(pattern).getValue()).toEqual("right branch");
        expect(bad.match(pattern).getValue()).toEqual("left branch");
        expect(good
            .match(pattern)
            .bind(throwError)
            .match(pattern)
            .getValue()).toEqual("left branch");
    });
    it("can filter with predicates", () => {
        const identity = (x) => x;
        expect(good.filter((x) => x === null)).toBeInstanceOf(Either_1.Left);
        expect(bad.filter(identity)).toBeInstanceOf(Either_1.Left);
        expect(good.filter(identity)).toBeInstanceOf(Either_1.Right);
        expect(good.filter(throwError)).toBeInstanceOf(Either_1.Left);
    });
});
//# sourceMappingURL=Either.test.js.map