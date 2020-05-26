import { Predicate } from "./main";

export function partition<A>(by: Predicate<A>, coll: A[]): { t: A[]; f: A[] };
export function partition<A>(
  by: Predicate<A>
): (coll: A[]) => { t: A[]; f: A[] };

export function partition<A>(by: Predicate<A>, coll?: A[]) {
  if (arguments.length === 1) return (_coll: A[]) => partition(by, _coll);

  const result = { t: [] as A[], f: [] as A[] };

  (coll ?? []).forEach((value) => {
    if (by(value)) result.t.push(value);
    else result.f.push(value);
  });

  return result;
}
