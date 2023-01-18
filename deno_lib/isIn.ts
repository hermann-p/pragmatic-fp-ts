import { getValue, isNil } from "./main.ts";

export function isIn(coll: string, what: string): boolean;
export function isIn<A>(coll: A[], what: A): boolean;
export function isIn(coll: string): (what: string) => boolean;
export function isIn<A>(coll: A[]): (what: A) => boolean;

export function isIn<A>(coll: A[] | string, what?: A | string) {
  if (arguments.length === 1)
    return (candidate: any) => isIn(coll as any, candidate);

  const candidate = getValue(what);
  const theColl = getValue(coll);

  return isNil(theColl) ? false : theColl.includes(candidate as any);
}
