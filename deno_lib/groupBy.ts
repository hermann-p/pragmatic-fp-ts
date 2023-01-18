import { Dictionary, getValueOr, Mappable } from "./main.ts";

export function groupBy<A>(
  mkGroup: Mappable<A, string>,
  coll: A[]
): Dictionary<A[]>;
export function groupBy<A>(
  mkGroup: Mappable<A, string>
): (coll: A[]) => Dictionary<A[]>;

export function groupBy<A>(mkGroup: Mappable<A, string>, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => groupBy(mkGroup, theColl);
  }

  return getValueOr([], coll).reduce((accum: Dictionary<A[]>, value: A) => {
    const group = mkGroup(value);
    if (!accum[group]) accum[group] = [];
    accum[group].push(value);
    return accum;
  }, {});
}
