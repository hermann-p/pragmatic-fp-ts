import { Endomorphism, getValueOr } from "./main";

const updateArray = <A>(idx: number, fn: Endomorphism<A>, arr: A[]) => {
  const result = Array.from(arr);
  result[idx] = fn(result[idx]);
  return result;
};

export function update<K extends number, T>(idx: K, mappable: Endomorphism<T>, coll: T[]): T[];
export function update<K extends keyof T, T extends Record<K, V>, V>(
  key: K,
  mappable: Endomorphism<V>,
  coll: T
): T;

export function update<K extends number, T>(key: K, mappable: Endomorphism<T>): (coll: T[]) => T[];
export function update<K extends string, T>(
  key: K,
  mappable: Endomorphism<T>
): <U extends Record<K, T>>(coll: U) => U;

export function update<K extends number>(
  key: K
): <T>(mappable: Endomorphism<T>) => (coll: T[]) => T[];
export function update<K extends string>(
  key: K
): <T>(mappable: Endomorphism<T>) => <U extends Record<K, T>>(coll: U) => U;

export function update(key: any, fn?: Endomorphism<any>, coll?: any) {
  if (arguments.length === 1) return (fn_: any) => update(key, fn_);
  else if (arguments.length === 2) return (coll_: any) => update(key, fn!, coll_);

  const d = getValueOr({} as any, coll);
  return d instanceof Array ? updateArray(key as number, fn!, d) : { ...d, [key]: fn!(d[key]) };
}
