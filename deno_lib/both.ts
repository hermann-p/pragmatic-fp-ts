import { getValue, Predicate } from "./main.ts";

// Tests if the value passes both predicates

export function both<A>(p1: Predicate<A>, p2: Predicate<A>, value: A): boolean;
export function both<A>(
  p1: Predicate<A>,
  p2: Predicate<A>
): (value: A) => boolean;
export function both<A>(
  p1: Predicate<A>
): (p2: Predicate<A>) => (value: A) => boolean;

export function both<A>(p1: Predicate<A>, p2?: Predicate<A>, value?: A) {
  if (arguments.length === 1) {
    return function (_p2: Predicate<A>, _value?: A) {
      if (arguments.length === 1) {
        return both(p1, _p2);
      } else {
        return both(p1, _p2, _value!);
      }
    };
  } else if (arguments.length === 2) {
    return (_value: A) => both(p1, p2!, _value);
  }

  const val = getValue(value!);
  return p1(val) && p2!(val);
}
