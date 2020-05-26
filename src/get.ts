import { Dictionary, getValueOr } from "./main";

export function get<A>(idx: number, coll: A[]): A;
export function get<A = any>(propName: string, dict: Dictionary): A;

export function get(p: string | number, coll: any) {
  const defVal = typeof p === "string" ? {} : [];
  return getValueOr(defVal, coll)[p];
}
