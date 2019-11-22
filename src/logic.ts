import { MaybeType, Predicate } from "./types.d";
import { getMonadValue } from "./tools";
import { isFunction } from "./predicates";
import { maybe } from "./Maybe";

export const somePass = <T>(predicates: Predicate<T>[]) => (value: MaybeType<T>) => {
  const _value = value && (getMonadValue(value) as T);
  return maybe(predicates)
    .bind((p) => p.reduce((result, predicate) => result || predicate(_value), false))
    .getValueOr(false);
};

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

export const allPass = <T>(predicates: Predicate<T>[]) => (value: T) => {
  const _value = value && (getMonadValue(value) as T);
  return predicates.reduce((result, predicate) => result && predicate(_value), true);
};

export const every = <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) =>
  isFunction(pred)
    ? maybe(coll).bind((c) =>
        c.reduce(
          (result, value) =>
            result &&
            maybe(value)
              .bind(pred)
              .getValueOr(true),
          true
        )
      )
    : true;
