import {
  either,
  Either,
  EitherMatcher,
  getValueOr,
  isLeft,
  isNothing,
  left,
  maybe,
  Maybe,
  MaybeMatcher,
  nothing,
  NilError,
} from "./main";
import { Effect, Mappable, Monad, UnboxPromise } from "./types";

export class Future<T, M extends Either<T> | Maybe<T>> {
  readonly value: Promise<M>;
  readonly bindDefault: Mappable<any, M>;
  readonly bindError: Mappable<any, M>;

  constructor(bindDefault: Mappable<any, M>, bindError: Mappable<any, M>, value: M | Promise<M>) {
    this.bindDefault = bindDefault;
    this.bindError = bindError;
    this.value = value instanceof Promise ? value : Promise.resolve(value);
  }

  _<U, TO = NonNullable<UnboxPromise<U>>>(
    f: Mappable<T, U | Promise<U>>,
    errorHint?: string | Error
  ): M extends Either<T> ? FutureEither<TO> : FutureMaybe<TO> {
    const toError = errorHint ? () => this.bindError(errorHint as any) : this.bindError;
    const applyBinding: Mappable<M, Promise<Monad<NonNullable<U>>>> = async (m: M) => {
      if (isNothing(m) || isLeft(m)) {
        return Promise.resolve(m as any);
      } // short circuit Left, Nothing,...
      try {
        const v = m.getValue();
        const applied = f(v);
        if (applied instanceof Promise) {
          return applied
            .then((appliedValue) => (m as Monad<T>)._(() => appliedValue))
            .catch((err) => {
              console.log(err, toError(err));
              return toError(err);
            });
        } else {
          return (m._ as any)(() => applied, errorHint);
        }
      } catch (err) {
        return toError(err) as any;
      }
    };
    const rm = this.value.then(applyBinding);
    return new Future(this.bindDefault as any, this.bindError as any, rm as any) as any;
  }

  filter(
    pred: Mappable<T, boolean | Promise<Boolean>>,
    errorHint?: string | Error
  ): M extends Either<T> ? FutureEither<T> : FutureMaybe<T> {
    return new Future(
      this.bindDefault,
      this.bindError,
      this.value
        .then(async (m) => {
          const filterResult = await ((m as Monad<T>).bind(pred) as any).getValue();
          return (m.filter as any)(() => filterResult, errorHint);
        })
        .catch(this.bindError)
    ) as any;
  }

  effect(f: Effect<T>): M extends Either<T> ? FutureEither<T> : FutureMaybe<T> {
    return new Future(
      this.bindDefault,
      this.bindError,
      this.value.then((m) => m.effect(f)).catch(this.bindError)
    ) as any;
  }

  match<
    B = T,
    MT = M extends Either<T> ? EitherMatcher<T, Error, B> : MaybeMatcher<T, B>,
    TO = NonNullable<UnboxPromise<B>>
  >(matcher: MT): M extends Either<any> ? FutureEither<TO> : FutureMaybe<TO> {
    const match = this.value
      .then((m) => (m as any).match(matcher as any))
      .then(this.bindDefault)
      .catch(this.bindError);
    return new Future(this.bindDefault as any, this.bindError as any, match as any) as any;
  }

  effectAsync(f: Effect<T>): M extends Either<T> ? FutureEither<T> : FutureMaybe<T> {
    this.value.then((m) => m.effect(f));
    return this as any;
  }

  getValueOr(alt: T) {
    return this.value.then(getValueOr(alt));
  }

  async getValue() {
    return (await this.value).getValue();
  }

  getMonad(): Promise<M> {
    return this.value;
  }

  async getReason() {
    const m = await this.value;
    if (isLeft(m)) {
      return (m as Either<any>).getReason();
    } else if (isNothing(m)) {
      return new NilError("Nothing()");
    } else throw new Error(`Can not get reason from ${m}`);
  }
}

type FutureEither<T> = Future<T, Either<T, Error>>;
export const futureEither = <T>(value: T): FutureEither<T> =>
  new Future<T, Either<T, Error>>(either, left, either(value));

type FutureMaybe<T> = Future<T, Maybe<T>>;
export const futureMaybe = <T>(value: T): FutureMaybe<T> =>
  new Future<T, Maybe<T>>(maybe, nothing, maybe(value));
