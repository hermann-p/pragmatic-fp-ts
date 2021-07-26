import { butLast, flow, isArray, last, reduce } from "./main";
import { Mappable, Predicate } from "./types";

// Mutating conj! Expects empty new array input
export const conj = <A>(coll: A[], elem: A) => {
  coll.push(elem);
  return coll;
};

// Mutating cons! Expects empty new array input
export const cons = <A>(coll: A[], elem: A) => {
  coll.unshift(elem);
  return coll;
};

type Transform<TColl, TNext> = (coll: TColl, next: TNext) => TColl;
type Reducer<TColl, TNext> = (coll: TColl, next: TNext) => TColl;
type Transducer<TColl, TNext> = (reducing: Reducer<TColl, TNext>) => Transform<TColl, TNext>;
type MapTransducer<TColl, TInput, TNext> = (
  reducing: Reducer<TColl, TNext>
) => Transform<TColl, TInput>;

export const map = <A, B, TColl>(fn: Mappable<A, B>): MapTransducer<TColl, A, B> => (
  reducing: Reducer<TColl, B>
) => (coll: TColl, input: A) => reducing(coll, fn(input));

export const flatMap = <A, B>(fn: Mappable<A, B | B[]>) => (reducing: Reducer<any, any>) => (
  coll: any,
  input: any
) => {
  const mapped = fn(input);
  return isArray(mapped) ? reduce(reducing, coll, mapped) : reducing(coll, mapped);
};

export const flatten = <TColl, TNext>(reducing: Reducer<TColl, TNext>) => (
  coll: TColl,
  input: TNext | TNext[]
) => (isArray(input) ? reduce(reducing, coll, input) : reducing(coll, input));

export const filter = <TInput, TColl>(pred: Predicate<TInput>): Transducer<TColl, TInput> => (
  reducing: Reducer<TColl, TInput>
) => (coll: TColl, input: TInput) => (pred(input) ? reducing(coll, input) : coll);

export const take = <TNext, TColl>(n: number) => (reducing: Reducer<TColl, TNext>) => {
  let i = 0;
  return (coll: TColl, input: TNext) => {
    return i++ < n ? reducing(coll, input) : coll;
  };
};

export const drop = (n: number) => <TInput, TColl>(reducing: Reducer<TColl, TInput>) => {
  let i = 0;
  return (coll: TColl, input: TInput) => {
    return i++ < n ? coll : reducing(coll, input);
  };
};

export const insertM = <T>(inOrder: (a: T, b: T) => boolean, arr: T[], elem: T) => {
  let l = 0;
  let r = arr.length;
  while (r > l) {
    const m = (l + r) >> 1; // Math.floor(r + l / 2);
    if (inOrder(elem, arr[m])) r = m;
    else l = m + 1;
  }
  arr.splice(l, 0, elem);
  return arr;
};

type PList<A, B> = [...Parameters<(...args: A[]) => void>, B];
export function transformList<A, B>(...args: PList<Transducer<any, any>, A[]>): B[];
export function transformList<A, B>(...args: Transducer<any, any>[]): (coll: A[]) => B[];
export function transformList<A, B>(...args: any[]) {
  if (!Array.isArray(args[args.length - 1]))
    return (coll_: A[]) => transformList(...(args as any), coll_ as any);
  const xforms = butLast(args);
  const coll = last(args);
  const xform = flow(...(xforms.reverse() as any));

  return reduce(xform(conj), [], coll) as B[];
}
