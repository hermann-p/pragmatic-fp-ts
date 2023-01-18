import { Dictionary, getValue, maybe, Predicate, isNil } from "./main.ts";

export function find<A>(condition: Predicate<A>, coll: A[]): A | null;
export function find<A>(condition: Predicate<A>, dict: Dictionary<A>): A | null;

export function find<A>(
  condition: Predicate<A>
): <B extends A[] | Dictionary<A>>(
  coll: B
) => (B extends A[] ? A : B extends Dictionary<A> ? A : never) | null;

export function find<A>(condition: Predicate<A>, coll?: A[] | Dictionary<A>) {
  if (arguments.length === 1) {
    return (theColl: any) => find(condition, theColl as any);
  }

  const toCollection = (a: A[] | Dictionary<A>) =>
    isNil(a) ? null : a instanceof Array ? a : Object.values(a);

  return maybe(getValue(coll!))
    .bind(toCollection)
    .bind((c) => c.find(condition) || null)
    .getValueOr(null as any);
}
