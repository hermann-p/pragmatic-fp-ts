import { Effect } from "./types.d";
import { Mappable, Predicate } from "./types";
import { Maybe, just, nothing } from "./Maybe";
import { Monad } from "./Monad";
import { getMonadValue } from "./tools";
import { isEither, isMonad, isNil, isSome } from "./predicates";

export type Either<L, R> = Left<L, R> | Right<L, R>;
export type Reason = Error | string;

export type EitherPattern<A, B> = {
  right: (value: A) => B;
  left: (value: Reason) => B;
};

export class Right<L, R> implements Monad<R> {
  private readonly value: R;
  constructor(value: R | Monad<R>) {
    this.value = getMonadValue(value);
  }
  bind<R2>(fn: Mappable<R, R2 | Either<R, R2>>): Either<Reason, R2> {
    try {
      const { value } = this;
      return new Right<Reason, R2>(fn(value));
    } catch (err) {
      return new Left<Reason, R2>(err);
    }
  }
  match<R2>(pattern: EitherPattern<R, R2>): Either<L, R2> {
    try {
      const { value } = this;
      return new Right<Reason, R2>(pattern.right(value)) as any;
    } catch (err) {
      return new Left<Reason, R2>(err) as any;
    }
  }
  filter(predicate: Predicate<R>): Either<L, R> {
    const { value } = this;
    try {
      return predicate(value)
        ? this
        : (left(
            `<${typeof value}>${JSON.stringify(value, null, 2)} did not match predicate ${
              predicate.name
            }`
          ) as any);
    } catch (err) {
      return left(err) as any;
    }
  }
  getValue() {
    return this.value;
  }
  getValueOr() {
    return this.getValue();
  }
  getReason(): L {
    throw new Error("Can't get reason from Right");
  }
  effect(fx: Effect<R>): Either<L, R> {
    try {
      const { value } = this;
      fx(value);
      return this;
    } catch (err) {
      return new Left<Reason, R>(err) as any;
    }
  }
  isMonad() {
    return true;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return true;
  }
  toMaybe(): Maybe<R> {
    return just(this.value);
  }
  toString() {
    return `Right(${JSON.stringify(this.value)})`;
  }
}

export class Left<L, R> implements Monad<R> {
  private readonly reason: L;
  constructor(reason: L) {
    this.reason = reason;
  }
  bind<R2>(_: Mappable<R, R2 | Either<R, R2>>): Either<Reason, R2> {
    return this as any;
  }
  match<R2>(pattern: EitherPattern<R, R2>): Either<L, R2> {
    try {
      const { reason } = this;
      return new Right<L, R2>(pattern.left((reason as any) as Reason));
    } catch (err) {
      return new Left<L, R2>(err as any);
    }
  }
  filter(_: Predicate<R>): Either<L, R> {
    return this;
  }
  getValue(): any {
    throw new Error("Can't get value of Left");
  }
  getValueOr(alternative: R): R {
    return alternative;
  }
  getReason(): L {
    return this.reason;
  }
  effect(_: Effect<R>): Either<L, R> {
    return this as any;
  }
  isMonad() {
    return true;
  }
  isLeft() {
    return true;
  }
  isRight() {
    return false;
  }
  toMaybe(): Maybe<R> {
    return nothing();
  }
  toString() {
    return `Left(${JSON.stringify(this.reason)})`;
  }
}

export const right = <L, R>(value: R | Monad<R>) => new Right<L, R>(getMonadValue(value));
export const left = <L, R>(reason: L) => new Left<L, R>(reason);

export const either = <L, R>(value: R | Monad<R>): Either<L, R> =>
  isEither(value)
    ? (value as Either<L, R>)
    : isMonad(value)
    ? isSome(value)
      ? right((value as Monad<R>).getValue())
      : left("Converted from Left-like" as any)
    : right(value as R);

export const eitherIf = <Reason, R>(pred: Predicate<R>) => (value: R | Monad<R>) => {
  const _value: R = (!isNil(value) ? getMonadValue(value) : value) as R;
  try {
    return pred(_value)
      ? right<Reason, R>(value)
      : left<Reason, R>(
          `<${typeof _value}>${_value} did not satisfy predicate ${pred.name}` as any
        );
  } catch (err) {
    return left<Reason, R>(err);
  }
};

export const eitherNullable = <R>(value: R | Monad<R>) => eitherIf(isSome)(value);
