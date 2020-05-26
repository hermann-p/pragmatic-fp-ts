import { getValueOr } from "./main";

export function negate(x: number) {
  return -getValueOr(-0, x);
}
