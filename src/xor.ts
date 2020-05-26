export function xor(a: unknown, b: unknown): boolean;
export function xor(a: unknown): (b: unknown) => boolean;

export function xor(a: unknown, b?: unknown) {
  if (arguments.length === 1) return (_b: unknown) => xor(a, _b);

  return !!((a ? 1 : 0) ^ (b ? 1 : 0));
}
