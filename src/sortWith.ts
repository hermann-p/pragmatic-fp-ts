type toKeys<A> = Array<(_: A) => string | number>;

const order = {
  reversed: 1,
  equal: 0,
  ordered: -1,
};

const compare = <A>(a: A, b: A): number => {
  switch (true) {
    case a > b:
      return order.reversed;
    case a < b:
      return order.ordered;
    default:
      return order.equal;
  }
};

const compareWith = <A>(fns: toKeys<A>) => {
  const go = (a: A, b: A, idx: number): number => {
    const f = fns[idx];
    const fA = f(a);
    const fB = f(b);
    const result = compare(fA, fB);
    const hasMoreComparisons = idx < fns.length - 1;
    return result === order.equal && hasMoreComparisons ? go(a, b, idx + 1) : result;
  };
  return (a: A, b: A) => go(a, b, 0);
};

export function sortWith<A>(fns: toKeys<A>, coll: Array<A>): Array<A>;
export function sortWith<A>(fns: toKeys<A>): (_: Array<A>) => Array<A>;
export function sortWith<A>(fns: toKeys<A>, coll?: Array<A>) {
  if (arguments.length === 1) return (theColl: Array<A>) => sortWith(fns, theColl);
  else {
    const sorted = [...(coll ?? [])].sort(compareWith(fns));
    return sorted;
  }
}
