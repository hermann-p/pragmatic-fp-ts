import { getValue, isNil } from "./main";

export function includes(what: string, coll: string): boolean;
export function includes<A>(what: A, coll: A[]): boolean;
export function includes(what: string): (coll: string) => boolean;
export function includes<A>(what: A): (coll: A[]) => boolean;

export function includes<A>(what: A | string, coll?: A[] | string) {
  if (arguments.length === 1) return (theColl: any) => includes(what, theColl);

  const candidate = getValue(what);
  const theColl = getValue(coll);

  return isNil(theColl) ? false : theColl.includes(candidate as any);
}
