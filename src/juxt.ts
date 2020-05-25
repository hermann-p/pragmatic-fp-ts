import { Mappable } from "./main";

export function juxt<A, B>(fns: Mappable<A[], B>[], coll: A[]): B[];
export function juxt<A, B>(fns: Mappable<A[], B>[]): (coll: A[]) => B[];

export function juxt<A, B>(fns: Mappable<A[], B>[], coll?: A[]) {
  if (arguments.length === 1) return (_coll: A[]) => juxt(fns, _coll);
  const n = fns.length;

  const result: B[] = new Array(n);
  for (let i = 0; i < n; ++i) result[i] = fns[i](coll!);

  return result;
}
