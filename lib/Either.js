(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Maybe", "./tools", "./predicates"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Maybe_1 = require("./Maybe");
    const tools_1 = require("./tools");
    const predicates_1 = require("./predicates");
    class Right {
        constructor(value) {
            this.value = tools_1.getMonadValue(value);
        }
        bind(fn) {
            try {
                const { value } = this;
                return new Right(fn(value));
            }
            catch (err) {
                return new Left(err);
            }
        }
        match(pattern) {
            try {
                const { value } = this;
                return new Right(pattern.right(value));
            }
            catch (err) {
                return new Left(err);
            }
        }
        getValue() {
            return this.value;
        }
        getValueOr() {
            return this.getValue();
        }
        getReason() {
            throw new Error("Can't get reason from Right");
        }
        effect(fx) {
            try {
                const { value } = this;
                fx(value);
                return this;
            }
            catch (err) {
                return new Left(err);
            }
        }
        isMonad() {
            return true;
        }
        isLeft() {
            return false;
        }
        isRight() {
            return true;
        }
        toMaybe() {
            return Maybe_1.just(this.value);
        }
        toString() {
            return `Right(${JSON.stringify(this.value)})`;
        }
    }
    exports.Right = Right;
    class Left {
        constructor(reason) {
            this.reason = reason;
        }
        bind(_) {
            return this;
        }
        match(pattern) {
            try {
                return new Right(pattern.left());
            }
            catch (err) {
                return new Left(err);
            }
        }
        getValue() {
            throw new Error("Can't get value of Left");
        }
        getValueOr(alternative) {
            return alternative;
        }
        getReason() {
            return this.reason;
        }
        effect(_) {
            return this;
        }
        isMonad() {
            return true;
        }
        isLeft() {
            return true;
        }
        isRight() {
            return false;
        }
        toMaybe() {
            return Maybe_1.nothing();
        }
        toString() {
            return `Left(${JSON.stringify(this.reason)})`;
        }
    }
    exports.Left = Left;
    exports.right = (value) => new Right(tools_1.getMonadValue(value));
    exports.left = (reason) => new Left(reason);
    exports.either = (value) => predicates_1.isEither(value)
        ? value
        : predicates_1.isMonad(value)
            ? predicates_1.isSome(value)
                ? exports.right(value.getValue())
                : exports.left("Converted from Left-like")
            : exports.right(value);
    exports.eitherIf = (pred) => (value) => {
        const _value = (!predicates_1.isNil(value) ? tools_1.getMonadValue(value) : value);
        try {
            return pred(_value)
                ? exports.right(value)
                : exports.left(`<${typeof _value}>${_value} did not satisfy predicate ${pred.name}`);
        }
        catch (err) {
            return exports.left(err);
        }
    };
    exports.eitherNullable = (value) => exports.eitherIf(predicates_1.isSome)(value);
});
//# sourceMappingURL=Either.js.map