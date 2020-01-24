import { Endomorphism, Mappable, MaybeType, Predicate } from "./types";
import { Maybe, maybe } from "./Maybe";

/**
 * mathematical identity.
 * const identity = a => a
 */
export const identity = <T>(a: T): T => a;

/**
 * Return the complement of a predicate.
 * complement(isEmpty)([]) === true
 */
export const complement = <T>(pred: Predicate<T>): Predicate<T> => (a) => !pred(a);
/**
 * Return the complement of a predicate.
 * complement(isEmpty)([]) === true
 */
export const invert = complement;

/**
 * Invert truthyness
 */
export const not = (val: any) =>
  maybe(val)
    .bind((v) => !v)
    .match({ just: (v) => v, nothing: () => true })
    .getValue();
/**
 * Negate a number
 */
export const negate = (val: number | Maybe<number>) => maybe(val).bind((n) => n * -1);

/**
 * Call fn with inverted arguments
 **/
export const flip = <A, B, C>(fn: (b: B) => (a: A) => C) => (a: A) => (b: B) => fn(b)(a);

/**
 * composable if-else-switch
 *
 * const tellIfItIsNil = ifElse(isNil)(() => "it is nil")(() => "it is not nil")
 * tellIfItIsNil(null)  ->  "it is nil"
 * tellIfItIsNil(1)     ->  "it is not nil"
 */
export const ifElse = <A, B>(pred: Predicate<A>) => (ifFn: Mappable<A, B>) => (
  elseFn: Mappable<A, B>
) => (value: MaybeType<A>): Maybe<B> =>
  maybe(value).bind((value) => (pred(value) ? ifFn(value) : elseFn(value)));

/**
 * applies ifFn only when pred is true
 */
export const when = <T>(pred: Predicate<T>) => (ifFn: Endomorphism<T>) =>
  ifElse<T, T>(pred)(ifFn)(identity);

/**
 * applies elseFn only when pred is false
 */
export const unless = <T>(pred: Predicate<T>) => (elseFn: Endomorphism<T>) =>
  ifElse<T, T>(pred)(identity)(elseFn);

// constantly<T> : (value: T) -> fn(_: any) -> T
// Always return the value, mathematical constant function
export const constantly = <T>(value: T) => (..._: any[]) => value;
