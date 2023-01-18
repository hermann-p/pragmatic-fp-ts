import { Equality, getValueOr, isNil } from "./main.ts";

const performGrouping = <A>(cmp: Equality<A>, elems: A[]) => {
  const doGrouping = (grouped: A[][], group: A[], rest: A[]): A[][] => {
    const [el, ...more] = rest;
    const lastEl = group[group.length - 1];

    return !isNil(el)
      ? cmp(lastEl, el)
        ? doGrouping(grouped, [...group, el], more)
        : doGrouping([...grouped, group], [el], more)
      : [...grouped, group];
  };

  return doGrouping([], [elems[0]], elems.slice(1));
};

export function groupWith<A>(isEqual: Equality<A>, coll: A[]): A[][];
export function groupWith<A>(isEqual: Equality<A>): (coll: A[]) => A[][];

export function groupWith<A>(isEqual: Equality<A>, coll?: A[]) {
  if (arguments.length === 1)
    return (theColl: A[]) => groupWith(isEqual, theColl);
  else return performGrouping(isEqual, getValueOr([], coll as A[]));
}
