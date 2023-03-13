import { Effect, identity, isNil, getValue, Mappable, Predicate } from "./main";
import { Monad, MonadType, NilError, InvalidValueError } from "./types";

export type Either<R, L = Error> = Left<R, L> | Right<R, L>;

export type EitherMatcher<R, L, B> = {
  left?: (err: L) => B;
  right?: (val: R) => B;
};
export class Left<R, L = Error> extends Monad<R> {
  readonly errorValue: L;

  constructor(errVal: L) {
    super();
    this.errorValue = errVal;
  }

  _<B>(_: Mappable<R, B>, _hint?: L): Either<NonNullable<B>, L> {
    return this as any;
  }
  bind = this._;
  bindM<B>(_: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L> {
    return this as any;
  }
  filter(_: any, _hint?: L): Either<NonNullable<R>, L> {
    return this as any;
  }
  effect(_: any): Either<NonNullable<R>, L> {
    return this as any;
  }
  getValue(): NonNullable<R> {
    throw new Error(`Can not get value of Left(${String(this.errorValue)})`);
  }
  getValueOr(alt: R): R {
    return alt;
  }
  match<B>(matcher: EitherMatcher<R, L, B>): Either<NonNullable<B>, L | Error> {
    return matcher.left ? either<B, L>(matcher.left(this.errorValue)) : (this as any);
  }
  isLeft() {
    return true;
  }
  isRight() {
    return false;
  }
  getReason() {
    return this.errorValue;
  }
}

export class Right<R extends NonNullable<any>, L = Error> extends Monad<R> {
  readonly value: R;
  constructor(value: R) {
    super();
    this.value = value;
  }
  _<B>(fn: Mappable<R, B>, hint?: L): Either<NonNullable<B>, L | Error> {
    try {
      const result = fn(this.value);
      const bound = either(getValue(result));
      return bound.isLeft() && hint ? left(hint) : bound;
    } catch (err) {
      return left<NonNullable<B>, Error>(err as Error);
    }
  }
  bind = this._;
  bindM<B>(fn: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L | Error> {
    try {
      const result = fn(this);
      return either(getValue(result));
    } catch (err) {
      return left<NonNullable<B>, L>(err as unknown as L);
    }
  }
  filter(fn: Predicate<R>, hint?: L): Either<NonNullable<R>, L | Error> {
    try {
      return fn(this.value)
        ? (this as any)
        : left<NonNullable<R>>(hint instanceof Error ? hint : new InvalidValueError(hint as any));
    } catch (err) {
      return left<NonNullable<R>>(
        new Error(`Exception while filtering: ${(err as Error).message}`)
      );
    }
  }

  effect(fn: Effect<R>): Either<NonNullable<R>, L> {
    try {
      fn(this.value);
    } catch (err) {}
    return this as any;
  }
  getValue(): NonNullable<R> {
    return this.value as NonNullable<R>;
  }
  getValueOr(_: R): R {
    return this.value;
  }
  match<B>(matcher: EitherMatcher<R, L, B>): Either<NonNullable<B>, L> {
    const m = matcher.right ?? (identity as any);
    return either(m(this.value)) as any;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return true;
  }
  getReason() {
    throw new Error("Can not get error reason for Right");
  }
}

export function left<R, L = Error>(errVal: L) {
  return new Left<R, L>(errVal);
}

export function right<R, L = Error>(value: R) {
  return new Right<R, L>(value);
}

export function either<R, L = Error>(
  value: MonadType<R>,
  errVal?: L
): Either<NonNullable<R>, L | Error> {
  const innerValue = getValue(value);
  return isNil(innerValue)
    ? errVal
      ? new Left<NonNullable<R>, L>(errVal)
      : new Left<NonNullable<R>, Error>(new NilError())
    : new Right<NonNullable<R>, L>(innerValue as any);
}

export function isLeft<R = any, L = Error>(el: unknown): el is Left<R, L> {
  return el instanceof Left;
}

export function isRight<R = any, L = Error>(el: unknown): el is Right<R, L> {
  return el instanceof Right;
}

export function isEither<R = any, L = Error>(el: unknown): el is Either<R, L> {
  return isLeft<R>(el) || isRight<L>(el);
}

export const throwLeftAsError = {
  right: (data: any) => data,
  left: (reason: Error | string) => {
    throw reason instanceof Error ? reason : new Error(reason);
    return reason as any;
  },
};
