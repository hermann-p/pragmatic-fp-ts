import { pick } from "./main.ts";

export function project<V extends {}, K extends keyof V>(
  keys: K[],
  coll: V[]
): Pick<V, K>[];

export function project<V extends {}, K extends keyof V>(
  keys: K[]
): (coll: V[]) => Pick<V, K>[];

export function project<V extends {}, K extends keyof V>(
  keys: K[],
  coll?: V[]
) {
  if (arguments.length === 1) return (_coll: V[]) => project(keys, _coll);

  return (coll ?? []).map(pick(keys));
}
