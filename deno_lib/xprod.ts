export function xprod<A, B>(a: A[], b: B[]): [A, B][];
export function xprod<A>(a: A[]): <B>(b: B[]) => [A, B][];

export function xprod<A, B>(a: A[], b?: B[]) {
  if (arguments.length === 1) return (b_: B[]) => xprod(a, b_);

  const result: [A, B][] = [];

  (a || []).forEach((aa) => {
    (b || []).forEach((bb) => result.push([aa, bb]));
  });

  return result;
}
