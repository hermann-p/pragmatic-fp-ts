import { getValueOr } from "./main";

const doFlatten = (elems: any): any[] =>
  elems instanceof Array
    ? elems.reduce(
        (accum: any[], elem: any) =>
          elem instanceof Array
            ? [...accum, ...doFlatten(elem)]
            : [...accum, elem],
        []
      )
    : elems;

export function flatten<A = any>(coll: any[]): A[] {
  return doFlatten(getValueOr([], coll));
}
