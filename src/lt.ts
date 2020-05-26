import { BasicComparable, getValue } from "./main";

export function lt(a: BasicComparable, b: BasicComparable): boolean;
export function lt(a: BasicComparable): (b: BasicComparable) => boolean;

export function lt(a: BasicComparable, b?: BasicComparable) {
  if (arguments.length === 1) return (_b: BasicComparable) => lt(a, _b);
  return getValue(b) < getValue(a);
}
