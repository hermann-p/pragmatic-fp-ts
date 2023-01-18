import { Predicate } from "./main.ts";

export function takeRightWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export function takeRightWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];

export function takeRightWhile<A>(pred: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1)
    return (coll_: A[]) => takeRightWhile(pred, coll_);

  const result: A[] = [];
  const cc = coll || [];

  for (let i = cc.length - 1; i >= 0 && pred(cc[i]); --i) {
    result.push(cc[i]);
  }

  return result;
}
