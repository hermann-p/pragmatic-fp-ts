import { Dictionary, Predicate } from "./main";

// Filters arrays or objects.

const filterArray = (pred: Predicate<any>, arr: any[] = []) => arr.filter(pred);
const filterDict = (pred: Predicate<any>, dict: Dictionary = {}) =>
  Object.keys(dict).reduce((d, key) => {
    const value = dict[key];
    if (pred(value)) d[key] = value;
    return d;
  }, {} as Dictionary);

export function filter<A>(pred: Predicate<A>, coll: A[]): A[];
export function filter<A>(
  pred: Predicate<A>,
  coll: Dictionary<A>
): Dictionary<A>;
export function filter<A>(
  pred: Predicate<A>
): <B extends A[] | Dictionary<A>>(
  coll: B
) => B extends A[] ? A[] : Dictionary<A>;

export function filter(pred: Predicate<any>, coll?: any) {
  if (arguments.length === 1) {
    return (theColl: any) => filter(pred, theColl);
  }

  const theColl = coll || [];
  if (theColl instanceof Array) {
    return filterArray(pred, theColl);
  } else {
    return filterDict(pred, theColl);
  }
}
