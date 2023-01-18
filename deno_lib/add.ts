import { getValueOr } from "./main.ts";

export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

export function add(a: number, b?: number) {
  if (arguments.length === 1) {
    return (_b: number) => add(a, _b);
  }

  return getValueOr(0, a) + getValueOr(0, b!);
}

export function inc(n: number) {
  return add(1, n);
}
