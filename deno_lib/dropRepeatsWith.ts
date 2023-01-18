import { Equality, getValueOr } from "./main.ts";

// removes successive repeats in a list, identify them with mappable, leaving only one copy

export function dropRepeatsWith<A>(isEqual: Equality<A>, coll: A[]): A[];
export function dropRepeatsWith<A>(isEqual: Equality<A>): (coll: A[]) => A[];

export function dropRepeatsWith<A>(isEqual: Equality<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return (theColl: A[]) => dropRepeatsWith(isEqual, theColl);
  }

  const result: A[] = [];
  const theColl = getValueOr([], coll);
  let lastValue: A;

  for (let i = 0; i < theColl.length; ++i) {
    const value = theColl[i];
    if (i === 0 || !isEqual(value, lastValue!)) {
      result.push(value);
    }
    lastValue = value;
  }
  return result;
}
