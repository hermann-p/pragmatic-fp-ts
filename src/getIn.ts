import m from "mori";
import { chain, Dictionary, getValueOr } from "./main";

type ObjKey = string | number;
export function getIn<A = any>(path: ObjKey[], coll: Dictionary | any[]): A;
export function getIn<A = any>(path: ObjKey[]): (coll: Dictionary | any[]) => A;

export function getIn(path: ObjKey[], coll?: Dictionary | any[]) {
  if (arguments.length === 1) {
    return (_coll: Dictionary | any[]) => getIn(path, _coll);
  }

  return chain(getValueOr({}, coll))
    .bind(m.toClj)
    .bind((cc) => m.getIn(cc, path, null))
    .bind(m.toJs)
    .getValueOr(null);
}
