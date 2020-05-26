import { getValueOr } from "./main";

export function assoc<A>(idx: number, value: A, coll: A[]): A[];
export function assoc<A>(idx: number, value: A): (coll: A[]) => A[];
export function assoc(idx: number): <A>(value: A) => (coll: A[]) => A[];

export function assoc<T extends {}, K extends string, V>(
  propName: K,
  value: V,
  dict: T
): T & Record<K, V>;
export function assoc<K extends string, V>(
  propName: K,
  value: V
): <T extends {}>(dict: T) => T & Record<K, V>;
export function assoc<K extends string>(
  propName: K
): <V>(value: V) => <T extends {}>(dict: T) => T & Record<K, V>;

export function assoc(at: any, value?: any, coll?: any) {
  if (arguments.length === 1) {
    return function (_value: any, _coll?: any) {
      return arguments.length === 1
        ? assoc(at, _value)
        : assoc(at, _value, _coll!);
    };
  } else if (arguments.length === 2) {
    return (_coll: any) => assoc(at, value!, _coll);
  }

  if (typeof at === "number") {
    const arr = Array.from(getValueOr([], coll));
    arr[at] = value!;
    return arr;
  } else {
    return { ...getValueOr({}, coll), [at]: value! };
  }
}
