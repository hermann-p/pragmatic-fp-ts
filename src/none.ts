import { Predicate } from "./main";

// true if no list elements passes the predicate

export function none<A>(pred: Predicate<A>, coll: A[]): boolean;
export function none<A>(pred: Predicate<A>): (coll: A[]) => boolean;

export function none<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) return (_coll: A[]) => none(pred, _coll);

  for (let i = 0; i < coll!.length; ++i) {
    if (pred(coll![i])) return false;
  }
  return true;
}
