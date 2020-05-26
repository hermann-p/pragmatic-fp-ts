import { getValue } from "./main";

export function divide(dividend: number, divisor: number): number;
export function divide(dividend: number): (divisor: number) => number;
export function divide(dividend: number, divisor?: number) {
  if (arguments.length === 1) {
    return (theDivisor: number) => divide(dividend, theDivisor);
  }

  return getValue(dividend) / getValue(divisor);
}

export function divideBy(divisor: number, dividend: number): number;
export function divideBy(divisor: number): (dividend: number) => number;
export function divideBy(divisor: number, dividend?: number) {
  if (arguments.length === 1) {
    return (theDividend: number) => divide(theDividend, divisor);
  }

  return divide(dividend!, divisor);
}
