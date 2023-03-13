import { Effect, Mappable, UnboxPromise } from "./types";

export interface ErrorLog<T> {
  _: <U>(f: Mappable<T, U>) => ErrorLog<U>;
  effect: (f: Effect<T>) => ErrorLog<T>;
  try: <U>(f: Mappable<T, U>, alt: U) => ErrorLog<U>;
  getErrors: () => Error[];
  getValue: () => T;
  getValueOr: <U>(alt: U) => NonNullable<T> | U;
  hasErrors: () => boolean;
}
function ErrorLog<T>(expr: T, errors: Array<Error> = []) {
  return {
    _: <U>(f: Mappable<T, U>) => ErrorLog(f(expr), errors),
    try: <U>(f: Mappable<T, U>, alt: U): ErrorLog<U> => {
      try {
        return ErrorLog(f(expr), errors);
      } catch (err) {
        return ErrorLog(alt, [...errors, err as Error]);
      }
    },
    effect: (f: Effect<T>): ErrorLog<T> => {
      try {
        f(expr);
        return ErrorLog(expr, errors);
      } catch (err) {
        return ErrorLog(expr, [...errors, err as Error]);
      }
    },
    getErrors: () => errors,
    getValue: () => expr,
    getValueOr: <U>(alt: T | U) => (expr || alt) as NonNullable<T> | U,
    hasErrors: () => errors.length > 0,
  };
}

export interface FutureErrorLog<T> {
  _: <U>(f: Mappable<T, U>) => FutureErrorLog<U>;
  effect: (f: Effect<T>) => FutureErrorLog<T>;
  try: <U>(f: Mappable<T, U>, alt: UnboxPromise<U>) => FutureErrorLog<U>;
  getErrors: () => Promise<Error[]>;
  getValue: () => Promise<UnboxPromise<T>>;
  getValueOr: <U extends T>(alt: U) => Promise<NonNullable<UnboxPromise<T>>>;
  hasErrors: () => Promise<boolean>;
}
const FutureErrorLog = <T>(
  expr: T | Promise<T>,
  errors: Promise<Error[]> = Promise.resolve([])
): FutureErrorLog<T> => {
  const exprP = expr instanceof Promise ? expr : Promise.resolve(expr);
  const tryOrAppendError = (p: Promise<any>, es: Promise<Error[]>) =>
    p.then(() => es).catch(async (err) => [...(await errors), err]);
  return {
    _: <U>(f: Mappable<T, U>): FutureErrorLog<U> => FutureErrorLog(exprP.then(f), errors),
    effect: (fx: Effect<T>) => FutureErrorLog(exprP, tryOrAppendError(exprP.then(fx), errors)),
    try: <U>(f: Mappable<T, U>, alt: UnboxPromise<U>): FutureErrorLog<U> => {
      const p = exprP.then(f);
      return FutureErrorLog(
        p.catch(() => alt as any),
        tryOrAppendError(p, errors)
      );
    },
    getErrors: () => errors,
    getValue: () => exprP as unknown as Promise<UnboxPromise<T>>,
    getValueOr: async (alt: T | Promise<T>) =>
      (await exprP) || ((alt instanceof Promise ? await alt : (alt as any)) as any),
    hasErrors: () => errors.then((e) => e.length > 0),
  };
};

export const errorLogged = <T>(value: T) => ErrorLog(value);
export const errorLoggedFuture = <T>(value: T) => FutureErrorLog(value);
