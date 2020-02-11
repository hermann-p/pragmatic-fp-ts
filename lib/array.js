"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functools_1 = require("./functools");
const Maybe_1 = require("./Maybe");
const predicates_1 = require("./predicates");
const tools_1 = require("./tools");
/**
 * returns first element of an array
 */
exports.head = (coll) => Maybe_1.maybe(coll).bind((arr) => {
    return arr[0];
});
/**
 * returns first element of an array
 */
exports.first = exports.head;
/**
 * returns last element of an array
 */
exports.tail = (coll) => Maybe_1.maybe(coll).bind((arr) => arr[arr.length - 1]);
/**
 * returns last element of an array
 */
exports.last = exports.tail;
const __reverse = (coll) => {
    const arr = [];
    for (let i = coll.length - 1; i >= 0; --i)
        arr.push(coll[i]);
    return arr;
};
/**
 * Reverse elements of an array
 * reverse([1,2,3])  ->  [3,2,1]
 */
exports.reverse = (coll) => Maybe_1.maybe(coll).bind(__reverse);
const __take = (n) => (coll) => {
    const arr = [];
    for (let i = 0; i < n && coll[i]; ++i)
        arr.push(coll[i]);
    return arr;
};
/**
 * get n first elements from an array
 */
exports.take = (n) => (coll) => {
    const N = tools_1.getMonadValue(n);
    return N < 1
        ? Maybe_1.nothing()
        : Maybe_1.maybe(coll)
            .bind(__take(N))
            .filter(predicates_1.isNotEmpty);
};
const __takeWhile = (pred) => (coll) => {
    const arr = [];
    for (let i = 0; pred(coll[i]); ++i)
        arr.push(coll[i]);
    return arr;
};
/**
 * take elements from array while pred is true
 */
exports.takeWhile = (pred) => (coll) => predicates_1.isFunction(pred)
    ? Maybe_1.maybe(coll)
        .bind(__takeWhile(pred))
        .filter(predicates_1.isNotEmpty)
    : Maybe_1.nothing();
const __sortBy = (compare) => (coll) => coll.sort((a1, a2) => {
    const cmp1 = compare(a1);
    const cmp2 = compare(a2);
    return cmp1 > cmp2 ? 1 : cmp1 === cmp2 ? 0 : -1;
});
/**
 * Sort array elements by comparing values generated from elements by compare function
 */
exports.sortBy = (compare) => (coll) => predicates_1.isFunction(compare)
    ? Maybe_1.maybe(coll)
        .bind(__sortBy(compare))
        .filter(predicates_1.isNotEmpty)
    : Maybe_1.nothing();
/**
 * Map Mappable over a collection. Safe in the collection itself, not
 * its values
 **/
exports.map = (fn) => (coll) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(coll)
        .bind((c) => c.map((a) => Maybe_1.maybe(a)
        .bind(fn)
        .getValue()))
        .filter(predicates_1.isNotEmpty)
    : Maybe_1.nothing();
const __mapOr = (def, fn) => (coll) => coll.map((a) => Maybe_1.maybe(a)
    .bind(fn)
    .getValueOr(def));
/**
 * Map Mappable over a collection. Safe in the collection and its values
 **/
exports.mapOr = (defaultValue) => (fn) => (coll) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(coll)
        .bind(__mapOr(defaultValue, fn))
        .filter(predicates_1.isNotEmpty)
    : Maybe_1.nothing();
/**
 * Map Mappable over a collection, filtering out Nothings
 */
exports.mapJust = (fn) => (coll) => predicates_1.isFunction(fn)
    ? Maybe_1.maybe(coll)
        .filter(predicates_1.isNotEmpty)
        .bind((c) => {
        const arr = [];
        for (let i = 0; i < c.length; ++i) {
            Maybe_1.maybe(c[i])
                .bind(fn)
                .effect((value) => arr.push(value));
        }
        return arr;
    })
        .filter(predicates_1.isNotEmpty)
    : Maybe_1.nothing();
function filter(pred) {
    return (coll) => Maybe_1.maybe(coll)
        .bind((c) => c.filter((a) => Maybe_1.maybe(a)
        .bind(pred)
        .getValueOr(false)))
        .filter(predicates_1.isNotEmpty);
}
exports.filter = filter;
function reject(pred) {
    return filter(functools_1.invert(pred));
}
exports.reject = reject;
function isIn(coll) {
    return (elem) => Maybe_1.maybe(coll)
        .bind((c) => c.includes(tools_1.getMonadValue(elem)))
        .getValueOr(false);
}
exports.isIn = isIn;
function contains(elem) {
    return (coll) => isIn(coll)(elem);
}
exports.contains = contains;
exports.includes = contains;
/**
 * Insert a single element before first element of an array
 */
exports.cons = (elem) => (coll) => Maybe_1.maybe(coll).bind((c) => [tools_1.getMonadValue(elem), ...c]);
/**
 * Insert a single element after last element of an array
 */
exports.conj = (elem) => (coll) => Maybe_1.maybe(coll).bind((c) => [...c, tools_1.getMonadValue(elem)]);
/**
 * Join all array elements by delimiter string
 * join("-")([1,2,3]) === "1-2-3"
 */
exports.join = (delimiter = "") => (coll) => Maybe_1.maybe(coll)
    .bind((c) => c.join(Maybe_1.maybe(delimiter).getValueOr("")))
    .filter(predicates_1.isNotEmpty);
function append(tailElement) {
    return function (headElement) {
        const _head = Maybe_1.maybe(headElement).getValueOr([]);
        const _tail = Maybe_1.maybe(tailElement).getValueOr([]);
        const valueIsString = predicates_1.isString(_head) || predicates_1.isString(_tail);
        return Maybe_1.maybe([..._head, ..._tail])
            .filter(predicates_1.isNotEmpty)
            .bind((value) => (valueIsString ? value.join("") : value));
    };
}
exports.append = append;
/**
 * Concatenate two strings or arrays
 * Read a prepend(this)(to that) -> prepend( [1,2])([3,4]) === [1,2,3,4]
 */
exports.prepend = (headColl) => (tailColl) => append(tailColl)(headColl);
/**
 * return all but first element of an array
 */
exports.rest = (coll) => Maybe_1.maybe(coll)
    .bind((c) => c.slice(1))
    .filter(predicates_1.isNotEmpty);
/**
 * return all but last element of an array
 */
exports.butLast = (coll) => Maybe_1.maybe(coll)
    .bind((c) => c.slice(0, -1))
    .filter(predicates_1.isNotEmpty);
function insertAt(index) {
    return (elem) => (coll) => {
        try {
            const _elem = (tools_1.getMonadValue(elem) || []);
            const _index = tools_1.getMonadValue(index);
            return Maybe_1.maybe(coll)
                .bind((c) => {
                const _head = c.slice(0, _index);
                const _tail = c.slice(_index);
                return [..._head, _elem, ..._tail];
            })
                .filter(predicates_1.isNotEmpty);
        }
        catch (_a) {
            return Maybe_1.nothing();
        }
    };
}
exports.insertAt = insertAt;
function removeAt(n) {
    return (coll) => {
        const i = tools_1.getMonadValue(n);
        return !predicates_1.isNumber(i)
            ? Maybe_1.maybe(coll)
            : Maybe_1.maybe(coll)
                .bind((c) => {
                const _head = c.slice(0, i);
                const _tail = c.slice(i + 1);
                return [..._head, ..._tail];
            })
                .filter(predicates_1.isNotEmpty);
    };
}
exports.removeAt = removeAt;
function find(predicate) {
    return function (coll) {
        return predicates_1.isFunction(predicate) ? Maybe_1.maybe(coll).bind((a) => a.find(predicate)) : Maybe_1.nothing();
    };
}
exports.find = find;
// reduce<A,B> : (fn: (accum: B, nextValue: A, index: number, fullColl: A[]) -> B) -> (init: A) -> (coll: A[]) -> B
// Applies the reducer to all elements in coll with accum always being the result of the previous call
exports.reduce = (fn) => (initial) => (coll) => predicates_1.isSome(initial) ? Maybe_1.maybe(coll).bind((c) => c.reduce(fn, initial)) : Maybe_1.nothing();
// range : (start: number) -> (end: number) -> number[]
// Returns an array of numbers including start and excluding end with step 1 if start < end else step -1
exports.range = (start) => (end) => {
    try {
        const _start = tools_1.getMonadValue(start);
        const _end = tools_1.getMonadValue(end);
        const asc = _end >= _start;
        const l = asc ? _end - _start : _start - _end;
        const dir = asc ? 1 : -1;
        const arr = Array(l);
        for (let i = 0; i < l; ++i) {
            arr[i] = _start + i * dir;
        }
        return Maybe_1.just(arr);
    }
    catch (err) {
        return Maybe_1.nothing();
    }
};
function groupBy(getGroup) {
    const groupFn = typeof getGroup === "function"
        ? getGroup
        : (input) => (input && input[getGroup]) || null;
    return (elems) => Maybe_1.maybe(elems).bind(exports.reduce((coll, nextElement) => {
        const group = groupFn(nextElement);
        coll[group] ? coll[group].push(nextElement) : (coll[group] = [nextElement]);
        return coll;
    })({}));
}
exports.groupBy = groupBy;
exports.count = (coll) => Maybe_1.maybe(coll).bind((c) => c.length);
exports.size = exports.count;
//# sourceMappingURL=array.js.map