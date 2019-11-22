"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
const Maybe_1 = require("./Maybe");
exports.somePass = (predicates) => (value) => {
    const _value = value && tools_1.getMonadValue(value);
    return Maybe_1.maybe(predicates)
        .bind((p) => p.reduce((result, predicate) => result || predicate(_value), false))
        .getValueOr(false);
};
exports.some = (pred) => (coll) => predicates_1.isFunction(pred)
    ? Maybe_1.maybe(coll)
        .bind((c) => c.reduce((result, value) => result ||
        Maybe_1.maybe(value)
            .bind(pred)
            .getValueOr(true), false))
        .getValueOr(true)
    : true;
exports.allPass = (predicates) => (value) => {
    const _value = value && tools_1.getMonadValue(value);
    return predicates.reduce((result, predicate) => result && predicate(_value), true);
};
exports.every = (pred) => (coll) => predicates_1.isFunction(pred)
    ? Maybe_1.maybe(coll).bind((c) => c.reduce((result, value) => result &&
        Maybe_1.maybe(value)
            .bind(pred)
            .getValueOr(true), true))
    : true;
//# sourceMappingURL=logic.js.map