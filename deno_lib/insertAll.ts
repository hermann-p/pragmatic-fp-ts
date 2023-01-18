import { getValueOr } from "./main.ts";

export function insertAll<A>(position: number, values: A[], coll: A[]): A[];
export function insertAll<A>(position: number, values: A[]): (coll: A[]) => A[];
export function insertAll<A>(
  position: number
): <A>(values: A[]) => (coll: A[]) => A[];

export function insertAll<A>(position: number, values?: A[], coll?: A[]) {
  if (arguments.length === 1) {
    return function (values: A[], theColl?: A[]) {
      return arguments.length === 1
        ? insertAll(position, values)
        : insertAll(position, values, theColl!);
    };
  } else if (arguments.length === 2) {
    return (theColl: A[]) => insertAll(position, values!, theColl);
  }

  const arr = getValueOr([], coll);
  const prefix = arr.slice(0, position);
  const suffix = arr.slice(position);

  return [...prefix, ...getValueOr([], values), ...suffix];
}
