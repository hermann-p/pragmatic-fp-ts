import { getValueOr } from "./main";

export function reverse<A>(coll: A[]) {
  const theColl = getValueOr([], coll);
  const reverted: A[] = new Array(theColl.length);

  for (let i = 0, j = theColl.length - 1; j >= 0; ++i, --j) {
    reverted[j] = theColl[i];
  }
  return reverted;
}
