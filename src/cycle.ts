import { InfiniteArray } from "./tools/InfiniteArray";

export function cycle<T>(coll: T[]) {
  return InfiniteArray((idx: number) => coll[idx % coll.length]);
}
