import { getValueOr } from "./main";

export function last(str: string): string;
export function last<A>(coll: A[]): A;

export function last<A>(coll: A[] | string) {
  const cc = getValueOr([], coll);
  return cc.length === 0 ? null : cc[cc.length - 1];
}
