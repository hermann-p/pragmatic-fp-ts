import { getValueOr, Predicate } from "./main.ts";

// Tests if all array items pass the predicate

export function all<A>(pred: Predicate<A>, coll: A[]): boolean;
export function all<A>(pred: Predicate<A>): (coll: A[]) => boolean;

export function all<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => all(pred, _coll);
  }

  const values = getValueOr([], coll!);

  return values.reduce(
    (result: boolean, nextVal: A) => result && pred(nextVal),
    true
  );
}
