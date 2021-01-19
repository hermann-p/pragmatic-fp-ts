"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMaybe = exports.isNothing = exports.isJust = exports.maybe = exports.nothing = exports.just = exports.Just = exports.Nothing = void 0;
const main_1 = require("./main");
const types_1 = require("./types");
class Nothing extends types_1.Monad {
    constructor() {
        super(...arguments);
        this.bind = this._;
    }
    _(_) {
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
        return matcher.nothing ? exports.maybe(matcher.nothing()) : this;
    }
    isNothing() {
        return true;
    }
    isJust() {
        return false;
    }
}
exports.Nothing = Nothing;
class Just extends types_1.Monad {
    constructor(value) {
        super();
        this.bind = this._;
        this.value = value;
    }
    _(fn) {
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
        const m = matcher.just || main_1.identity;
        return exports.maybe(m(this.value));
    }
    isNothing() {
        return false;
    }
    isJust() {
        return true;
    }
}
exports.Just = Just;
const just = (value) => {
    return new Just(value);
};
exports.just = just;
const nothing = () => {
    return new Nothing();
};
exports.nothing = nothing;
const maybe = (value) => {
    const extractedValue = main_1.getValue(value);
    return extractedValue === null || extractedValue === undefined
        ? exports.nothing()
        : exports.just(extractedValue);
};
exports.maybe = maybe;
const isJust = (x) => x instanceof Just;
exports.isJust = isJust;
const isNothing = (x) => x instanceof Nothing;
exports.isNothing = isNothing;
const isMaybe = (x) => exports.isJust(x) || exports.isNothing(x);
exports.isMaybe = isMaybe;
