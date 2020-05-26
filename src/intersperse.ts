import { getValue, getValueOr } from "./main";

export function intersperse<A>(elem: A, coll: A[]): A[];
export function intersperse<A>(elem: A): (coll: A[]) => A[];

export function intersperse<A>(elem: A, coll?: A[]) {
  if (arguments.length === 1) return (_coll: A[]) => intersperse(elem, _coll);

  const theElem = getValue(elem);
  const theColl = getValueOr([], coll);

  const result = [];
  for (let i = 0; i < theColl.length - 1; ++i) {
    result.push(theColl[i], theElem);
  }
  if (theColl.length > 0) {
    result.push(theColl[theColl.length - 1]);
  }
  return result;
}
