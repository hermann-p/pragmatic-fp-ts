import { getValueOr } from "./main.ts";

export function aperture<A>(step: number, coll: A[]): A[][];

export function aperture<A>(step: number): (coll: A[]) => A[][];

export function aperture<A>(step: number, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => aperture(step, _coll);
  }

  const n = getValueOr(-1, step);
  const c = getValueOr([], coll!);

  if (1 > n || n > c.length) {
    return [];
  }

  const aps: A[][] = [];
  for (let i = 0; i < c.length - n + 1; i++) {
    aps.push(c.slice(i, i + n));
  }

  return aps;
}
