import { getValue } from "./main.ts";

export function eq<A>(a: A, b: A): boolean;
export function eq<A>(a: A): (b: A) => boolean;

export function eq<A>(a: A, b?: A) {
  if (arguments.length === 1) {
    return (_b: A) => eq(a, _b);
  }

  return getValue(a) === getValue(b);
}
