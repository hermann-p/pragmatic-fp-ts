export function splitEvery<A>(n: number, coll: A[]): A[][];
export function splitEvery<A>(n: number, text: string): string[];
export function splitEvery(
  n: number
): <A>(input: A | A[]) => A extends string ? string[] : A[][];

export function splitEvery(n: number, coll?: any[] | string) {
  if (arguments.length === 1)
    return (coll_: any) => splitEvery(n, coll_) as any;

  const result = [];
  for (let i = 0; i < coll!.length; i += n) {
    result.push(coll!.slice(i, i + n));
  }
  return result;
}
