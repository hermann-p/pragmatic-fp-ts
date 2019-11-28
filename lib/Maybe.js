"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("./Either");
const Monad_1 = require("./Monad");
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
class Just extends Monad_1.Monad {
    constructor(value) {
        super();
        this.value = tools_1.getMonadValue(value);
    }
    getValue() {
        return this.value;
    }
    getValueOr(_) {
        return this.getValue();
    }
    isJust() {
        return true;
    }
    isNothing() {
        return false;
    }
    isMonad() {
        return true;
    }
    isMaybe() {
        return true;
    }
    bind(fn) {
        try {
            const result = fn(this.value);
            return exports.maybe(result);
        }
        catch (err) {
            return exports.nothing();
        }
    }
    match(match) {
        try {
            return exports.just(match.just(this.value));
        }
        catch (err) {
            return exports.nothing();
        }
    }
    filter(pred) {
        return pred(this.value) ? this : exports.nothing();
    }
    effect(fn) {
        const { value } = this;
        fn(value);
        return this;
    }
    toEither() {
        return Either_1.right(this.value);
    }
    toString() {
        return `Just(${JSON.stringify(this.value)})`;
    }
}
exports.Just = Just;
class Nothing {
    getValue() {
        throw new Error("Can not get value of Nothing");
    }
    getValueOr(alternative) {
        return alternative instanceof Just ? alternative.getValue() : alternative;
    }
    isJust() {
        return false;
    }
    isNothing() {
        return true;
    }
    isMonad() {
        return true;
    }
    isMaybe() {
        return true;
    }
    bind(_) {
        return this; // prefer ugly code over `new Nothing<B>()`
    }
    match(match) {
        try {
            return exports.just(match.nothing());
        }
        catch (_a) {
            return exports.nothing();
        }
    }
    filter(_) {
        return this;
    }
    effect(_) {
        return this;
    }
    toEither() {
        return Either_1.left("Cast from nothing");
    }
    toString() {
        return "Nothing";
    }
}
exports.Nothing = Nothing;
exports.just = (value) => new Just(value);
exports.nothing = () => new Nothing();
exports.maybe = (value) => predicates_1.isMaybe(value)
    ? value // avoid re-casting monads
    : predicates_1.isMonad(value)
        ? predicates_1.isSome(value)
            ? exports.maybe(tools_1.getMonadValue(value))
            : exports.nothing()
        : predicates_1.isNil(value)
            ? exports.nothing()
            : exports.just(value);
exports.maybeFalsy = (value) => exports.maybe(value).filter((v) => !!v);
exports.maybeIf = (predicate) => (value) => {
    const pred = exports.maybe(predicate)
        .filter((fn) => typeof fn === "function")
        .getValueOr((_) => false);
    return exports.maybe(value).filter(pred);
};
//# sourceMappingURL=Maybe.js.map