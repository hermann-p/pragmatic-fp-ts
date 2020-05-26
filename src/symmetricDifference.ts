export function symmetricDifference<A>(a: A[], b: A[]): A[];
export function symmetricDifference<A>(a: A[]): (b: A[]) => A[];

export function symmetricDifference<A>(a: A[], b?: A[]) {
  if (arguments.length === 1) {
    return (b_: A[]) => symmetricDifference(a, b_);
  }

  const setA = new Set(a || []);
  const setB = new Set(b || []);

  const results: A[] = [];
  (a || []).forEach((val) => {
    if (!setB.has(val)) results.push(val);
  });
  (b || []).forEach((val) => {
    if (!setA.has(val)) results.push(val);
  });

  return results;
}
