import { getValueOr } from "./main";

export function init<A>(coll: A[]): A[] {
  return getValueOr([], coll).slice(0, -1);
}
