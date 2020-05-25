import { add } from "./main";

export function sum(coll: number[]) {
  return coll.reduce(add, 0);
}
