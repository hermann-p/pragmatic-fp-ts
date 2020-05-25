import { drop, getValueOr, Predicate } from "./main";

// drops elements from the start of the list until the first one does
// not satisfy the predicate

export function dropWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export function dropWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];

export function dropWhile<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => dropWhile(pred, theColl);
  }

  const theColl = getValueOr([], coll);

  for (let i = 0; i < theColl.length; ++i) {
    if (!pred(theColl[i])) {
      return drop(i, theColl);
    }
  }
  return theColl;
}
