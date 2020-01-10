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
const getRaw = (key, path, obj) => {
    const value = obj.bind((input) => input[key]);
    return predicates_1.isEmpty(path) ? value : getRaw(path[0], path.slice(1), value);
};
exports.getIn = (path) => (container) => {
    try {
        const pathValue = tools_1.getMonadValue(path);
        return getRaw(pathValue[0], pathValue.slice(1), Maybe_1.maybe(container));
    }
    catch (_a) {
        return Maybe_1.nothing();
    }
};
exports.get = (prop) => (obj) => Maybe_1.maybe(obj).bind((o) => o[prop]);
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
exports.pickBy = (predicate) => (obj) => Maybe_1.maybe(obj)
    .bind(exports.keys)
    .bind((k) => k.filter(predicate))
    .filter(predicates_1.isNotEmpty)
    .bind((_keys) => _keys.reduce((accum, key) => {
    accum[key] = tools_1.getMonadValue(obj)[key];
    return accum;
}, {}));
exports.filterKeys = exports.pickBy;
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
exports.assoc = (propName) => (value) => (target) => Maybe_1.maybe(target)
    .bind((obj) => m.assoc(m.toClj(obj), propName, tools_1.getMonadValue(value)))
    .bind(m.toJs);
exports.assocIn = (path) => (value) => (target) => Maybe_1.maybe(target)
    .bind((obj) => m.assocIn(m.toClj(obj), path, tools_1.getMonadValue(value)))
    .bind(m.toJs);
exports.dissoc = (key) => (value) => Maybe_1.maybe(m.toClj(value))
    .bind((o) => m.dissoc(o, key))
    .bind(m.toJs);
exports.update = (propName) => (fn) => (dict) => Maybe_1.maybe(dict)
    .bind((input) => m.updateIn(m.toClj(input), [propName], fn))
    .bind(m.toJs);
exports.updateIn = (path) => (fn) => (dict) => Maybe_1.maybe(dict)
    .bind((input) => m.updateIn(m.toClj(input), path, fn))
    .bind(m.toJs);
exports.fromPairs = (pairs) => array_1.reduce((dict, [key, value]) => {
    dict[key] = value;
    return dict;
})({})(pairs).filter(predicates_1.isNotEmpty);
exports.toPairs = (dict) => Maybe_1.maybe(dict)
    .bind((d) => {
    const ks = Object.keys(d);
    const vs = Object.values(d);
    return ks.map((key, idx) => [key, vs[idx]]);
})
    .filter(predicates_1.isNotEmpty);
//# sourceMappingURL=object.js.map