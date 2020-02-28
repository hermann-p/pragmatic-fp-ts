"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("./predicates");
const Maybe_1 = require("./Maybe");
exports.getMonadValue = (input, alternate) => {
    if (predicates_1.isNil(input)) {
        return null;
    }
    else if (predicates_1.isFunction(input.getValue)) {
        return typeof alternate === "undefined"
            ? input.getValue()
            : input.getValueOr(alternate);
    }
    else {
        return input;
    }
};
exports.toNumber = (value) => Maybe_1.maybe(value)
    .bind((v) => parseFloat(v))
    .filter(predicates_1.isNumber);
exports.toInteger = (value) => Maybe_1.maybe(value)
    .bind((v) => parseInt(v, 10))
    .filter(predicates_1.isNumber);
exports.toString = (value) => Maybe_1.maybe(value).bind((v) => String(v));
exports.tap = (effect) => (value) => {
    effect(value);
    return value;
};
exports.spy = (message) => exports.tap((x) => console.log((message || "I spy") + ":", x));
