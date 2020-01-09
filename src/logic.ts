import { MaybeType, Predicate, Mappable } from "./types";
import { getMonadValue } from "./tools";
import { isFunction } from "./predicates";
import { maybe, Maybe } from "./Maybe";
import * as m from "mori";
import { find } from "./array";

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

export const equals = (a: MaybeType<unknown>) => (b: MaybeType<unknown>): boolean => {
  try {
    return m.equals(m.toClj(getMonadValue(a)), m.toClj(getMonadValue(b)));
  } catch {
    return false;
  }
};

export const eqShallow = (a: MaybeType<unknown>) => (b: MaybeType<unknown>): boolean => {
  try {
    return getMonadValue(a) === getMonadValue(b);
  } catch {
    return a === b;
  }
};

// Pattern matching -- given a list of [Predicate<A>, Mappable<A,B>]
// tuples, find the first tuple whose predicate returns true for the
// value and return its function evaluated with the value
type CondTuple<A, B> = [Predicate<A>, Mappable<A, B>];
export const cond = <A, B>(conditions: CondTuple<A, B>[]) => (value: MaybeType<A>): Maybe<B> =>
  find(([condition]: CondTuple<A, B>) => condition(getMonadValue(value)))(
    conditions
  ).bind(([_, fn]: CondTuple<A, B>) => fn(getMonadValue(value)));
