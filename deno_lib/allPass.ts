import { getValue, Predicate } from "./main.ts";

// Test if the value passes all predicates

export function allPass<A>(preds: Predicate<A>[], value: A): boolean;
export function allPass<A>(preds: Predicate<A>[]): (value: A) => boolean;

export function allPass<A>(preds: Predicate<A>[], value?: A) {
  if (arguments.length === 1) {
    return (_value: A) => allPass(preds, _value);
  }

  const theValue = getValue(value!);

  return preds.reduce(
    (result: boolean, nextPred: Predicate<A>) => result && nextPred(theValue),
    true
  );
}
