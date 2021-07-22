import { getValueOr, isEmpty, isFunction } from "./main";

export function keys<T extends Record<any, unknown>>(coll: T): string[];
export function keys<T>(coll: Map<T, unknown>): T[];
export function keys(input: unknown) {
  const coll: any = getValueOr({}, input);
  return isEmpty(coll)
    ? []
    : isFunction(coll.values)
    ? Array.from(coll.values())
    : Object.keys(coll);
}
