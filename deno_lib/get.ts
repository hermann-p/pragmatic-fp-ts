import { getValueOr } from "./main.ts";

export function get<A>(idx: number, coll: A[]): A;
export function get<A>(idx: number): (coll: A[]) => A;
export function get<V extends {}, K extends keyof V>(propName: K, dict: V): V[K];
export function get<K extends string>(
  propName: K
): <A extends any, V extends Record<K, A>>(dict: V) => V[K];

export function get(p: string | number, coll?: any) {
  if (arguments.length === 1) return (coll_: any) => get(p, coll_);

  const defVal = typeof p === "string" ? {} : [];
  return getValueOr(defVal, coll)[p];
}
