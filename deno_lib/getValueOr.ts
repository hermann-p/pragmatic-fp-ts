import { isFunction, isNil, Monad, MonadType } from "./main.ts";

export function getValueOr<T>(alt: T, candidate: MonadType<T> | undefined): T;
export function getValueOr<T>(alt: T): (candidate: MonadType<T> | undefined) => T;

export function getValueOr<T>(alt: T, candidate?: MonadType<T>): T {
  if (arguments.length === 1) {
    return ((_candidate: T) => getValueOr(alt, _candidate)) as any;
  }
  if (isFunction((candidate as any)?.getValue)) {
    try {
      return getValueOr(alt, (candidate as Monad<T>).getValueOr(alt));
    } catch {
      return alt;
    }
  } else {
    return isNil(candidate) ? alt : (candidate as T);
  }
}
