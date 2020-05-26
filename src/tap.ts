import { Effect, getValue, Monad } from "./main";

export function tap<A, M extends Monad<A>>(
  effect: Effect<A>,
  value: Monad<A>
): M;
export function tap<A, M extends Monad<A>>(effect: Effect<A>): (value: A) => M;
export function tap<A>(effect: Effect<A>, value: A): A;
export function tap<A>(effect: Effect<A>): (value: A) => A;

// For tapping a monadic value with a non-monadic effect like
//     tap(inc(a), Maybe(4))
// you need to explicitly type-hint the call:
//     tap<number, Maybe<number>>(inc(a), Maybe(4))
export function tap<A>(effect: Effect<A>, value?: A) {
  if (arguments.length === 1) {
    return (theValue: A) => tap(effect, theValue as any);
  }

  effect(getValue(value));
  return value;
}
