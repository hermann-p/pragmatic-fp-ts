import { Dictionary, Predicate } from "./main.ts";

// Filters objects by testing predicates on their property names

export function filterKeys<B extends {}, A extends B>(
  pred: Predicate<string>,
  dict: A
): B;

export function filterKeys(
  pred: Predicate<string>
): <B extends {}, A extends B>(dict: A) => B;

export function filterKeys<B extends {}, A extends B>(
  pred: Predicate<string>,
  dict?: A
) {
  if (arguments.length === 1) {
    return (theDict: A) => filterKeys(pred, theDict);
  }

  const theDict = (dict || {}) as Dictionary;
  return Object.keys(theDict as any).reduce(
    (accum: Dictionary, key: string) => {
      if (pred(key)) {
        accum[key] = theDict[key];
      }
      return accum;
    },
    {} as Dictionary
  );
}
