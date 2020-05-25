import { getValue, Mappable } from "./main";

// Applies the second parameter function to the first parameter

export function applyTo<A, B>(value: A, fn: Mappable<A, B>): B;
export function applyTo<A, B>(value: A): (fn: Mappable<A, B>) => B;

export function applyTo<A, B>(value: A, fn?: Mappable<A, B>) {
  if (arguments.length === 1) {
    return (_fn: Mappable<A, B>) => applyTo(value, _fn);
  }

  const mappable = fn || ((_: any) => null);
  return mappable(getValue(value));
}
