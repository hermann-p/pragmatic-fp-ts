import { getValueOr } from "./main.ts";

export function differenceWith<A>(setA: A[], setB: A[]): A[];
export function differenceWith<A>(setA: A[]): (setB: A[]) => A[];

export function differenceWith<A>(setA: A[], setB?: A[]) {
  if (arguments.length === 1) {
    return (b: A[]) => differenceWith(setA!, b);
  }

  const a = getValueOr([], setA);
  const b = new Set<A>(getValueOr([], setB));
  const result: A[] = [];
  a.forEach((elem) => {
    if (!b.has(elem)) {
      result.push(elem);
    }
  });
  return result;
}
