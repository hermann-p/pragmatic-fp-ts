import { concat, Dictionary, getValue, getValueOr } from "./main";

type ObjKey = string | number;
export function into<T>(
  target: Dictionary<T>,
  coll: [ObjKey, T][]
): Dictionary<T>;
export function into<T>(
  target: Dictionary<T>
): (coll: [ObjKey, T][]) => Dictionary<T>;

export function into<T>(target: T[], coll: T[]): T[];
export function into<T>(target: T[]): (coll: T[]) => T[];

export function into(target: any, coll?: any[]) {
  if (arguments.length === 1) {
    return (_coll: any[]) => into(target, _coll);
  }

  const theTarget = getValue(target);
  const theColl = getValueOr([], coll);

  return theTarget instanceof Array
    ? concat(theTarget, theColl)
    : theColl.reduce((accum: Dictionary, [key, value]) => {
        accum[key] = value;
        return accum;
      }, theTarget);
}
