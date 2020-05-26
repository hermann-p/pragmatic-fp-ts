import { getValueOr, Mappable } from "./main";

// Maps over a list of elements of arrays of elements and flattens one
// level of results. The intended list elements really should not be
// arrays themselves, else the output might be different from what you
// desire, as
//
// flatMap(fn, [1,2,[3,4],5,[6,7,8]) === map(fn, [1,2,3,4,5,6,7,8])
//
// but
//
// flatMap(fn, [[1,2],[3,4],[[5,6],[7,8]]]) === map(fn(1,2,3,4,[5,6],[7,8]))

export function flatMap<A, B>(
  mappable: Mappable<A, B | B[]>,
  coll: (A | A[])[]
): B[];
export function flatMap<A, B>(
  mappable: Mappable<A, B | B[]>
): (coll: (A | A[])[]) => B[];

export function flatMap<A, B>(mappable: Mappable<A, B | B[]>, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => flatMap(mappable, _coll);
  }

  return getValueOr([], coll!)
    .map((v) => (v instanceof Array ? v.map(mappable) : mappable(v)))
    .reduce(
      (result: B[], next: any) =>
        next instanceof Array ? [...result, ...next] : [...result, next],
      []
    );
}
