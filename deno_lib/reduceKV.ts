import { Dictionary } from "./main.ts";

type FoldKV<A, B> = (accum: B, value: A, key: string) => B;
export function reduceKV<A, B>(
  fold: FoldKV<A, B>,
  start: B,
  dict: Dictionary<A>
): B;
export function reduceKV<A, B>(
  fold: FoldKV<A, B>,
  start: B
): (dict: Dictionary<A>) => B;
export function reduceKV<A, B>(
  fold: FoldKV<A, B>
): (start: B) => (dict: Dictionary<A>) => B;

export function reduceKV<A, B>(
  fold: FoldKV<A, B>,
  start?: B,
  dict?: Dictionary<A>
) {
  if (arguments.length === 1) {
    return function (_start: B, _dict?: Dictionary<A>) {
      return arguments.length === 1
        ? reduceKV(fold, _start)
        : reduceKV(fold, _start, _dict!);
    };
  } else if (arguments.length === 2) {
    return (_dict: Dictionary<A>) => reduceKV(fold, start!, _dict);
  }

  const vals = Object.values(dict!);
  return Object.keys(dict!).reduce(
    (result: B, key, idx) => fold(result, vals[idx], key),
    start!
  );
}
