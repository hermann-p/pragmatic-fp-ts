import { getValueOr } from "./main.ts";

// tests if both params are truthy

export function and(a: boolean, b: boolean): boolean;
export function and(a: boolean): (b: boolean) => boolean;

export function and(a: boolean, b?: boolean) {
  if (arguments.length === 1) {
    return (_b: boolean) => and(a, _b);
  }

  return getValueOr(false, a) && getValueOr(false, b);
}
