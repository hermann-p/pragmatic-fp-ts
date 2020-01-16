"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("./Maybe");
const Either_1 = require("./Either");
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
const m = __importStar(require("mori"));
const array_1 = require("./array");
// internal implementation detail, not exported
const getRaw = (key, path, obj) => {
    const value = obj.bind((input) => input[key]);
    return predicates_1.isEmpty(path) ? value : getRaw(path[0], path.slice(1), value);
};
// get prop at path in object: get(["foo","bar"])({foo: {bar: 1}}) -> 1
exports.getIn = (path) => (container) => {
    try {
        const pathValue = tools_1.getMonadValue(path);
        return getRaw(pathValue[0], pathValue.slice(1), Maybe_1.maybe(container));
    }
    catch (_a) {
        return Maybe_1.nothing();
    }
};
// get prop of object: get("foo")({foo: 1}) -> 1
exports.get = (prop) => (obj) => Maybe_1.maybe(obj).bind((o) => o[prop]);
// get array of object keys
exports.keys = (obj) => Maybe_1.maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.keys(o))
    .filter(predicates_1.isNotEmpty);
// get array of object values
exports.values = (obj) => Maybe_1.maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.values(o))
    .filter(predicates_1.isNotEmpty);
// Transform field names by fn: mapKeys(toUpperCase)({foo:1,bar:2}) -> {FOO:1,BAR:2}
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
// Reduce over keys and values of an object at the same time.
//   reduceKV(reducer)(initialValue)(object)
exports.reduceKV = (reducer) => (initialValue) => (dict) => Maybe_1.maybe(dict)
    .bind((d) => Object.keys(d).reduce((accum, key) => reducer(accum, key, dict[key]), initialValue))
    .filter(predicates_1.isSome);
// Pick fields from an object if the field name suffices the predicate, synonym to filterKeys
exports.pickBy = (predicate) => (obj) => Maybe_1.maybe(obj)
    .bind(exports.keys)
    .bind((k) => k.filter(predicate))
    .filter(predicates_1.isNotEmpty)
    .bind((_keys) => _keys.reduce((accum, key) => {
    accum[key] = tools_1.getMonadValue(obj)[key];
    return accum;
}, {}));
// Pick fields from an object if the field name suffices the predicate, synonym for pickBy
exports.filterKeys = exports.pickBy;
// pick fields from an object by name
exports.pick = (keysToPick) => (dict) => array_1.reduce((result, key) => {
    result[key] = dict[key];
    return result;
})({})(keysToPick).filter(predicates_1.isNotEmpty);
// pick fields from an object if their values suffice the predicate
exports.pickValuesBy = (predicate) => (dict) => Maybe_1.maybe(Object.keys(dict))
    .bind(array_1.reduce((result, key) => {
    if (predicate(dict[key])) {
        result[key] = dict[key];
    }
    return result;
})({}))
    .filter(predicates_1.isNotEmpty);
// create a new object with fn applied to all the object's fields
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
// Create a new object with fn applied to all the object's
// fields. Remove fields for which fn returned Nothing/nil
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
// set field propName to value: assoc("foo")(1)({bar:2}) -> {foo:1, bar:2}
exports.assoc = (propName) => (value) => (target) => Maybe_1.maybe(target)
    .bind((obj) => m.assoc(m.toClj(obj), propName, tools_1.getMonadValue(value)))
    .bind(m.toJs);
// set field at path to value: assocIn(["foo","bar"])(1)({}) -> {foo: {bar: 1}}
exports.assocIn = (path) => (value) => (target) => Maybe_1.maybe(target)
    .bind((obj) => m.assocIn(m.toClj(obj), path, tools_1.getMonadValue(value)))
    .bind(m.toJs);
// remove prop with name key from object
exports.dissoc = (key) => (value) => Maybe_1.maybe(m.toClj(value))
    .bind((o) => m.dissoc(o, key))
    .bind(m.toJs);
// apply fn to prop at propName
exports.update = (propName) => (fn) => (dict) => Maybe_1.maybe(dict)
    .bind((input) => m.updateIn(m.toClj(input), [propName], fn))
    .bind(m.toJs);
// apply fn to prop at object path
exports.updateIn = (path) => (fn) => (dict) => Maybe_1.maybe(dict)
    .bind((input) => m.updateIn(m.toClj(input), path, fn))
    .bind(m.toJs);
// create an object from key-value pairs
exports.fromPairs = (pairs) => array_1.reduce((dict, [key, value]) => {
    dict[key] = value;
    return dict;
})({})(pairs).filter(predicates_1.isNotEmpty);
// create key-value pairs from the field of an object
exports.toPairs = (dict) => Maybe_1.maybe(dict)
    .bind((d) => {
    const ks = Object.keys(d);
    const vs = Object.values(d);
    return ks.map((key, idx) => [key, vs[idx]]);
})
    .filter(predicates_1.isNotEmpty);
//# sourceMappingURL=object.js.map