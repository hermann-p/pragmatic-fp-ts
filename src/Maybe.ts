import { Effect, MaybeType, Predicate } from "./types.d";
import { Mappable } from "./types";
import { Monad } from "./Monad";
import { getMonadValue } from "./tools";
import { isNil } from "./predicates";

export type Maybe<T> = Just<T> | Nothing<T>;
export type MaybePattern<A, B> = {
  just: (value: A) => B;
  nothing: () => B;
};

export class Just<T> extends Monad<T> {
  private value: T;
  constructor(value: T | Just<T>) {
    super();
    this.value = getMonadValue<T>(value) as T;
  }

  getValue(): T {
    return this.value;
  }
  getValueOr(_: T): T {
    return this.getValue();
  }
  isJust() {
    return true;
  }
  isNothing() {
    return false;
  }
  isMonad() {
    return true;
  }
  isMaybe() {
    return true;
  }
  bind<B>(fn: Mappable<T, B>): Maybe<B> {
    try {
      const result = fn(this.value);
      return isNil(result) ? nothing<B>() : just(result);
    } catch (err) {
      return nothing<B>();
    }
  }
  match<U>(match: MaybePattern<T, U>): Maybe<U> {
    try {
      return just(match.just(this.value));
    } catch (err) {
      return nothing<U>();
    }
  }
  filter(pred: Predicate<T>): Maybe<T> {
    return pred(this.value) ? this : nothing();
  }
  effect(fn: Effect<T>): Maybe<T> {
    const { value } = this;
    fn(value);
    return this;
  }
}

export class Nothing<T> implements Monad<T> {
  getValue(): T {
    throw new Error("Can not get value of Nothing");
  }
  getValueOr(alternative: T | Just<T>): T {
    return alternative instanceof Just ? alternative.getValue() : alternative;
  }
  isJust() {
    return false;
  }
  isNothing() {
    return true;
  }
  isMonad() {
    return true;
  }
  isMaybe() {
    return true;
  }
  bind<B>(_: Mappable<T, B>): Maybe<B> {
    return (this as Nothing<any>) as Nothing<B>; // prefer ugly code over `new Nothing<B>()`
  }
  match<U>(match: MaybePattern<T, U>): Maybe<U> {
    try {
      return just(match.nothing());
    } catch {
      return nothing<U>();
    }
  }
  filter(_: Predicate<T>): Maybe<T> {
    return this;
  }
  effect(_: Effect<T>): Maybe<T> {
    return this;
  }
}

export const just = <T>(value: T) => new Just(value);
export const nothing = <T>() => new Nothing<T>();
export const maybe = <T>(value: T | Maybe<T>): Maybe<T> =>
  value instanceof Just || value instanceof Nothing
    ? value
    : isNil(value) || (typeof value === "number" && isNaN((value as any) as number))
    ? nothing()
    : just(value);

export const maybeFalsy = <T>(value: MaybeType<T>): Maybe<T> => {
  const _value: T = (value instanceof Just ? value.getValue() : value) as T;
  return value instanceof Nothing || !_value ? nothing() : just(_value);
};

export const maybeIf = <T>(predicate: MaybeType<Predicate<T>>) => (value: MaybeType<T>) => {
  const pred = maybe(predicate)
    .filter((fn) => typeof fn === "function")
    .getValueOr((_: any) => false);
  return maybe(value).filter(pred);
};
