import { Maybe } from "./Maybe";
import { Mappable, MaybeType, Predicate } from "./types";
/**
 * returns first element of an array
 */
export declare const head: <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T>;
/**
 * returns first element of an array
 */
export declare const first: <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T>;
/**
 * returns last element of an array
 */
export declare const tail: <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T>;
/**
 * returns last element of an array
 */
export declare const last: <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T>;
/**
 * Reverse elements of an array
 * reverse([1,2,3])  ->  [3,2,1]
 */
export declare const reverse: <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T[]>;
/**
 * get n first elements from an array
 */
export declare const take: (n: number | import("./Maybe").Just<number> | import("./Maybe").Nothing<number>) => <T>(coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T[]>;
/**
 * take elements from array while pred is true
 */
export declare const takeWhile: <T>(pred: Predicate<T>) => (coll: T[] | import("./Maybe").Just<T[]> | import("./Maybe").Nothing<T[]>) => Maybe<T[]>;
/**
 * Sort array elements by comparing values generated from elements by compare function
 */
export declare const sortBy: <A, B>(compare: Mappable<A, B>) => (coll: A[]) => Maybe<A[]>;
/**
 * Map Mappable over a collection. Safe in the collection itself, not
 * its values
 **/
export declare const map: <A, B>(fn: Mappable<A, B> | Mappable<A, Maybe<B>>) => (coll: A[] | import("./Maybe").Just<A[]> | import("./Maybe").Nothing<A[]>) => Maybe<B[]>;
/**
 * Map Mappable over a collection. Safe in the collection and its values
 **/
export declare const mapOr: <A, B>(defaultValue: B) => (fn: Mappable<A, B> | Mappable<A, Maybe<B>>) => (coll: A[] | import("./Maybe").Just<A[]> | import("./Maybe").Nothing<A[]>) => Maybe<B[]>;
/**
 * Map Mappable over a collection, filtering out Nothings
 */
export declare const mapJust: <A, B>(fn: Mappable<A, B> | Mappable<A, Maybe<B>>) => (coll: MaybeType<A[]>) => Maybe<B[]>;
/**
 * return a new array with all elements from coll for which pred is true
 */
export declare function filter<A>(pred: Predicate<A>): (coll: MaybeType<A[]>) => Maybe<A>;
export declare function filter<A>(pred: Predicate<Maybe<A>>): (coll: MaybeType<A[]>) => Maybe<A>;
/**
 * return a new array with all elements from coll where pred is false
 */
export declare function reject<A>(pred: Predicate<A>): (coll: MaybeType<A[]>) => Maybe<A>;
export declare function reject<A>(pred: Predicate<Maybe<A>>): (coll: MaybeType<A[]>) => Maybe<A>;
/**
 * test if elem is a member of array or string coll
 * isIn("word")("o") === true
 * isIn([1,2,3])(1) === true
 */
export declare function isIn(coll: MaybeType<string>): (elem: MaybeType<string>) => boolean;
export declare function isIn<A>(coll: MaybeType<A[]>): (elem: MaybeType<A>) => boolean;
/**
 * test if array or string coll has an element elem
 * contains("o")("word") === true
 * contains(1)([1,2,3]) === true
 */
export declare function contains<A>(elem: MaybeType<A>): (coll: MaybeType<A[]>) => boolean;
export declare function contains(elem: MaybeType<string>): (coll: MaybeType<string>) => boolean;
export declare const includes: typeof contains;
/**
 * Insert a single element before first element of an array
 */
export declare const cons: <A>(elem: MaybeType<A>) => (coll: MaybeType<A[]>) => Maybe<A[]>;
/**
 * Insert a single element after last element of an array
 */
export declare const conj: <A>(elem: MaybeType<A>) => (coll: MaybeType<A[]>) => Maybe<A[]>;
/**
 * Join all array elements by delimiter string
 * join("-")([1,2,3]) === "1-2-3"
 */
export declare const join: <A>(delimiter?: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => (coll: MaybeType<A[]>) => Maybe<string>;
/**
 * Concatenate two strings or arrays
 * Read as append(this)(to that) -> append([3,4])([1,2]) === [1,2,3,4]
 **/
export declare function append<A>(tailColl: MaybeType<A[]>): (headColl: MaybeType<A[]>) => Maybe<A[]>;
export declare function append(tail: MaybeType<string>): (head: MaybeType<string>) => Maybe<string>;
/**
 * Concatenate two strings or arrays
 * Read a prepend(this)(to that) -> prepend( [1,2])([3,4]) === [1,2,3,4]
 */
export declare const prepend: <A>(headColl: MaybeType<A[]>) => (tailColl: MaybeType<A[]>) => Maybe<A[]>;
/**
 * return all but first element of an array
 */
export declare const rest: <A>(coll: MaybeType<A[]>) => Maybe<A[]>;
/**
 * return all but last element of an array
 */
export declare const butLast: <A>(coll: MaybeType<A[]>) => Maybe<A[]>;
/**
 * insert element elem at position n in array coll
 */
export declare function insertAt<A>(index: MaybeType<number>): (elem: MaybeType<A>) => (coll: MaybeType<A[]>) => Maybe<A[]>;
export declare function removeAt<A>(n: MaybeType<number>): (coll: MaybeType<A[]>) => Maybe<A[]>;
export declare function find<T>(predicate: Predicate<T>): (coll: T[]) => Maybe<T>;
export declare const reduce: <A, B>(fn: (accum: B, nextValue: A, index: number, fullColl: A[]) => B) => (initial: B) => (coll: MaybeType<A[]>) => import("./Maybe").Nothing<unknown> | import("./Maybe").Just<B>;
export declare const range: (start: number | import("./Maybe").Just<number> | import("./Maybe").Nothing<number>) => (end: number | import("./Maybe").Just<number> | import("./Maybe").Nothing<number>) => import("./Maybe").Nothing<unknown> | import("./Maybe").Just<number[]>;
export declare const count: (coll: MaybeType<string | unknown[]>) => Maybe<number>;
export declare const size: (coll: MaybeType<string | unknown[]>) => Maybe<number>;
