import { butLast, flow, isArray, isFunction, isLeft, isNothing, last, reduce } from "./main.ts";
import { Mappable, Predicate } from "./types.ts";

// Mutating conj! Expects empty new array input
export const conjM = <A>(coll: A[], elem: A) => {
  coll.push(elem);
  return coll;
};

// Mutating cons! Expects empty new array input
export const consM = <A>(coll: A[], elem: A) => {
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

export const insert = <TInput>(elem: TInput) => <TColl>(reducing: Reducer<TColl, TInput>) => {
  let inserted = false;
  return (coll: TColl, input: TInput) => {
    if (inserted) return reducing(coll, input);
    else {
      inserted = true;
      return reducing(reducing(coll, elem), input);
    }
  };
};

export const uniq = <TColl, TNext>(reducing: Reducer<TColl, TNext>) => {
  const set = new Set<TNext>();
  return (coll: TColl, input: TNext) => {
    if (set.has(input)) return coll;
    else {
      set.add(input);
      return reducing(coll, input);
    }
  };
};

export const uniqBy = <TNext>(toKey: (val: TNext) => any) => <TColl>(
  reducing: Reducer<TColl, TNext>
) => {
  const set = new Set();
  return (coll: TColl, input: TNext) => {
    const key = toKey(input);
    if (set.has(key)) return coll;
    else {
      set.add(key);
      return reducing(coll, input);
    }
  };
};

export const find = <TInput>(pred: Predicate<TInput>) => <TColl>(
  reducing: Reducer<TColl, TInput>
) => {
  let found = false;
  return (coll: TColl, input: TInput) => {
    if (!found && pred(input)) return reducing(coll, input);
    else return coll;
  };
};

export const compact = filter(
  (x: unknown) =>
    x !== null &&
    x !== undefined &&
    (typeof x === "number" ? !isNaN(x as any) : true) &&
    !isNothing(x) &&
    !isLeft(x)
);

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

export function transformList<A = any, B = any>(...args: [...Transducer<any, any>[], A[]]): B[];
export function transformList<A = any, B = any>(
  ...args: Transducer<any, any>[]
): (coll: A[]) => B[];
export function transformList<A, B>(...args: any[]) {
  if (!Array.isArray(args[args.length - 1]))
    return (coll_: A[]) => transformList(...(args as any), coll_ as any);

  const xforms = butLast(args);
  const coll = last(args);
  const xform = flow(...(xforms.reverse() as any));

  return reduce(xform(conjM), [], coll) as B[];
}

export const intoObjM = (coll: any, [k, v]: [string | symbol, any]) => {
  coll[k] = v;
  return coll;
};

export function transformObj<A = any, B = any>(
  ...transducers: Transducer<any, any>[]
): (obj: A) => B;
export function transformObj<A = any, B = any>(...args: [...Transducer<any, any>[], A]): B;
export function transformObj<A, B>(...args: any[]) {
  if (isFunction(args[args.length - 1]))
    return (coll_: A) => transformObj(...(args as any), coll_ as any);

  const xforms = butLast(args);
  const coll = last(args);
  const xform = flow(...(xforms.reverse() as any));

  return reduce(xform(intoObjM), {}, Object.entries(coll)) as B;
}
