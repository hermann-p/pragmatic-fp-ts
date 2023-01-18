import { equals, getValueOr } from "./main.ts";

// Remove successive repeats in a list, leaving only one copy

export function dropRepeats<A>(coll: A[]) {
  const theColl = getValueOr([], coll);
  const result: A[] = [];
  let lastVal: A;

  for (let i = 0; i < theColl.length; ++i) {
    const nextVal = theColl[i];
    if (i === 0 || !equals(nextVal, lastVal!)) {
      result.push(nextVal);
    }
    lastVal = nextVal;
  }

  return result;
}
