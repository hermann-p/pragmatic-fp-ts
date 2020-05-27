import { getValueOr } from "./main";

export function subtract(subtrahend: number, minuend: number): number;
export function subtract(subtrahend: number): (minuend: number) => number;

export function subtract(subtrahend: number, minuend?: number) {
  if (arguments.length === 1) {
    return (_minuend: number) => subtract(subtrahend, _minuend);
  }

  return getValueOr(0, minuend) - getValueOr(0, subtrahend!);
}

export function dec(n: number) {
  return subtract(1, n);
}

export function subtractFrom(minuend: number, subtrahend?: number): number;
export function subtractFrom(minuend: number): (subtrahend?: number) => number;

export function subtractFrom(minuend: number, subtrahend?: number) {
  if (arguments.length === 1) {
    return (_subtrahend: number) => subtract(minuend, _subtrahend);
  }

  return getValueOr(0, minuend) - getValueOr(0, subtrahend!);
}