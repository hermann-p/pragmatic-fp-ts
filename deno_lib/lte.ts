import { BasicComparable, getValue } from "./main.ts";

export function lte(a: BasicComparable, b: BasicComparable): boolean;
export function lte(a: BasicComparable): (b: BasicComparable) => boolean;

export function lte(a: BasicComparable, b?: BasicComparable) {
  if (arguments.length === 1) return (_b: BasicComparable) => lte(a, _b);
  return getValue(b) <= getValue(a);
}
