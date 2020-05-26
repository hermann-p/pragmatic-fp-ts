import { Predicate } from "./main";

export function takeWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export function takeWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];

export function takeWhile<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) return (coll_: A[]) => takeWhile(pred, coll_);

  const cc = coll || [];
  const result: A[] = [];

  for (let i = 0; i < cc.length; ++i) {
    if (pred(cc[i])) result.push(cc[i]);
    else continue;
  }
  return result;
}
