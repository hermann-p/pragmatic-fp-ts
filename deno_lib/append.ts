import { getValue, getValueOr } from "./main.ts";

// Appends the first string to the second string or the first element
// to the collection

export function append<A>(el: A, coll: A[]): A[];
export function append(tail: string, head: string): string;
export function append<A>(
  tail: A
): <B extends A extends string ? string | string[] : A[]>(head: B) => B extends string ? string : B;

export function append(el: unknown, coll?: unknown) {
  if (arguments.length === 1) {
    return (_coll: unknown) => append(el, _coll as any) as any;
  }

  return coll instanceof Array
    ? [...getValueOr([], coll!), getValue(el)]
    : (((getValueOr("", coll) as string) + (getValueOr("", el) as string)) as any);
}
