import { Dictionary, getValue, maybe, Predicate } from "./main";

// Searches array or object values with given predicate. Returns array
// index or property name

const arrayToIndexed = <A>(arr: A[]) => arr.map((value, idx) => [idx, value] as [number, A]);

const dictToIndexed = <A>(dict: Dictionary<A>) =>
  Object.keys(dict)
    .sort()
    .map((key) => [key, dict[key]] as [string, A]);

export function findIndex<A>(condition: Predicate<A>, coll: A[]): number;
export function findIndex<A>(condition: Predicate<A>, coll: Dictionary<A>): string;
export function findIndex<A>(
  condition: Predicate<A>
): <B extends A[] | Dictionary<A>>(coll: B) => B extends A[] ? A[] : Dictionary<A>;

export function findIndex<A>(condition: Predicate<A>, coll?: A[] | Dictionary<A>) {
  if (arguments.length === 1) {
    return (theColl: A[] | Dictionary<A>) => findIndex(condition, theColl as any);
  }

  const theColl = getValue(coll);
  const notFound = theColl instanceof Array ? -1 : null;

  return maybe(theColl)
    .bind((c) => (c instanceof Array ? arrayToIndexed(c) : dictToIndexed(c)))
    .bind((vs: [any, A][]) =>
      vs.reduce(
        (key, [nextKey, nextVal]: [any, A]) =>
          key === notFound ? (condition(nextVal) ? nextKey : notFound) : key,
        notFound
      )
    )
    .getValueOr(notFound as any) as any;
}
