import { Dictionary, Foldable } from "./main.ts";

export function reduce<A, B>(fold: Foldable<A, B>, startValue: B, coll: A[]): B;
export function reduce<A, B>(
  fold: Foldable<A, B>,
  startValue: B,
  dict: Dictionary<A>
): B;

export function reduce<A, B>(
  fold: Foldable<A, B>,
  StartValue: B
): (coll: A[]) => B;
export function reduce<A, B>(
  fold: Foldable<A, B>,
  StartValue: B
): (dict: Dictionary<A>) => B;

export function reduce<A, B>(
  fold: Foldable<A, B>
): (StartValue: B) => (coll: A[]) => B;
export function reduce<A, B>(
  fold: Foldable<A, B>
): (StartValue: B) => (dict: Dictionary<A>) => B;

export function reduce<A, B>(
  fold: Foldable<A, B>,
  startValue?: B,
  coll?: unknown
) {
  if (arguments.length === 1) {
    return function (_start: B, _coll?: any) {
      return arguments.length === 1
        ? reduce(fold, _start)
        : reduce(fold, _start, _coll!);
    };
  } else if (arguments.length === 2) {
    return (_coll: any) => reduce(fold, startValue!, _coll);
  }

  return coll instanceof Array
    ? coll.reduce(fold, startValue!)
    : Object.values(coll! as Dictionary<A>).reduce(fold, startValue!);
}
