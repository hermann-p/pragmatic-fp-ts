import { Effect, isNil, getValue, Mappable, Predicate } from "./main";
import { Monad, MonadType } from "./types";

export type Either<R, L = Error> = Left<R, L> | Right<R, L>;

type EitherMatcher<R, L, B> = {
  left: (err: L) => B;
  right: (val: R) => B;
};
export class Left<R, L = Error> extends Monad<R> {
  readonly errorValue: L;

  constructor(errVal: L) {
    super();
    this.errorValue = errVal;
  }

  _<B>(_: Mappable<R, B>): Either<NonNullable<B>, L> {
    return this as any;
  }
  bind = this._;
  bindM<B>(_: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L> {
    return this as any;
  }
  filter(_: any): Either<NonNullable<R>, L> {
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
    return either<B, L>(matcher.left(this.errorValue));
  }
  isLeft() {
    return true;
  }
  isRight() {
    return false;
  }
}

export class Right<R extends NonNullable<any>, L = Error> extends Monad<R> {
  readonly value: R;
  constructor(value: R) {
    super();
    this.value = value;
  }
  _<B>(fn: Mappable<R, B>): Either<NonNullable<B>, L | Error> {
    try {
      const result = fn(this.value);
      return either(getValue(result));
    } catch (err) {
      return left<NonNullable<B>, Error>(err);
    }
  }
  bind = this._;
  bindM<B>(fn: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L | Error> {
    try {
      const result = fn(this);
      return either(getValue(result));
    } catch (err) {
      return left<NonNullable<B>, L>(err);
    }
  }
  filter(fn: Predicate<R>): Either<NonNullable<R>, L | Error> {
    try {
      return fn(this.value)
        ? (this as any)
        : left<NonNullable<R>>(new Error("Did not pass filter"));
    } catch (err) {
      return left<NonNullable<R>>(new Error(`Exception while filtering: ${err.text}`));
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
    return either(matcher.right(this.value)) as any;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return true;
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
      : new Left<NonNullable<R>, Error>(new Error("Initially nil"))
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
