import { isNil } from "./main.ts";

export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;

export function multiply(a: number, b?: number) {
  if (arguments.length === 1) return (b_: number) => multiply(a, b_);
  const aa = isNil(a) || isNaN(a) ? 1 : a;
  const bb = isNil(b) || isNaN(b!) ? 1 : b!;

  return aa * bb;
}
