import { Monad } from "./main.ts";

export function isMonad<A = any>(candidate: unknown): candidate is Monad<A> {
  return candidate instanceof Monad;
}
