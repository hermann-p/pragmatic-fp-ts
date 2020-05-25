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

  bind<B>(_: Mappable<R, B>): Either<B, L> {
    return this as any;
  }
  bindM<B>(_: Mappable<Monad<R>, Monad<B>>): Either<B, L> {
    return this as any;
  }
  filter(_: any): Either<R, L> {
    return this;
  }
  effect(_: any): Either<R, L> {
    return this;
  }
  getValue(): R {
    throw new Error(`Can not get value of Left(${String(this.errorValue)})`);
  }
  getValueOr(alt: R): R {
    return alt;
  }
  match<B>(matcher: EitherMatcher<R, L, B>): Either<B, L | Error> {
    return either<B, L>(matcher.left(this.errorValue));
  }
}

export class Right<R, L = Error> extends Monad<R> {
  readonly value: R;
  constructor(value: R) {
    super();
    this.value = value;
  }
  bind<B>(fn: Mappable<R, B>): Either<B, L | Error> {
    try {
      const result = fn(this.value);
      return either(getValue(result));
    } catch (err) {
      return left<B, Error>(err);
    }
  }
  bindM<B>(fn: Mappable<Monad<R>, Monad<B>>): Either<B, L | Error> {
    try {
      const result = fn(this);
      return either(getValue(result));
    } catch (err) {
      return left<B, L>(err);
    }
  }
  filter(fn: Predicate<R>): Either<R, L | Error> {
    try {
      return fn(this.value) ? this : left<R>(new Error("Did not pass filter"));
    } catch (err) {
      return left<R>(new Error(`Exception while filtering: ${err.text}`));
    }
  }

  effect(fn: Effect<R>): Either<R, L> {
    try {
      fn(this.value);
    } catch (err) {}
    return this;
  }
  getValue(): R {
    return this.value;
  }
  getValueOr(_: R): R {
    return this.value;
  }
  match<B>(matcher: EitherMatcher<R, L, B>): Either<B, L> {
    return either(matcher.right(this.value)) as any;
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
): Either<R, L | Error> {
  const innerValue = getValue(value);
  return isNil(innerValue)
    ? errVal
      ? new Left<R, L>(errVal)
      : new Left<R, Error>(new Error("Initially nil"))
    : new Right<R, L>(innerValue);
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
