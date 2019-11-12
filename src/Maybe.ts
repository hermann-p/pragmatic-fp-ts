import { isNil } from "./predicates";
import { getMonadValue } from "./tools";
import { Transducer } from "./types";

import { Monad } from "./Monad";

export type Maybe<T> = Just<T> | Nothing<T>;
export type MaybePattern<A, B, C> = {
  just: (value: A) => B;
  nothing: () => C;
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
  bind<B>(fn: Transducer<T, B>): Maybe<B> {
    try {
      const result = fn(this.value);
      return isNil(result) ? nothing<B>() : just(result);
    } catch (err) {
      return nothing<B>();
    }
  }
  match<U, V>(match: MaybePattern<T, U, V>): Maybe<any> {
    try {
      return just(match.just(this.value));
    } catch (err) {
      return nothing<T>();
    }
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
  bind<B>(_: Transducer<T, B>): Maybe<B> {
    return (this as Nothing<any>) as Nothing<B>; // prefer ugly code over `new Nothing<B>()`
  }
  match<U, V>(match: MaybePattern<T, U, V>): Maybe<any> {
    try {
      return just(match.nothing());
    } catch {
      return nothing<T>();
    }
  }
}

export const just = <T>(value: T) => new Just(value);
export const nothing = <T>() => new Nothing<T>();
export const maybe = <T>(value: T | Maybe<T>): Maybe<T> =>
  value instanceof Just || value instanceof Nothing
    ? value
    : isNil(value) || isNaN((value as any) as number)
    ? nothing()
    : just(value);
