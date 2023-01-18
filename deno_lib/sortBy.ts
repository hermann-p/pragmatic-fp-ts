import { Comparator } from "./main.ts";

export function sortBy<A>(compare: Comparator<A>, coll: A[]): A[];
export function sortBy<A>(compare: Comparator<A>): (coll: A[]) => A[];

export function sortBy<A>(compare: Comparator<A>, coll?: A[]) {
  if (arguments.length === 1) return (_coll: A[]) => sortBy(compare, _coll);

  return Array.from(coll!).sort(compare);
}
