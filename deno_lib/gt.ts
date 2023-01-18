import { BasicComparable, getValue } from "./main.ts";

export function gt(a: BasicComparable, b: BasicComparable): boolean;
export function gt(a: BasicComparable): (b: BasicComparable) => boolean;

export function gt(a: BasicComparable, b?: BasicComparable) {
  if (arguments.length === 1) return (_b: BasicComparable) => gt(a, _b);
  return getValue(b) > getValue(a);
}
