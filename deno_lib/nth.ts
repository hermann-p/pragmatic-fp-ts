import { mod } from "./main.ts";

export function nth<A>(n: number, coll: A[]): A;
export function nth(n: number): <A>(coll: A[]) => A;
export function nth(n: number, text: string): string;

export function nth(n: number, coll?: any) {
  if (arguments.length === 1) return (_coll: any) => nth(n, _coll);

  const l = (coll as any[]).length;
  const idx = n < 0 ? mod(l, n) : n >= l ? l - 1 : n;

  return (coll as any[])[idx];
}
