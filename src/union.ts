export function union<A>(a: A[], b: A[]): A[];
export function union<A>(a: A[]): (b: A[]) => A[];

export function union<A>(a: A[], b?: A[]) {
  if (arguments.length === 1) return (b_: A[]) => union(a, b_);

  const values = new Set(a || []);
  (b || []).forEach((value) => values.add(value));

  return Array.from(values);
}
