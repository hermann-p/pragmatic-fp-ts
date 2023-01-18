import { getValueOr, Predicate } from "./main.ts";

export function some<A>(pred: Predicate<A>, coll: A[]): boolean;
export function some<A>(pred: Predicate<A>): (coll: A[]) => boolean;

export function some<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => some(pred, _coll);
  }

  const values = getValueOr([], coll!);

  return values.reduce(
    (result: boolean, nextVal: A) => result || pred(nextVal),
    false
  );
}
