import { Endomorphism, Mappable, MaybeType, Predicate } from "./types";
import { Maybe } from "./Maybe";
/**
 * mathematical identity.
 * const identity = a => a
 */
export declare const identity: <T>(a: T) => T;
/**
 * Return the complement of a predicate.
 * complement(isEmpty)([]) === true
 */
export declare const complement: <T>(pred: Predicate<T>) => Predicate<T>;
/**
 * Return the complement of a predicate.
 * complement(isEmpty)([]) === true
 */
export declare const invert: <T>(pred: Predicate<T>) => Predicate<T>;
/**
 * Invert truthyness
 */
export declare const not: (val: any) => boolean;
/**
 * Negate a number
 */
export declare const negate: (val: number | import("./Maybe").Just<number> | import("./Maybe").Nothing<number>) => Maybe<number>;
/**
 * Call fn with inverted arguments
 **/
export declare const flip: <A, B, C>(fn: (b: B) => (a: A) => C) => (a: A) => (b: B) => C;
/**
 * composable if-else-switch
 *
 * const tellIfItIsNil = ifElse(isNil)(() => "it is nil")(() => "it is not nil")
 * tellIfItIsNil(null)  ->  "it is nil"
 * tellIfItIsNil(1)     ->  "it is not nil"
 */
export declare const ifElse: <A, B>(pred: Predicate<A>) => (ifFn: Mappable<A, B>) => (elseFn: Mappable<A, B>) => (value: MaybeType<A>) => Maybe<B>;
/**
 * applies ifFn only when pred is true
 */
export declare const when: <T>(pred: Predicate<T>) => (ifFn: Endomorphism<T>) => (value: MaybeType<T>) => Maybe<T>;
/**
 * applies elseFn only when pred is false
 */
export declare const unless: <T>(pred: Predicate<T>) => (elseFn: Endomorphism<T>) => (value: MaybeType<T>) => Maybe<T>;
export declare const constantly: <T>(value: T) => (..._: any[]) => T;
