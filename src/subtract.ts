import { getValueOr } from "./main";

export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;

export function subtract(a: number, b?: number) {
  if (arguments.length === 1) {
    return (_b: number) => subtract(a, _b);
  }

  return getValueOr(0, a) - getValueOr(0, b!);
}

export function dec(n: number) {
  return subtract(1, n);
}
