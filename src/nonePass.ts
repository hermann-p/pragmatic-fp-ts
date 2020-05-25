import { Predicate } from "./main";

// true if the value passes none of the predicates

export function nonePass<A>(preds: Predicate<A>[], value: A): boolean;
export function nonePass<A>(preds: Predicate<A>[]): (value: A) => boolean;

export function nonePass<A>(preds: Predicate<A>[], value?: A) {
  if (arguments.length === 1) return (_value: A) => nonePass(preds, _value);

  for (let i = 0; i < preds!.length; ++i) {
    if (preds[i](value!)) return false;
  }
  return true;
}
