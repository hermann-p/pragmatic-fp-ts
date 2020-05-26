import { equals, getValueOr } from "./main";

export function indexOf<A>(value: A, coll: A[]): number;
export function indexOf<A>(value: A): (coll: A[]) => number;

export function indexOf<A>(value: A, coll?: A[]) {
  if (arguments.length === 1) return (theColl: A[]) => indexOf(value, theColl);

  const theColl = getValueOr([], coll);

  for (let i = 0; i < theColl.length; ++i) {
    if (equals(value, theColl[i])) return i;
  }
  return -1;
}
