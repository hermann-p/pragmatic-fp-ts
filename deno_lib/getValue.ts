import { isFunction, MonadType } from "./main.ts";

export function getValue<T>(candidate: MonadType<T> | undefined): T {
  if (isFunction((candidate as any)?.getValue)) {
    try {
      return getValue((candidate as any).getValue());
    } catch {
      return null as any;
    }
  } else {
    return candidate as T;
  }
}
