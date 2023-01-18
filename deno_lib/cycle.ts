import { InfiniteArray } from "./tools/InfiniteArray.ts";

export function cycle<T>(coll: T[]) {
  return InfiniteArray((idx: number) => coll[idx % coll.length]);
}
