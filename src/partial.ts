import { ArgTypes, Last } from "./main";

// TODO: once variadic arg types go live, add this in a single signature

export function partial<T1, L, B>(fn: (a1: T1, l: L) => B, a1: T1): (l: L) => B;
export function partial<T1, T2, L, B>(
  fn: (a1: T1, a2: T2, l: L) => B,
  a1: T1,
  a2: T2
): (l: L) => B;
export function partial<T1, T2, T3, L, B>(
  fn: (a1: T1, a2: T2, a3: T3, l: L) => B,
  a1: T1,
  a2: T2,
  a3: T3
): (l: L) => B;
export function partial<T1, T2, T3, T4, L, B>(
  fn: (a1: T1, a2: T2, a3: T3, a4: T4, l: L) => B,
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4
): (l: L) => B;
export function partial<T1, T2, T3, T4, T5, L, B>(
  fn: (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, l: L) => B,
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  a5: T5
): (l: L) => B;
export function partial<T1, T2, T3, T4, T5, T6, L, B>(
  fn: (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, l: L) => B,
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  a5: T5,
  a6: T6
): (l: L) => B;

export function partial<F extends (...args: any[]) => any>(
  fn: F,
  ...args: any[]
) {
  return (lastArg: Last<ArgTypes<F>>): ReturnType<F> =>
    fn(...args, lastArg) as any;
}
