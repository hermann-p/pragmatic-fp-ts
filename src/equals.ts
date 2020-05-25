import mori from "mori";
import { getValue, isMonad, when } from "./main";

export function equals<A>(a: A, b: A): boolean;
export function equals<A>(a: A): (b: A) => boolean;

export function equals<A>(a: A, b?: A) {
  if (arguments.length === 1) {
    return (_b: A) => equals(a, _b);
  }

  const valA = when(isMonad, getValue, a);
  const valB = when(isMonad, getValue, b);
  return mori.equals(mori.toClj(getValue(valA)), mori.toClj(getValue(valB)));
}
