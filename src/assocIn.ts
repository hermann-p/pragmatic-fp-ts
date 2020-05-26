import m from "mori";
import { chain, Dictionary, getValueOr } from "./main";

type Path = (string | number)[];
export function assocIn<A = any>(path: Path, value: any, coll: any[]): A[];
export function assocIn<A = any>(path: Path, value: any): (coll: any[]) => A[];
export function assocIn<A = any>(
  path: Path
): (value: any) => (coll: any[] | Dictionary) => A[] | Dictionary; // TS won't find proper types

export function assocIn<A extends Dictionary>(
  path: Path,
  value: any,
  dict: A
): A;
export function assocIn<A extends Dictionary>(
  path: Path,
  value: any
): (dict: A) => A;

export function assocIn(path: Path, value?: any, coll?: any) {
  if (arguments.length === 1) {
    return function (_value: any, _coll?: any) {
      return arguments.length === 1
        ? assocIn(path, _value)
        : assocIn(path, _value, _coll!);
    };
  } else if (arguments.length === 2) {
    return (_coll: any) => assocIn(path, value!, _coll);
  }

  const p = getValueOr([], path);
  if (p.length === 0) {
    return coll;
  }

  const defaultValue = typeof p[0] === "number" ? [] : {};
  return chain(getValueOr(defaultValue, coll))
    .bind(m.toClj)
    .bind((cc) => m.assocIn(cc, path, getValueOr(null, value)))
    .bind(m.toJs)
    .getValueOr(defaultValue);
}
