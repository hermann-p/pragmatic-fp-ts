"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("./Either");
const logic_1 = require("./logic");
const Maybe_1 = require("./Maybe");
const object_1 = require("./object");
const tools_1 = require("./tools");
exports.isNil = (value) => value === undefined || value === null;
exports.isFunction = (value) => typeof value === "function";
exports.isString = (value) => typeof value === "string";
exports.isArray = (value) => value instanceof Array;
exports.isNumber = (value) => typeof value === "number" && !isNaN(value);
exports.isObject = (value) => typeof value === "object" && !exports.isArray(value);
exports.isEmpty = (coll) => exports.isNil(coll)
    ? false
    : (exports.isArray(coll) && coll.length === 0) ||
        (exports.isObject(coll) && Object.keys(coll).length === 0) ||
        (exports.isString(coll) && coll === "");
exports.isNotEmpty = (coll) => !exports.isEmpty(coll);
exports.isJust = (value) => value instanceof Maybe_1.Just;
exports.isNothing = (value) => value instanceof Maybe_1.Nothing;
exports.isMaybe = (value) => exports.isJust(value) || exports.isNothing(value);
exports.isRight = (value) => value instanceof Either_1.Right;
exports.isLeft = (value) => value instanceof Either_1.Left;
exports.isEither = (value) => exports.isLeft(value) || exports.isRight(value);
exports.isMonad = (value) => exports.isMaybe(value) || exports.isEither(value);
exports.isSome = (value) => !exports.isNil(value) && !exports.isNothing(value) && !exports.isLeft(value);
exports.where = (template) => (dict) => {
    try {
        const _dict = tools_1.getMonadValue(dict);
        return Maybe_1.maybe(template)
            .bind(object_1.reduceKV((accum, key, predicate) => {
            return accum && predicate(_dict[key]);
        })(true))
            .getValueOr(false);
    }
    catch (_a) {
        return false;
    }
};
exports.whereEq = (template) => (dict) => {
    try {
        const _dict = tools_1.getMonadValue(dict);
        return object_1.reduceKV((accum, key, value) => accum && logic_1.equals(_dict[key])(value))(true)(template).getValueOr(false);
    }
    catch (_a) {
        return false;
    }
};
