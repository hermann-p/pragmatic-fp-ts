import { Dictionary, getValueOr, isFunction, isNil } from "./main.ts";

export function values<T>(coll: Dictionary<T>): T[];
export function values<T>(coll: Map<unknown, T>): T[];
export function values<T>(coll: Set<T>): T[];
export function values<T>(coll: T[]): T[];
export function values(dict: unknown) {
  const coll: any = getValueOr({}, dict);
  return isNil(coll as any)
    ? []
    : isFunction(coll.values)
    ? Array.from(coll.values())
    : Array.isArray(coll)
    ? coll
    : Object.values(coll);
}
