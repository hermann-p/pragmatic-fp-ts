import { getValue, getValueOr } from "./main.ts";

export function insert<A>(position: number, value: A, coll: A[]): A[];
export function insert<A>(position: number, value: A): (coll: A[]) => A[];
export function insert<A>(
  position: number
): <A>(value: A) => (coll: A[]) => A[];

export function insert<A>(position: number, value?: A, coll?: A[]) {
  if (arguments.length === 1) {
    return function (value: A, theColl?: A[]) {
      return arguments.length === 1
        ? insert(position, value)
        : insert(position, value, theColl!);
    };
  } else if (arguments.length === 2) {
    return (theColl: A[]) => insert(position, value!, theColl);
  }

  const arr = getValueOr([], coll);
  const prefix = arr.slice(0, position);
  const suffix = arr.slice(position);

  return [...prefix, getValue(value), ...suffix];
}
