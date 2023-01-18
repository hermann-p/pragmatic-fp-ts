import { equals, getValue, Mappable } from "./main.ts";

export function eqBy<A, B>(toComparable: Mappable<A, B>, a: A, b: A): boolean;
export function eqBy<A, B>(
  toComparable: Mappable<A, B>,
  a: A
): (b: A) => boolean;
export function eqBy<A, B>(
  toComparable: Mappable<A, B>
): (a: A, b: A) => boolean;
export function eqBy<A, B>(
  toComparable: Mappable<A, B>
): (a: A) => (b: A) => boolean;

export function eqBy<A, B>(toComparable: Mappable<A, B>, a?: A, b?: A) {
  if (arguments.length === 1) {
    return function (_a: A, _b?: A) {
      return arguments.length === 1
        ? eqBy(toComparable, _a)
        : eqBy(toComparable, _a, _b!);
    };
  } else if (arguments.length === 2) {
    return (_b: A) => eqBy(toComparable, a!, _b);
  }

  const valA = toComparable(getValue(a));
  const valB = toComparable(getValue(b!));

  return equals(valA, valB);
}
