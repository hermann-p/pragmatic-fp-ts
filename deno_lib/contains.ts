import { getValue, getValueOr, isNil } from "./main.ts";

export function contains<A>(el: A, coll: A[]): boolean;
export function contains<A>(el: A): (coll: A[]) => boolean;
export function contains(part: string, full: string): boolean;
export function contains(part: string): (full: string) => boolean;

export function contains(what: any, who?: any) {
  if (arguments.length === 1) {
    const fn = (_who: any) => contains(what as any, _who as any);
    return fn;
  }

  if (isNil(getValue(who)) || isNil(what)) return false;

  return typeof what === "string"
    ? getValueOr<string>("", who).includes(getValueOr<string>("", what))
    : getValueOr<unknown[]>([], who).includes(getValue<unknown>(what));
}
