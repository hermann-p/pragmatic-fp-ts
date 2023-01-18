import { Mappable } from "./main.ts";

export function uniqBy<A, B>(cmp: Mappable<A, B>, a: A[]): A[];
export function uniqBy<A, B>(cmp: Mappable<A, B>): (a: A[]) => A[];

export function uniqBy<A, B>(cmp: Mappable<A, B>, a?: A[]) {
  if (arguments.length === 1) {
    return (b_: A[]) => uniqBy(cmp, b_);
  }

  const keys = new Set<B>();
  const results: A[] = [];

  (a || []).forEach((value) => {
    const key = cmp(value);
    if (!keys.has(key)) {
      results.push(value);
      keys.add(key);
    }
  });

  return results;
}
