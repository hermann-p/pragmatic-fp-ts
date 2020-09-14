import {
  either,
  Either,
  getValue,
  getValueOr,
  isLeft,
  isNothing,
  left,
  maybe,
  Maybe,
  nothing,
} from "./main";
import { Effect, Mappable, Monad, UnboxPromise } from "./types";

export class Future<T, M extends Monad<T>> {
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
  ): Future<TO, M extends Either<T> ? Either<TO> : Maybe<TO>> {
    const toError = errorHint ? () => this.bindError(errorHint as any) : this.bindError;
    const applyBinding: Mappable<M, Promise<Monad<NonNullable<U>>>> = async (m: M) => {
      if (isNothing(m) || isLeft(m)) {
        return Promise.resolve(m as any);
      } // short circuit Left, Nothing,...
      try {
        const v = m.getValue();
        const applied = f(v);
        return (((applied instanceof Promise
          ? applied.catch(this.bindError)
          : Promise.resolve(applied)) as unknown) as Promise<Monad<NonNullable<U>>>).then((bound) =>
          (m.bind as any)(() => bound, errorHint)
        );
      } catch (err) {
        return this.bindError(toError) as any;
      }
    };
    const rm = this.value.then(applyBinding);
    return new Future(this.bindDefault as any, this.bindError as any, rm as any);
  }

  filter(pred: Mappable<T, boolean | Promise<Boolean>>, errorHint?: string | Error): Future<T, M> {
    return new Future(
      this.bindDefault,
      this.bindError,
      this.value
        .then(async (m) => {
          const filterResult = await (m.bind(pred) as any).getValue();
          return (m.filter as any)(() => filterResult, errorHint);
        })
        .catch(this.bindError)
    ) as any;
  }

  effect(f: Effect<T>): Future<T, M> {
    return new Future(
      this.bindDefault,
      this.bindError,
      this.value.then((m) => m.effect(f)).catch(this.bindError)
    ) as any;
  }

  effectAsync(f: Effect<T>): Future<T, M> {
    this.value.then((m) => m.effect(f));
    return this;
  }

  getValueOr(alt: T) {
    return this.value.then(getValueOr(alt));
  }

  getValue() {
    return this.value.then(getValue);
  }

  getMonad(): Promise<M> {
    return this.value;
  }
}

type FutureEither<T> = Future<T, Either<T, Error>>;
export const futureEither = <T>(value: T): FutureEither<T> =>
  new Future<T, Either<T, Error>>(either, left, either(value));

type FutureMaybe<T> = Future<T, Maybe<T>>;
export const futureMaybe = <T>(value: T): FutureMaybe<T> =>
  new Future<T, Maybe<T>>(maybe, nothing, maybe(value));
