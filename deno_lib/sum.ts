import { add } from "./main.ts";

export function sum(coll: number[]) {
  return coll.reduce(add, 0);
}
