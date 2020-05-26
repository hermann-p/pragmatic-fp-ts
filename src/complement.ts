import { Predicate } from "./main";

// Wraps a predicate P so that when `P(a) = true` then
// `complement(P)(a) = false` and vice versa

export function complement<A>(pred: Predicate<A>, value: A): boolean;
export function complement<A>(pred: Predicate<A>): Predicate<A>;

export function complement<A>(pred: Predicate<A>, value?: A) {
  if (arguments.length === 1) {
    return (val: A) => complement(pred, val);
  }

  return !pred(value!);
}
