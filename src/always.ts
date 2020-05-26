import { getValue } from "./main";

export function always<A>(a: A) {
  return getValue(a);
}
