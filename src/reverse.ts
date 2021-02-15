import { getValueOr } from "./main";

export function reverse(str: string): string;
export function reverse<A>(coll: A[]): A[];

export function reverse(coll: any[] | string) {
  const theColl = getValueOr([], coll);
  const reverted: any[] = new Array(theColl.length);

  for (let i = 0, j = theColl.length - 1; j >= 0; ++i, --j) {
    reverted[j] = theColl[i];
  }
  return typeof theColl === "string" ? reverted.join("") : reverted;
}
