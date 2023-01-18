import { clamp, getValueOr } from "./main.ts";

// drops first n values from a list

export function drop<A>(n: number, coll: A[]): A[];
export function drop<A>(n: number): (coll: A[]) => A[];

export function drop<A>(n: number, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => drop(n, theColl);
  }

  const theColl = getValueOr([], coll);
  const toDrop = clamp(0, theColl.length, getValueOr(0, n));
  return theColl.slice(toDrop);
}
