export function takeRight<A>(n: number, coll: A[]): A[];
export function takeRight(n: number): <A>(coll: A[]) => A[];

export function takeRight<A>(n: number, coll?: A[]) {
  if (arguments.length === 1) return (coll_: A[]) => takeRight(n, coll_);

  const result: A[] = [];
  const cc = coll || [];

  for (let i = cc.length - 1, j = 0; i >= 0 && j < n; --i, ++j) {
    result.push(cc[i]);
  }

  return result;
}
