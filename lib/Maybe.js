"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const types_1 = require("./types");
class Nothing extends types_1.Monad {
    bind(_) {
        return this;
    }
    bindM(_) {
        return this;
    }
    filter(_) {
        return this;
    }
    effect(_) {
        return this;
    }
    getValue() {
        throw new Error("Can not get value of Nothing");
    }
    getValueOr(alt) {
        return alt;
    }
    match(matcher) {
        return exports.maybe(matcher.nothing());
    }
}
exports.Nothing = Nothing;
class Just extends types_1.Monad {
    constructor(value) {
        super();
        this.value = value;
    }
    bind(fn) {
        try {
            const result = fn(this.value);
            return exports.maybe(main_1.getValue(result));
        }
        catch (err) {
            return exports.nothing();
        }
    }
    bindM(fn) {
        try {
            const result = fn(this);
            return exports.maybe(main_1.getValue(result));
        }
        catch (err) {
            return exports.nothing();
        }
    }
    filter(fn) {
        try {
            return fn(this.value) ? this : exports.nothing();
        }
        catch (_a) {
            return exports.nothing();
        }
    }
    effect(fn) {
        try {
            fn(this.value);
        }
        catch (err) { }
        return this;
    }
    getValue() {
        return this.value;
    }
    getValueOr(_) {
        return this.value;
    }
    match(matcher) {
        return exports.maybe(matcher.just(this.value));
    }
}
exports.Just = Just;
exports.just = (value) => {
    return new Just(value);
};
exports.nothing = () => {
    return new Nothing();
};
exports.maybe = (value) => {
    const extractedValue = main_1.getValue(value);
    return extractedValue === null || extractedValue === undefined
        ? exports.nothing()
        : exports.just(extractedValue);
};
exports.isJust = (x) => x instanceof Just;
exports.isNothing = (x) => x instanceof Nothing;
exports.isMaybe = (x) => exports.isJust(x) || exports.isNothing(x);
