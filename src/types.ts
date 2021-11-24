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

export type First<C> = C extends any[] ? C[0] : never;

export type Length<original extends any[]> = original extends {
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

export type Tail<T extends any[]> = T extends [arg: any, ...rest: infer U] ? U : [];

export type Init<T extends any[]> = T extends [...head: infer U, rest: any] ? U : [];

export type Last<original extends any[]> = original[Length<Tail<original>>];

export type Prepend<T, U extends any[]> = [T, ...U];
export type Append<T, U extends any[]> = [...U, T];

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

export type Nil = null | undefined;
