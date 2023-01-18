import { complement, Dictionary, filter, Predicate } from "./main.ts";

export function reject<A>(pred: Predicate<A>, coll: A[]): A[];
export function reject<A>(
  pred: Predicate<A>,
  coll: Dictionary<A>
): Dictionary<A>;
export function reject<A>(pred: Predicate<A>): (coll: A[]) => A[];
export function reject<A>(
  pred: Predicate<A>
): (coll: Dictionary<A>) => Dictionary<A>;

export function reject(pred: Predicate<any>, coll?: any) {
  if (arguments.length === 1) {
    return (theColl: any) => reject(pred, theColl);
  }

  return filter(complement(pred), coll) as any;
}
