import { Dictionary, getValue } from "./main.ts";

type ArrayMappable<A, B> = (value: A, idx: number) => B;
type DictMappable<A, B> = (value: A, key: string) => B;

const mapArrayIndexed = <A, B>(fn: ArrayMappable<A, B>, coll: A[]): B[] =>
  coll?.map(fn);

const mapObjIndexed = <A, B>(
  fn: DictMappable<A, B>,
  dict: Dictionary<A>
): Dictionary<B> =>
  dict &&
  Object.keys(dict).reduce((accum: Dictionary<B>, key) => {
    try {
      accum[key] = fn(dict[key], key);
      return accum;
    } catch (err) {
      throw new Error(
        `Error mapping functor over object key ${key}: ${err.text}`
      );
    }
  }, {});
export function mapIndexed<A, B>(fn: ArrayMappable<A, B>, coll: A[]): B[];
export function mapIndexed<A, B>(fn: ArrayMappable<A, B>): (coll: A[]) => B[];

export function mapIndexed<A, B>(
  fn: DictMappable<A, B>,
  coll: Dictionary<A>
): Dictionary<B>;
export function mapIndexed<A, B>(
  fn: DictMappable<A, B>
): (coll: Dictionary<A>) => Dictionary<B>;

export function mapIndexed<A, B>(
  fn: ArrayMappable<A, B> | DictMappable<A, B>,
  coll?: A[] | Dictionary<A>
): any {
  if (arguments.length === 1) {
    return (_coll: A[] | Dictionary<A>) => mapIndexed(fn as any, _coll as any);
  } else {
    const input = getValue(coll);
    return input instanceof Array
      ? mapArrayIndexed(fn as ArrayMappable<A, B>, input)
      : mapObjIndexed(fn as DictMappable<A, B>, input);
  }
}
