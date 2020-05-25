import { getValue, getValueOr } from "./main";

// prepends collection with element or string with string

export function prepend<A>(el: A, coll: A[]): A[];
export function prepend(head: string, tail: string): string;
export function prepend<A>(
  el: A
): <B = A extends string ? string : A[]>(coll: B) => B;

export function prepend(el: unknown, coll?: unknown) {
  if (arguments.length === 1) {
    return (_coll: unknown) => prepend(el, _coll as any) as any;
  }

  return coll instanceof Array
    ? [getValue(el), ...getValueOr([], coll!)]
    : (((getValueOr("", el) as string) +
        (getValueOr("", coll) as string)) as any);
}
