import { clamp, getValueOr } from "./main";

// "drops n elements from the end of a list

export function dropRight<A>(n: number, coll: A[]): A[];
export function dropRight<A>(n: number): (coll: A[]) => A[];

export function dropRight<A>(n: number, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => dropRight(n, theColl);
  }

  const theColl = getValueOr([], coll);
  const toDrop = clamp(0, theColl.length, getValueOr(0, n));
  return theColl.slice(0, theColl.length - toDrop);
}
