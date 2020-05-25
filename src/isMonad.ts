import { Monad } from "./main";

export function isMonad<A = any>(candidate: unknown): candidate is Monad<A> {
  return candidate instanceof Monad;
}
