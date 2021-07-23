import { getValueOr, isFunction, isNil } from "./main";

export function keys<T extends Record<any, unknown>>(coll: T): string[];
export function keys<T>(coll: Map<T, unknown>): T[];
export function keys(input: unknown) {
  const coll: any = getValueOr({}, input);
  return isNil(coll) ? [] : isFunction(coll.keys) ? Array.from(coll.keys()) : Object.keys(coll);
}
