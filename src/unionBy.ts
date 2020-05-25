import { Mappable } from "./main";

export function unionBy<A, B>(cmp: Mappable<A, B>, a: A[], b: A[]): A[];
export function unionBy<A, B>(cmp: Mappable<A, B>, a: A[]): (b: A[]) => A[];
export function unionBy<A, B>(cmp: Mappable<A, B>): (a: A[]) => (b: A[]) => A[];

export function unionBy<A, B>(cmp: Mappable<A, B>, a?: A[], b?: A[]) {
  if (arguments.length === 1) {
    return function (a_: A[], b_?: A[]) {
      return arguments.length === 1 ? unionBy(cmp, a_) : unionBy(cmp, a_, b_!);
    };
  } else if (arguments.length === 2) {
    return (b_: A[]) => unionBy(cmp, a!, b_);
  }

  const keys = new Set<B>();
  const result: A[] = [];

  (a || []).forEach((value) => {
    const key = cmp(value);
    if (!keys.has(key)) {
      result.push(value);
      keys.add(key);
    }
  });

  (b || []).forEach((value) => {
    const key = cmp(value);
    if (!keys.has(key)) {
      result.push(value);
      keys.add(key);
    }
  });

  return result;
}
