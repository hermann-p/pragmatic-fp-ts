import { Effect, getValue, Mappable, Predicate } from "./main";
import { Monad } from "./types";

export type Maybe<A> = Just<A> | Nothing<A>;

type MaybeMatcher<A, B> = { just: Mappable<NonNullable<A>, B>; nothing: () => B };
export class Nothing<A> extends Monad<A> {
  _<B>(_: Mappable<A, B>): Maybe<NonNullable<B>> {
    return this as any;
  }
  bind = this._;
  bindM<B>(_: Mappable<Monad<A>, Monad<B>>): Maybe<NonNullable<B>> {
    return this as any;
  }
  filter(_: any): Maybe<NonNullable<A>> {
    return this as any;
  }
  effect(_: any): Maybe<NonNullable<A>> {
    return this as any;
  }
  getValue(): A {
    throw new Error("Can not get value of Nothing");
  }
  getValueOr(alt: A): A {
    return alt;
  }
  match<B>(matcher: MaybeMatcher<A, B>): Maybe<NonNullable<B>> {
    return maybe(matcher.nothing());
  }
}

export class Just<A> extends Monad<A> {
  readonly value: A;
  constructor(value: A) {
    super();
    this.value = value;
  }
  _<B>(fn: Mappable<A, B>): Maybe<NonNullable<B>> {
    try {
      const result = fn(this.value);
      return maybe(getValue(result));
    } catch (err) {
      return nothing<never>();
    }
  }
  bind = this._;
  bindM<B>(fn: Mappable<Monad<A>, Monad<B>>): Maybe<NonNullable<B>> {
    try {
      const result = fn(this);
      return maybe(getValue(result));
    } catch (err) {
      return nothing<never>();
    }
  }
  filter(fn: Predicate<A>): Maybe<NonNullable<A>> {
    try {
      return fn(this.value) ? (this as any) : nothing<never>();
    } catch {
      return nothing<never>();
    }
  }

  effect(fn: Effect<A>): Maybe<NonNullable<A>> {
    try {
      fn(this.value);
    } catch (err) {}
    return this as any;
  }
  getValue(): NonNullable<A> {
    return this.value as NonNullable<A>;
  }
  getValueOr(_: A): A {
    return this.value;
  }
  match<B>(matcher: MaybeMatcher<A, B>): Maybe<NonNullable<B>> {
    return maybe(matcher.just(this.value as NonNullable<A>));
  }
}

export const just = <T>(value: T) => {
  return new Just<T>(value);
};
export const nothing = <T>() => {
  return new Nothing<T>();
};

export const maybe = <U, T = NonNullable<U>>(value: U | Monad<U>): Maybe<T> => {
  const extractedValue = getValue<U>(value);
  return extractedValue === null || extractedValue === undefined
    ? (nothing() as Nothing<T>)
    : just<T>(extractedValue as any);
};

export const isJust = (x: unknown) => x instanceof Just;

export const isNothing = (x: unknown) => x instanceof Nothing;

export const isMaybe = (x: unknown) => isJust(x) || isNothing(x);
