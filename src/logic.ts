import { MaybeType, Predicate } from "./types";
import { getMonadValue } from "./tools";
import { isFunction } from "./predicates";
import { maybe } from "./Maybe";

/**
 * Does any of the array of predicates pass when applied to the value?
 * ramda calls this `anyPass`, but we want to avoid `any` in TypeScript
 */
export const somePass = <T>(predicates: Predicate<T>[]) => (value: MaybeType<T>) => {
  const _value = value && (getMonadValue(value) as T);
  return maybe(predicates)
    .bind((p) => p.reduce((result, predicate) => result || predicate(_value), false))
    .getValueOr(false);
};

/**
 * Does any value in the collection pass the predicate?
 * ramda calls this `any`, but we want to avoid that word in TypeScript
 */
export const some = <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) =>
  isFunction(pred)
    ? maybe(coll)
        .bind((c) =>
          c.reduce(
            (result, value) =>
              result ||
              maybe(value)
                .bind(pred)
                .getValueOr(true),
            false
          )
        )
        .getValueOr(true)
    : true;

/**
 * Does the value pass all predicates in the array?
 */
export const allPass = <T>(predicates: Predicate<T>[]) => (value: T) => {
  const _value = value && (getMonadValue(value) as T);
  return predicates.reduce((result, predicate) => result && predicate(_value), true);
};

/**
 * Do all values in the array pass the predicate?
 */
export const every = <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) =>
  isFunction(pred)
    ? maybe(coll)
        .bind((c) =>
          c.reduce(
            (result, value) =>
              result &&
              maybe(value)
                .bind(pred)
                .getValueOr(true),
            true
          )
        )
        .getValueOr(false)
    : true;
