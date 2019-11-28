import { Effect, MaybeType, Predicate } from "./types";
import { Either, Reason, left, right } from "./Either";
import { Mappable } from "./types";
import { Monad } from "./Monad";
import { getMonadValue } from "./tools";
import { isMaybe, isMonad, isNil, isSome } from "./predicates";

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
  bind<B>(fn: Mappable<T, B | Maybe<B>>): Maybe<B> {
    try {
      const result = fn(this.value);
      return maybe(result);
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
  toEither(): Either<Reason, T> {
    return right<Reason, T>(this.value);
  }
  toString(): string {
    return `Just(${JSON.stringify(this.value)})`;
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
  bind<B>(_: Mappable<T, B | Maybe<B>>): Maybe<B> {
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
  toEither(): Either<Reason, T> {
    return left("Cast from nothing");
  }
  toString() {
    return "Nothing";
  }
}

export const just = <T>(value: T) => new Just(value);
export const nothing = <T>() => new Nothing<T>();
export const maybe = <T>(value: T | Monad<T>): Maybe<T> =>
  isMaybe(value)
    ? (value as Maybe<T>) // avoid re-casting monads
    : isMonad(value)
    ? isSome(value)
      ? maybe(getMonadValue(value) as T)
      : nothing()
    : isNil(value)
    ? nothing()
    : just(value as T);

export const maybeFalsy = <T>(value: MaybeType<T>): Maybe<T> =>
  maybe(value).filter((v: any) => !!v);

export const maybeIf = <T>(predicate: MaybeType<Predicate<T>>) => (value: MaybeType<T>) => {
  const pred = maybe(predicate)
    .filter((fn) => typeof fn === "function")
    .getValueOr((_: any) => false);
  return maybe(value).filter(pred);
};
