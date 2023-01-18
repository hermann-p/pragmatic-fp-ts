import { getValue } from "./main.ts";

export function always<A>(a: A) {
  return getValue(a);
}
