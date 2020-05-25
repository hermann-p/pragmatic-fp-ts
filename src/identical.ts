export function identical<T>(a: T, B: T): boolean;
export function identical<T>(a: T): (B: T) => boolean;

export function identical<T>(a: T, b?: T) {
  if (arguments.length === 1) return (_b: T) => identical(a, _b);

  return Object.is(a, b);
}
