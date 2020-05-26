import { Dictionary, getValueOr, Mappable } from "./main";

export function indexBy<A>(
  mkIndex: Mappable<A, string>,
  coll: A[]
): Dictionary<A>;

export function indexBy<A>(
  mkIndex: Mappable<A, string>
): (coll: A[]) => Dictionary<A>;

export function indexBy<A>(mkIndex: Mappable<A, string>, coll?: A[]) {
  if (arguments.length === 1)
    return (theColl: A[]) => indexBy(mkIndex, theColl);

  return getValueOr([], coll).reduce((accum: Dictionary<A>, next: A) => {
    accum[mkIndex(next)] = next;
    return accum;
  }, {});
}
