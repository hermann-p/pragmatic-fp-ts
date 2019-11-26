"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("./Maybe");
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
const Either_1 = require("./Either");
const getRaw = (key, path, obj) => {
    const value = obj.bind((input) => input[key]);
    return predicates_1.isEmpty(path) ? value : getRaw(path[0], path.slice(1), value);
};
exports.get = (path) => (container) => {
    try {
        const pathValue = tools_1.getMonadValue(path);
        return getRaw(pathValue[0], pathValue.slice(1), Maybe_1.maybe(container));
    }
    catch (_a) {
        return Maybe_1.nothing();
    }
};
exports.keys = (obj) => Maybe_1.maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.keys(o))
    .filter(predicates_1.isNotEmpty);
exports.mapKeys = (fn) => (obj) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(obj)
        .filter((o) => !(o instanceof Array) && typeof o !== "string")
        .bind((o) => {
        const _keys = exports.keys(o).getValue();
        return _keys.reduce((accum, key) => {
            accum[fn(key)] = o[key];
            return accum;
        }, {});
    })
    : Maybe_1.nothing();
exports.mapValues = (fn) => (obj) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(obj).bind((o) => {
        const _keys = exports.keys(o).getValue();
        return _keys.reduce((accum, key) => {
            const value = Either_1.either(o[key])
                .bind(fn)
                .getValueOr(o[key]);
            accum[key] = value;
            return accum;
        }, {});
    })
    : Maybe_1.nothing();
exports.mapFilterValues = (fn) => (obj) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(obj).bind((o) => {
        const _keys = exports.keys(o).getValue();
        return _keys.reduce((accum, key) => {
            const value = Either_1.either(o[key])
                .bind(fn)
                .getValueOr(undefined);
            accum[key] = value;
            return accum;
        }, {});
    })
    : Maybe_1.nothing();
//# sourceMappingURL=object.js.map