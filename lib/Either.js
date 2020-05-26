"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const types_1 = require("./types");
class Left extends types_1.Monad {
    constructor(errVal) {
        super();
        this.errorValue = errVal;
    }
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
        throw new Error(`Can not get value of Left(${String(this.errorValue)})`);
    }
    getValueOr(alt) {
        return alt;
    }
    match(matcher) {
        return either(matcher.left(this.errorValue));
    }
}
exports.Left = Left;
class Right extends types_1.Monad {
    constructor(value) {
        super();
        this.value = value;
    }
    bind(fn) {
        try {
            const result = fn(this.value);
            return either(main_1.getValue(result));
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
    filter(fn) {
        try {
            return fn(this.value) ? this : left(new Error("Did not pass filter"));
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
        return either(matcher.right(this.value));
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
            : new Left(new Error("Initially nil"))
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
