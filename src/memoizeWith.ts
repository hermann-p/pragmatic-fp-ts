import { Mappable } from "./main";

export function memoizeWith<A, B, C = string>(
  toKey: Mappable<A, C>,
  fn: Mappable<A, B>
): Mappable<A, B>;
export function memoizeWith<A, C = string>(
  toKey: Mappable<A, C>
): <B>(fn: Mappable<A, B>) => Mappable<A, B>;

export function memoizeWith<A, B, C = string>(
  toKey: Mappable<A, C>,
  fn?: Mappable<A, B>
) {
  if (arguments.length === 1)
    return (_fn: Mappable<A, B>) => memoizeWith(toKey, _fn);

  const cache = new Map<C, B>();
  return (input: A) => {
    const key = toKey(input);
    if (cache.has(key)) {
      return cache.get(key)!;
    } else {
      const value = fn!(input);
      cache.set(key, value);
      return value;
    }
  };
}
