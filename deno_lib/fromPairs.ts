import { Dictionary, getValueOr } from "./main.ts";

// creates dictionaries from [key,value][] lists

export function fromPairs<A = any>(pairs: [string, A][]): Dictionary<A> {
  return getValueOr([], pairs).reduce(
    (accum: Dictionary<A>, [key, value]: [string, A]) => {
      accum[key] = value;
      return accum;
    },
    {} as Dictionary<A>
  );
}
