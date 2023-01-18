export function take<A>(n: number, coll: A[]): A[];
export function take(n: number): <A>(coll: A[]) => A[];

export function take<A>(n: number, coll?: A[]) {
  if (arguments.length === 1) return (coll_: A[]) => take(n, coll_);

  return (coll || []).slice(0, n);
}
