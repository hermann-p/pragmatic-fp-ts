import { getValueOr, Mappable } from "./main";

export function differenceWith<A, B>(
  toKey: Mappable<A, B>,
  setA: A[],
  setB: A[]
): A[];
export function differenceWith<A, B>(
  toKey: Mappable<A, B>,
  setA: A[]
): (setB: A[]) => A[];
export function differenceWith<A, B>(
  toKey: Mappable<A, B>
): (setA: A[]) => (setB: A[]) => A[];

export function differenceWith<A, B>(
  toKey: Mappable<A, B>,
  setA?: A[],
  setB?: A[]
) {
  if (arguments.length === 1) {
    return function (a: A[], b?: A[]) {
      return arguments.length === 1
        ? differenceWith(toKey, a)
        : differenceWith(toKey, a, b!);
    };
  } else if (arguments.length === 2) {
    return (b: A[]) => differenceWith(toKey, setA!, b);
  }

  const a = getValueOr([], setA);
  const b = new Set<B>(getValueOr([], setB).map(toKey));
  const result: A[] = [];
  a.forEach((elem) => {
    if (!b.has(toKey(elem))) {
      result.push(elem);
    }
  });
  return result;
}
