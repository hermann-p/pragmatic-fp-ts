import { BasicComparable, getValue } from "./main";

export function gte(a: BasicComparable, b: BasicComparable): boolean;
export function gte(a: BasicComparable): (b: BasicComparable) => boolean;

export function gte(a: BasicComparable, b?: BasicComparable) {
  if (arguments.length === 1) return (_b: BasicComparable) => gte(a, _b);
  return getValue(b) >= getValue(a);
}
