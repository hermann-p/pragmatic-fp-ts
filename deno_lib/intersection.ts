import { getValueOr } from "./main.ts";

export function intersection<A>(a: A[], b: A[]): A[];
export function intersection<A>(a: A[]): (b: A[]) => A[];

export function intersection<A>(a: A[], b?: A[]) {
  if (arguments.length === 1) {
    return (_b: A[]) => intersection(a, _b);
  }

  const arrA = getValueOr([], a);
  const setB = new Set(getValueOr([], b!));
  const result = [];

  for (let i = 0; i < arrA.length; ++i) {
    if (setB.has(arrA[i])) result.push(arrA[i]);
  }
  return result;
}
