import { Dictionary, getValueOr, assoc } from "./main";
import Q from "./tools/Queue";

const _assocIn = (path: Q<string | number>, value: any, coll: any): any => {
  const key = path.pop();
  return assoc(key as any, path.isEmpty() ? value : _assocIn(path, value, coll[key]), coll);
};

type Path = (string | number)[];
export function assocIn<A extends Dictionary>(path: Path, value: any, dict: A): A;
export function assocIn<A extends Dictionary>(path: Path, value: any): (dict: A) => A;
export function assocIn<A extends Dictionary>(path: Path): (value: any) => (dict: A) => A;

export function assocIn<A extends any[]>(path: Path, value: any, coll: A): A;
export function assocIn<A extends any[]>(path: Path, value: any): (coll: A) => A;
export function assocIn<A extends any[]>(path: Path): (value: any) => (coll: A) => A;

export function assocIn(path: Path, value?: any, coll?: any) {
  if (arguments.length === 1) {
    return function (_value: any, _coll?: any) {
      return arguments.length === 1 ? assocIn(path, _value) : assocIn(path, _value, _coll!);
    };
  } else if (arguments.length === 2) {
    return (_coll: any) => assocIn(path, value!, _coll);
  }

  const p = new Q(getValueOr([], path));
  if (p.length === 0) {
    return coll;
  }

  const defaultValue = typeof p.peek() === "number" ? [] : {};
  return coll ? _assocIn(p, value, coll) || defaultValue : defaultValue;
}
