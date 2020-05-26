import { getValue, Predicate } from "./main";

export function somePass<A>(preds: Predicate<A>[], value: A): boolean;
export function somePass<A>(preds: Predicate<A>[]): (value: A) => boolean;

export function somePass<A>(preds: Predicate<A>[], value?: A) {
  if (arguments.length === 1) {
    return (_value: A) => somePass(preds, _value);
  }

  const theValue = getValue(value!);

  return (preds || []).reduce(
    (result: boolean, nextPred: Predicate<A>) => result || nextPred(theValue),
    false
  );
}
