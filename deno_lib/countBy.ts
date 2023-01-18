import { Dictionary, getValueOr, Mappable } from "./main.ts";

// Given a mappable and a list, applies the mappable to the list
// values and returns an object containing values as keys and their
// number of occurence as values

export function countBy<A = any>(
  toKey: Mappable<A, any>,
  dict: A[]
): Dictionary<number>;

export function countBy<A = any>(
  toKey: Mappable<A, any>
): (dict: A[]) => Dictionary<number>;

export function countBy<A = any>(toKey: Mappable<A, any>, dict?: A[]) {
  if (arguments.length === 1) {
    return (_dict: A[]) => countBy(toKey, _dict);
  }

  const d = getValueOr([], dict);
  return d.reduce((count: Dictionary<number>, next: A) => {
    const key = String(toKey(next));
    count[key] = (count[key] || 0) + 1;
    return count;
  }, {});
}
