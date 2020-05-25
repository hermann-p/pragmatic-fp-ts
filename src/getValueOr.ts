import { isMonad, isNil, Monad, MonadType } from "./main";

export function getValueOr<T>(alt: T, candidate: MonadType<T> | undefined): T;
export function getValueOr<T>(
  alt: T
): (candidate: MonadType<T> | undefined) => T;

export function getValueOr<T>(alt: T, candidate?: MonadType<T>): T {
  if (arguments.length === 1) {
    return ((_candidate: T) => getValueOr(alt, _candidate)) as any;
  }
  if (isMonad(candidate)) {
    try {
      return (candidate as Monad<T>).getValueOr(alt);
    } catch {
      return alt;
    }
  } else {
    return isNil(candidate) ? alt : (candidate as T);
  }
}
