"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NilError extends Error {
    constructor(message = "Encountered NIL") {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.NilError = NilError;
class InvalidValueError extends Error {
    constructor(moreDetails = "") {
        const baseMsg = "Value was invalid";
        super(moreDetails ? `${baseMsg}: ${moreDetails}` : baseMsg);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.InvalidValueError = InvalidValueError;
class Monad {
    to(transform) {
        return transform(this);
    }
}
exports.Monad = Monad;
