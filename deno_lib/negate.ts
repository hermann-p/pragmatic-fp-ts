import { getValueOr } from "./main.ts";

export function negate(x: number) {
  return -getValueOr(-0, x);
}
