"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const types_1 = require("./types");
class Left extends types_1.Monad {
    constructor(errVal) {
        super();
        this.bind = this._;
        this.errorValue = errVal;
    }
    _(_, _hint) {
        return this;
    }
    bindM(_) {
        return this;
    }
    filter(_, _hint) {
        return this;
    }
    effect(_) {
        return this;
    }
    getValue() {
        throw new Error(`Can not get value of Left(${String(this.errorValue)})`);
    }
    getValueOr(alt) {
        return alt;
    }
    match(matcher) {
        return matcher.left ? either(matcher.left(this.errorValue)) : this;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
    getReason() {
        return this.errorValue;
    }
}
exports.Left = Left;
class Right extends types_1.Monad {
    constructor(value) {
        super();
        this.bind = this._;
        this.value = value;
    }
    _(fn, hint) {
        try {
            const result = fn(this.value);
            const bound = either(main_1.getValue(result));
            return bound.isLeft() && hint ? left(hint) : bound;
        }
        catch (err) {
            return left(err);
        }
    }
    bindM(fn) {
        try {
            const result = fn(this);
            return either(main_1.getValue(result));
        }
        catch (err) {
            return left(err);
        }
    }
    filter(fn, hint) {
        try {
            return fn(this.value)
                ? this
                : left(hint instanceof Error ? hint : new types_1.InvalidValueError(hint));
        }
        catch (err) {
            return left(new Error(`Exception while filtering: ${err.text}`));
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
        var _a;
        const m = (_a = matcher.right, (_a !== null && _a !== void 0 ? _a : main_1.identity));
        return either(m(this.value));
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
    getReason() {
        throw new Error("Can not get error reason for Right");
    }
}
exports.Right = Right;
function left(errVal) {
    return new Left(errVal);
}
exports.left = left;
function right(value) {
    return new Right(value);
}
exports.right = right;
function either(value, errVal) {
    const innerValue = main_1.getValue(value);
    return main_1.isNil(innerValue)
        ? errVal
            ? new Left(errVal)
            : new Left(new types_1.NilError())
        : new Right(innerValue);
}
exports.either = either;
function isLeft(el) {
    return el instanceof Left;
}
exports.isLeft = isLeft;
function isRight(el) {
    return el instanceof Right;
}
exports.isRight = isRight;
function isEither(el) {
    return isLeft(el) || isRight(el);
}
exports.isEither = isEither;
exports.throwLeftAsError = {
    right: (data) => data,
    left: (reason) => {
        throw reason instanceof Error ? reason : new Error(reason);
        return reason;
    },
};
