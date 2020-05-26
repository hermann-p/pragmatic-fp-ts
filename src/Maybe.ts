import { Effect, getValue, Mappable, Predicate } from "./main";
import { Monad } from "./types";

export type Maybe<A> = Just<A> | Nothing<A>;

type MaybeMatcher<A, B> = { just: Mappable<A, B>; nothing: () => B };
export class Nothing<A> extends Monad<A> {
  bind<B>(_: Mappable<A, B>): Maybe<B> {
    return this as any;
  }
  bindM<B>(_: Mappable<Monad<A>, Monad<B>>): Maybe<B> {
    return this as any;
  }
  filter(_: any): Maybe<A> {
    return this;
  }
  effect(_: any): Maybe<A> {
    return this;
  }
  getValue(): A {
    throw new Error("Can not get value of Nothing");
  }
  getValueOr(alt: A) {
    return alt;
  }
  match<B>(matcher: MaybeMatcher<A, B>): Maybe<B> {
    return maybe(matcher.nothing());
  }
}

export class Just<A> extends Monad<A> {
  readonly value: A;
  constructor(value: A) {
    super();
    this.value = value;
  }
  bind<B>(fn: Mappable<A, B>): Maybe<B> {
    try {
      const result = fn(this.value);
      return maybe(getValue(result));
    } catch (err) {
      return nothing();
    }
  }
  bindM<B>(fn: Mappable<Monad<A>, Monad<B>>): Maybe<B> {
    try {
      const result = fn(this);
      return maybe(getValue(result));
    } catch (err) {
      return nothing();
    }
  }
  filter(fn: Predicate<A>): Maybe<A> {
    try {
      return fn(this.value) ? this : nothing();
    } catch {
      return nothing();
    }
  }

  effect(fn: Effect<A>): Maybe<A> {
    try {
      fn(this.value);
    } catch (err) {}
    return this;
  }
  getValue(): A {
    return this.value;
  }
  getValueOr(_: A): A {
    return this.value;
  }
  match<B>(matcher: MaybeMatcher<A, B>): Maybe<B> {
    return maybe(matcher.just(this.value));
  }
}

export const just = <T>(value: T) => {
  return new Just<T>(value);
};
export const nothing = <T>() => {
  return new Nothing<T>();
};

export const maybe = <T>(value: T | Monad<T>): Maybe<T> => {
  const extractedValue = getValue<T>(value);
  return extractedValue === null || extractedValue === undefined
    ? (nothing() as Nothing<T>)
    : just<T>(extractedValue);
};

export const isJust = (x: unknown) => x instanceof Just;

export const isNothing = (x: unknown) => x instanceof Nothing;

export const isMaybe = (x: unknown) => isJust(x) || isNothing(x);
