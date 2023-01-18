import { getValueOr } from "./main.ts";

export function init<A>(coll: A[]): A[] {
  return getValueOr([], coll).slice(0, -1);
}
