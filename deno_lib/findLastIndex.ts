import { Dictionary, getValue, maybe, Predicate, reverse } from "./main.ts";

// Searches array or object values with given predicate. Returns array
// index or property name

const arrayToIndexed = <A>(arr: A[]) => arr.map((value, idx) => [idx, value] as [number, A]);

const dictToIndexed = <A>(dict: Dictionary<A>) =>
  Object.keys(dict)
    .sort()
    .map((key) => [key, dict[key]] as [string, A]);

export function findLastIndex<A>(condition: Predicate<A>, coll: A[]): number;
export function findLastIndex<A>(condition: Predicate<A>, coll: Dictionary<A>): string;
export function findLastIndex<A>(
  condition: Predicate<A>
): <T extends A[] | Dictionary<A>>(coll: T) => T extends A[] ? number : string;

export function findLastIndex<A>(condition: Predicate<A>, coll?: A[] | Dictionary<A>) {
  if (arguments.length === 1) {
    return (theColl: A[] | Dictionary<A>) => findLastIndex(condition, theColl as any);
  }

  const theColl = getValue(coll);
  const notFound = theColl instanceof Array ? -1 : null;

  return maybe(theColl)
    .bind((c) => (c instanceof Array ? arrayToIndexed(c) : dictToIndexed(c)))
    .bind((vs: [any, A][]) => reverse(vs))
    .bind((vs: [any, A][]) =>
      vs.reduce((key, [nextKey, nextVal]: [any, A]) => {
        return key === notFound ? (condition(nextVal) ? nextKey : notFound) : key;
      }, notFound)
    )
    .getValueOr(notFound as any) as any;
}
