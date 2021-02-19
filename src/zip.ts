export function zip<A, B>(as: A[], bs: B[]): [A, B][];
export function zip<A, B>(as: A[]): (bs: B[]) => [A, B][];

export function zip<A, B>(as: A[], bs?: B[]) {
  if (arguments.length === 1) return (bs_: B[]) => zip(as, bs_);

  const result: [A, B][] = [];

  const aa = as || [];
  const bb = bs || [];

  for (let i = 0; i < aa.length && i < bb.length; ++i) {
    result.push([aa[i], bb[i]]);
  }
  return result;
}
