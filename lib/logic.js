"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
const Maybe_1 = require("./Maybe");
const m = __importStar(require("mori"));
const array_1 = require("./array");
/**
 * Does any of the array of predicates pass when applied to the value?
 * ramda calls this `anyPass`, but we want to avoid `any` in TypeScript
 */
exports.somePass = (predicates) => (value) => {
    const _value = value && tools_1.getMonadValue(value);
    return Maybe_1.maybe(predicates)
        .bind((p) => p.reduce((result, predicate) => result || predicate(_value), false))
        .getValueOr(false);
};
/**
 * Does any value in the collection pass the predicate?
 * ramda calls this `any`, but we want to avoid that word in TypeScript
 */
exports.some = (pred) => (coll) => predicates_1.isFunction(pred)
    ? Maybe_1.maybe(coll)
        .bind((c) => c.reduce((result, value) => result ||
        Maybe_1.maybe(value)
            .bind(pred)
            .getValueOr(true), false))
        .getValueOr(true)
    : true;
/**
 * Does the value pass all predicates in the array?
 */
exports.allPass = (predicates) => (value) => {
    const _value = value && tools_1.getMonadValue(value);
    return predicates.reduce((result, predicate) => result && predicate(_value), true);
};
/**
 * Do all values in the array pass the predicate?
 */
exports.every = (pred) => (coll) => predicates_1.isFunction(pred)
    ? Maybe_1.maybe(coll)
        .bind((c) => c.reduce((result, value) => result &&
        Maybe_1.maybe(value)
            .bind(pred)
            .getValueOr(true), true))
        .getValueOr(false)
    : true;
exports.equals = (a) => (b) => {
    try {
        return m.equals(m.toClj(tools_1.getMonadValue(a)), m.toClj(tools_1.getMonadValue(b)));
    }
    catch (_a) {
        return false;
    }
};
exports.eqShallow = (a) => (b) => {
    try {
        return tools_1.getMonadValue(a) === tools_1.getMonadValue(b);
    }
    catch (_a) {
        return a === b;
    }
};
exports.cond = (conditions) => (value) => array_1.find(([condition]) => condition(tools_1.getMonadValue(value)))(conditions).bind(([_, fn]) => fn(tools_1.getMonadValue(value)));
