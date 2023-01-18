import { Dictionary, getValue, maybe, Predicate, reverse } from "./main.ts";

export function findLast<A>(condition: Predicate<A>, coll: A[]): A | null;
export function findLast<A>(condition: Predicate<A>, dict: Dictionary<A>): A | null;

export function findLast<A>(condition: Predicate<A>): (coll: A[]) => A | null;
export function findLast<A>(condition: Predicate<A>): (dict: Dictionary<A>) => A | null;

export function findLast<A>(condition: Predicate<A>, coll?: A[] | Dictionary<A>) {
  if (arguments.length === 1) {
    return (theColl: any) => findLast(condition, theColl as any);
  }

  const toCollection = (a: A[] | Dictionary<A>) => (a instanceof Array ? a : Object.values(a));

  return maybe(getValue(coll!))
    .bind(toCollection)
    .bind<A[]>(reverse)
    .bind((c) => c.find(condition) || null)
    .getValueOr(null as any);
}
