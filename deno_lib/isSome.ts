import { isNotEmpty, isNotNil } from "./main.ts";

export function isSome<A = any>(
  x?: A
): x is NonNullable<Exclude<A, "" | {} | []>> {
  return isNotNil(x) && isNotEmpty(x);
}
