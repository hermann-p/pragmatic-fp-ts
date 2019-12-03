import { MaybeType, Predicate } from "./types";
/**
 * Does any of the array of predicates pass when applied to the value?
 * ramda calls this `anyPass`, but we want to avoid `any` in TypeScript
 */
export declare const somePass: <T>(predicates: Predicate<T>[]) => (value: MaybeType<T>) => boolean;
/**
 * Does any value in the collection pass the predicate?
 * ramda calls this `any`, but we want to avoid that word in TypeScript
 */
export declare const some: <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) => boolean;
/**
 * Does the value pass all predicates in the array?
 */
export declare const allPass: <T>(predicates: Predicate<T>[]) => (value: T) => boolean;
/**
 * Do all values in the array pass the predicate?
 */
export declare const every: <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) => boolean;
