import { isMonad, Monad, MonadType } from "./main";

export function getValue<T>(candidate: MonadType<T> | undefined): T {
  if (isMonad(candidate)) {
    try {
      return (candidate as Monad<T>).getValue();
    } catch {
      return null as any;
    }
  } else {
    return candidate as T;
  }
}
