import { Mappable } from "./types";
import { Monad } from "./Monad";
import { Predicate } from "./types.d";
import { getMonadValue } from "./tools";
import { isNil } from "./predicates";
import m from "mori";

export type Maybe<T> = Just<T> | Nothing<T>;
export type MaybePattern<A, B> = {
  just: (value: A) => B;
  nothing: () => B;
};

export class Just<T> extends Monad<T> {
  private value: T;
  private isMori: boolean;
  constructor(value: T | Just<T>, isMori: boolean = false) {
    super();
    this.value = getMonadValue<T>(value) as T;
    this.isMori = isMori;
  }

  getValue(): T {
    return this.isMori ? m.toJS(this.value) : this.value;
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
}

export const just = <T>(value: T) => new Just(value);
export const nothing = <T>() => new Nothing<T>();
export const maybe = <T>(value: T | Maybe<T>): Maybe<T> =>
  value instanceof Just || value instanceof Nothing
    ? value
    : isNil(value) || (typeof value === "number" && isNaN((value as any) as number))
    ? nothing()
    : just(value);
