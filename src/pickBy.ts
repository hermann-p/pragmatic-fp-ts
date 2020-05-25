import { Dictionary, getValueOr, Predicate } from "./main";

export function pickBy<A = any>(
  pred: Predicate<A>,
  dict: Dictionary<A>
): Dictionary<A>;
export function pickBy<A = any>(
  pred: Predicate<A>
): (dict: Dictionary<A>) => Dictionary<A>;

export function pickBy<A = any>(pred: Predicate<A>, dict?: A) {
  if (arguments.length === 1) {
    return (_dict: Dictionary<A>) => pickBy(pred, _dict) as any;
  }

  const dd = getValueOr({} as any, dict);
  return Object.keys(dd).reduce((accum, key) => {
    if (pred(dd[key])) {
      accum[key] = dd[key];
    }
    return accum;
  }, {} as any) as A;
}
