import { Mappable, MaybeType, Predicate } from "./types";
import { Maybe, maybe, nothing, just } from "./Maybe";
import { getMonadValue } from "./tools";
import { invert } from "./functools";
import { isFunction, isNotEmpty, isNumber, isString, isSome } from "./predicates";

/**
 * returns first element of an array
 */
export const head = <T>(coll: Array<T> | Maybe<Array<T>>): Maybe<T> =>
  maybe(coll).bind<T>((arr: Array<T>) => {
    return arr[0];
  });
/**
 * returns first element of an array
 */
export const first = head;

/**
 * returns last element of an array
 */
export const tail = <T>(coll: Array<T> | Maybe<Array<T>>): Maybe<T> =>
  maybe(coll).bind<T>((arr: Array<T>) => arr[arr.length - 1]);
/**
 * returns last element of an array
 */
export const last = tail;

const __reverse = <T>(coll: Array<T>): Array<T> => {
  const arr: T[] = [];
  for (let i = coll.length - 1; i >= 0; --i) arr.push(coll[i]);
  return arr;
};

/**
 * Reverse elements of an array
 * reverse([1,2,3])  ->  [3,2,1]
 */
export const reverse = <T>(coll: Array<T> | Maybe<Array<T>>): Maybe<Array<T>> =>
  maybe(coll).bind(__reverse);

const __take = <T>(n: number) => (coll: T[]): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < n && coll[i]; ++i) arr.push(coll[i]);
  return arr;
};

/**
 * get n first elements from an array
 */
export const take = (n: number | Maybe<number>) => <T>(coll: T[] | Maybe<T[]>): Maybe<T[]> => {
  const N: number = getMonadValue(n) as number;
  return N < 1
    ? nothing()
    : maybe(coll)
        .bind(__take(N))
        .filter(isNotEmpty);
};

const __takeWhile = <T>(pred: Predicate<T>) => (coll: T[]) => {
  const arr: T[] = [];
  for (let i = 0; pred(coll[i]); ++i) arr.push(coll[i]);
  return arr;
};

/**
 * take elements from array while pred is true
 */
export const takeWhile = <T>(pred: Predicate<T>) => (coll: T[] | Maybe<T[]>): Maybe<T[]> =>
  isFunction(pred)
    ? maybe(coll)
        .bind(__takeWhile(pred))
        .filter(isNotEmpty)
    : nothing();

const __sortBy = <A, B>(compare: Mappable<A, B>) => (coll: A[]): A[] =>
  coll.sort((a1: A, a2: A) => {
    const cmp1 = compare(a1);
    const cmp2 = compare(a2);
    return cmp1 > cmp2 ? 1 : cmp1 === cmp2 ? 0 : -1;
  });

/**
 * Sort array elements by comparing values generated from elements by compare function
 */
export const sortBy = <A, B>(compare: Mappable<A, B>) => (coll: A[]): Maybe<A[]> =>
  isFunction(compare)
    ? maybe(coll)
        .bind(__sortBy(compare))
        .filter(isNotEmpty)
    : nothing();

/**
 * Map Mappable over a collection. Safe in the collection itself, not
 * its values
 **/
export const map = <A, B>(fn: Mappable<A, B>) => (coll: A[] | Maybe<A[]>): Maybe<B[]> =>
  isFunction(fn)
    ? maybe(coll)
        .bind((c: A[]) =>
          c.map((a) =>
            maybe(a)
              .bind(fn)
              .getValue()
          )
        )
        .filter(isNotEmpty)
    : nothing();

const __mapOr = <A, B>(def: B, fn: Mappable<A, B>) => (coll: A[]): B[] =>
  coll.map((a) =>
    maybe(a)
      .bind(fn)
      .getValueOr(def)
  );

/**
 * Map Mappable over a collection. Safe in the collection and its values
 **/
export const mapOr = <A, B>(defaultValue: B) => (fn: Mappable<A, B>) => (
  coll: A[] | Maybe<A[]>
): Maybe<B[]> =>
  isFunction(fn)
    ? maybe(coll)
        .bind(__mapOr(defaultValue, fn))
        .filter(isNotEmpty)
    : nothing();

/**
 * Map Mappable over a collection, filtering out Nothings
 */
export const mapJust = <A, B>(fn: Mappable<A, B>) => (coll: MaybeType<A[]>): Maybe<B[]> =>
  isFunction(fn)
    ? maybe(coll)
        .filter(isNotEmpty)
        .bind((c) => {
          const arr: B[] = [];
          for (let i = 0; i < c.length; ++i) {
            maybe(c[i])
              .bind(fn)
              .effect((value) => arr.push(value));
          }
          return arr;
        })
        .filter(isNotEmpty)
    : nothing();

/**
 * return a new array with all elements from coll for which pred is true
 */
export const filter = <A>(pred: Predicate<A>) => (coll: A[] | Maybe<A[]>) =>
  maybe(coll)
    .bind((c) =>
      c.filter((a) =>
        maybe(a)
          .bind(pred)
          .getValueOr(false)
      )
    )
    .filter(isNotEmpty);

/**
 * return a new array with all elements from coll where pred is false
 */
export const reject = <A>(pred: Predicate<A>) => filter(invert(pred));

/**
 * test if elem is a member of array or string coll
 * isIn("word")("o") === true
 * isIn([1,2,3])(1) === true
 */
export function isIn(coll: MaybeType<string>): (elem: MaybeType<string>) => boolean;
export function isIn<A>(coll: MaybeType<A[]>): (elem: MaybeType<A>) => boolean;
export function isIn(coll: any) {
  return (elem: MaybeType<any>) =>
    maybe(coll)
      .bind((c) => c.includes(getMonadValue(elem)))
      .getValueOr(false);
}

/**
 * test if array or string coll has an element elem
 * contains("o")("word") === true
 * contains(1)([1,2,3]) === true
 */
export function contains<A>(elem: MaybeType<A>): (coll: MaybeType<A[]>) => boolean;
export function contains(elem: MaybeType<string>): (coll: MaybeType<string>) => boolean;
export function contains(elem: any) {
  return (coll: any) => isIn(coll)(elem);
}
export const includes = contains;

/**
 * Insert a single element before first element of an array
 */
export const cons = <A>(elem: MaybeType<A>) => (coll: MaybeType<A[]>) =>
  maybe(coll).bind((c) => [getMonadValue(elem) as A, ...c]);
/**
 * Insert a single element after last element of an array
 */
export const conj = <A>(elem: MaybeType<A>) => (coll: MaybeType<A[]>) =>
  maybe(coll).bind((c) => [...c, getMonadValue(elem) as A]);

/**
 * Join all array elements by delimiter string
 * join("-")([1,2,3]) === "1-2-3"
 */
export const join = <A>(delimiter: MaybeType<string> = "") => (coll: MaybeType<A[]>) =>
  maybe(coll)
    .bind((c) => c.join(maybe(delimiter).getValueOr("")))
    .filter(isNotEmpty);

/**
 * Concatenate two strings or arrays
 * Read as append(this)(to that) -> append([3,4])([1,2]) === [1,2,3,4]
 **/
export function append<A>(tailColl: MaybeType<A[]>): (headColl: MaybeType<A[]>) => Maybe<A[]>;
export function append(tail: MaybeType<string>): (head: MaybeType<string>) => Maybe<string>;
export function append(tailElement: any) {
  return function(headElement: any) {
    const _head = maybe(headElement).getValueOr([]);
    const _tail = maybe(tailElement).getValueOr([]);
    const valueIsString = isString(_head) || isString(_tail);
    return maybe([..._head, ..._tail])
      .filter(isNotEmpty)
      .bind((value) => (valueIsString ? value.join("") : value));
  };
}

/**
 * Concatenate two strings or arrays
 * Read a prepend(this)(to that) -> prepend( [1,2])([3,4]) === [1,2,3,4]
 */
export const prepend = <A>(headColl: MaybeType<A[]>) => (tailColl: MaybeType<A[]>) =>
  append(tailColl)(headColl);

/**
 * return all but first element of an array
 */
export const rest = <A>(coll: MaybeType<A[]>) =>
  maybe(coll)
    .bind((c) => c.slice(1))
    .filter(isNotEmpty);

/**
 * return all but last element of an array
 */
export const butLast = <A>(coll: MaybeType<A[]>) =>
  maybe(coll)
    .bind((c) => c.slice(0, -1))
    .filter(isNotEmpty);

/**
 * insert element elem at position n in array coll
 */
// export function insertAt(
// elem: MaybeType<string>
// ): (index: MaybeType<number>) => (text: MaybeType<string>) => Maybe<string>;
export function insertAt<A>(
  index: MaybeType<number>
): (elem: MaybeType<A>) => (coll: MaybeType<A[]>) => Maybe<A[]>;
export function insertAt(index: MaybeType<number>) {
  return (elem: any) => (coll: any) => {
    try {
      const _elem = (getMonadValue(elem) || []) as any;
      const _index = getMonadValue(index) as number;
      return maybe(coll)
        .bind((c: any[]) => {
          const _head = c.slice(0, _index);
          const _tail = c.slice(_index);
          return [..._head, _elem, ..._tail];
        })
        .filter(isNotEmpty);
    } catch {
      return nothing();
    }
  };
}

export function removeAt<A>(n: MaybeType<number>) {
  return (coll: MaybeType<A[]>): Maybe<A[]> => {
    const i: number = getMonadValue(n) as number;
    return !isNumber(i)
      ? maybe(coll)
      : maybe(coll)
          .bind((c) => {
            const _head = c.slice(0, i);
            const _tail = c.slice(i + 1);
            return [..._head, ..._tail];
          })
          .filter(isNotEmpty);
  };
}

export function find<T>(predicate: Predicate<T>) {
  return function(coll: T[]): Maybe<T> {
    return isFunction(predicate) ? maybe(coll).bind((a) => a.find(predicate) as T) : nothing();
  };
}

// reduce<A,B> : (fn: (accum: B, nextValue: A, index: number, fullColl: A[]) -> B) -> (init: A) -> (coll: A[]) -> B
// Applies the reducer to all elements in coll with accum always being the result of the previous call
export const reduce = <A, B>(fn: (accum: B, nextValue: A, index: number, fullColl: A[]) => B) => (
  initial: B
) => (coll: MaybeType<A[]>) =>
  isSome(initial) ? maybe(coll).bind((c) => c.reduce(fn, initial)) : nothing();

// range : (start: number) -> (end: number) -> number[]
// Returns an array of numbers including start and excluding end with step 1 if start < end else step -1
export const range = (start: MaybeType<number>) => (end: MaybeType<number>) => {
  try {
    const _start = getMonadValue(start);
    const _end = getMonadValue(end);
    const asc = _end >= _start;
    const l = asc ? _end - _start : _start - _end;
    const dir = asc ? 1 : -1;
    const arr: number[] = Array(l);
    for (let i = 0; i < l; ++i) {
      arr[i] = _start + i * dir;
    }
    return just(arr);
  } catch (err) {
    return nothing();
  }
};

export const count = (coll: MaybeType<unknown[] | string>) => maybe(coll).bind((c) => c.length);
export const size = count;
