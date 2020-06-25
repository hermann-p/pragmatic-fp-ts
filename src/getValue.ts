import { isFunction, MonadType } from "./main";

export function getValue<T>(candidate: MonadType<T> | undefined): T {
  if (isFunction((candidate as any)?.getValue)) {
    try {
      return (candidate as any).getValue();
    } catch {
      return null as any;
    }
  } else {
    return candidate as T;
  }
}
