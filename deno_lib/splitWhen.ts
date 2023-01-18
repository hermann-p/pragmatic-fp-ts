import { Predicate } from "./main.ts";

export function splitWhen<A>(when: Predicate<A>, coll: A[]): [A[], A[]];
export function splitWhen<A>(when: Predicate<A>): (coll: A[]) => [A[], A[]];

export function splitWhen<A>(when: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) return (coll_: A[]) => splitWhen(when, coll_);

  const cc = coll || [];
  const idx = cc.findIndex(when);
  return idx < 0 ? [cc, []] : [cc.slice(0, idx), cc.slice(idx)];
}
