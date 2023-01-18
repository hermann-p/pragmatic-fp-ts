import { dropRight, getValueOr, Predicate } from "./main.ts";

// drops elements from the end of the list until the first one does
// not satisfy the predicate

export function dropRightWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export function dropRightWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];

export function dropRightWhile<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => dropRightWhile(pred, theColl);
  }

  const theColl = getValueOr([], coll);

  for (let i = theColl.length - 1, j = 0; i >= 0; --i, ++j) {
    if (!pred(theColl[i])) {
      return dropRight(j, theColl);
    }
  }
  return theColl;
}
