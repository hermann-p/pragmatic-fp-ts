import {
  either,
  Either,
  getValue,
  getValueOr,
  isLeft,
  isNothing,
  maybe,
  Maybe,
  nothing,
  left,
} from "./main";
import { Effect, Mappable, Monad } from "./types";

export class Future<T, M extends Monad<T>> {
  readonly value: Promise<M>;
  readonly bindDefault: Mappable<any, M>;
  readonly bindError: Mappable<any, M>;

  constructor(bindDefault: Mappable<any, M>, bindError: Mappable<any, M>, value: M | Promise<M>) {
    this.bindDefault = bindDefault;
    this.bindError = bindError;
    this.value = value instanceof Promise ? value : Promise.resolve(value);
  }

  _<U>(f: Mappable<T, U | Promise<U>>): Future<NonNullable<U>, Monad<NonNullable<U>>> {
    const applyBinding: Mappable<M, Promise<Monad<NonNullable<U>>>> = async (m: M) => {
      if (isNothing(m) || isLeft(m)) {
        console.log("exiting with", m);
        return Promise.resolve(m as any);
      } // short circuit Left, Nothing,...
      try {
        const v = m.getValue();
        const applied = f(v);
        return applied instanceof Promise
          ? await applied.catch(this.bindError)
          : Promise.resolve(applied);
      } catch (err) {
        console.log("catching error of", err.name, err);
        return this.bindError(err) as any;
      }
    };
    const rm = this.value.then(applyBinding);
    return new Future(this.bindDefault as any, this.bindError as any, rm);
  }

  filter(pred: Mappable<T, boolean | Promise<Boolean>>): Future<T, M> {
    return new Future(
      this.bindDefault,
      this.bindError,
      this.value
        .then(async (m) => {
          const filterResult = await (m.bind(pred) as any).getValue();
          return m.filter(() => filterResult);
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

  getMonad() {
    return this.value;
  }
}

export const futureEither = <T>(value: T) =>
  new Future<T, Either<T, Error>>(either, left, either(value));

export const futureMaybe = <T>(value: T) => new Future<T, Maybe<T>>(maybe, nothing, maybe(value));
