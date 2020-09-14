export type Mappable<A, B> = (input: A) => B;
export type Endomorphism<A> = Mappable<A, A>;
export type Predicate<A> = (input: A) => boolean;

export type Effect<A> = (input: A) => unknown;

export type MonadType<A> = A | Monad<A>;

export type Dictionary<T extends any = any> = { [key: string]: T };

export type Comparator<A> = (a: A, b: A) => number;

export type UnboxPromise<T> = T extends Promise<infer U> ? U : T;

export type Equality<A> = (a: A, b: A) => boolean;
export type BasicComparable = number | string | Date;

export type Foldable<TValues, TResult> = (accum: TResult, value: TValues) => TResult;

export type SelectorPath = number | string | (number | string)[];

export type ArgTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export type GetLength<original extends any[]> = original extends {
  length: infer L;
}
  ? L
  : never;

export class NilError extends Error {
  constructor(message = "Encountered NIL") {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class InvalidValueError extends Error {
  constructor(moreDetails = "") {
    const baseMsg = "Value was invalid";
    super(moreDetails ? `${baseMsg}: ${moreDetails}` : baseMsg);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

type Prev<T extends number> = [
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62
][T];

export type GetLast<original extends any[]> = original[Prev<GetLength<original>>];

type Transform<A, B extends Monad<A>> = (monad: Monad<A>) => B;
export abstract class Monad<A> {
  abstract bind<B>(fn: Mappable<A, B>): MonadType<B>;
  abstract _<B>(fn: Mappable<A, B>): MonadType<B>;
  abstract bindM<B>(fn: Mappable<Monad<A>, MonadType<B>>): Monad<B>;
  abstract filter(fn: Predicate<A>): Monad<A>;
  abstract effect(fn: Effect<A>): Monad<A>;
  abstract getValue(): A;
  abstract getValueOr(alt: A): A;
  to<B extends Monad<A>>(transform: Transform<A, B>): ReturnType<typeof transform> {
    return transform(this);
  }
}
