import { Dictionary, Endomorphism, getValueOr } from "./main";

const updateArray = <A>(idx: number, fn: Endomorphism<A>, arr: A[]) => {
  const result = Array.from(arr);
  result[idx] = fn(result[idx]);
  return result;
};

export function update<TInput extends Dictionary, A, B>(
  propName: string,
  fn: Endomorphism<A>,
  dict: TInput
): TInput;

export function update<A>(
  propName: string,
  fn: Endomorphism<A>
): <TInput extends Dictionary>(dict: TInput) => TInput;

export function update(
  propName: string
): <A>(
  fn: Endomorphism<A>
) => <TInput extends Dictionary>(dict: TInput) => TInput;

export function update<A>(index: number, fn: Endomorphism<A>, coll: A[]): A[];

export function update<A>(
  index: number,
  fn: Endomorphism<A>
): (coll: A[]) => A[];

export function update(
  propName: number
): <A>(fn: Endomorphism<A>) => (coll: A[]) => A[];

export function update<A>(propName: any, fn?: Endomorphism<A>, dict?: any) {
  if (arguments.length === 1) {
    return function (_fn: Endomorphism<A>, _dict?: any) {
      return arguments.length === 1
        ? update(propName, _fn)
        : update(propName, _fn, _dict!);
    };
  } else if (arguments.length === 2) {
    return (_dict: any) => update(propName, fn!, _dict);
  }

  const d = getValueOr({} as any, dict);
  return d instanceof Array
    ? updateArray(propName as number, fn!, d)
    : { ...d, [propName]: fn!(d[propName]) };
}
