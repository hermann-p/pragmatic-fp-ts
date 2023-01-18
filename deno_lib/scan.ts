import { Foldable } from "./main.ts";

export function scan<A, B>(fold: Foldable<A, B>, start: B, coll: A[]): B[];
export function scan<A, B>(fold: Foldable<A, B>, start: B): (coll: A[]) => B[];
export function scan<F extends Foldable<any, any>>(
  fold: F
): <B = ReturnType<F>>(
  start: B
) => (coll: Parameters<F>[0][]) => ReturnType<F>[];

export function scan<A, B>(fold: Foldable<A, B>, start?: B, coll?: A[]) {
  if (arguments.length === 1) {
    return function (_start: B, _coll?: A[]) {
      return arguments.length === 1
        ? scan(fold, _start)
        : scan(fold, _start, _coll!);
    };
  } else if (arguments.length === 2) {
    return (_coll: A[]) => scan(fold, start!, _coll);
  }

  const result: B[] = [];

  for (let i = 0; i < coll!.length; ++i) {
    const prev = i === 0 ? start! : result[i - 1];
    result.push(fold(prev, coll![i]));
  }

  return result;
}
