import { Dictionary, isEmpty, isFunction, getValueOr } from "./main";

export function values<T>(coll: Dictionary<T>): T[];
export function values<T>(coll: Map<unknown, T>): T[];
export function values<T>(coll: Set<T>): T[];
export function values(dict: unknown) {
  const coll: any = getValueOr({}, dict);
  return isEmpty(coll as any)
    ? []
    : isFunction(coll.values)
    ? Array.from(coll.values())
    : Object.keys(coll);
}
