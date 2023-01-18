import { maybe, Dictionary } from "./main.ts";

const _getIn = (path: any[], coll: any, idx = 0): any => {
  if (!coll) {
    return null;
  } else if (idx < path.length - 1) {
    return _getIn(path, coll[path[idx]], idx + 1);
  } else return coll[path[idx]];
};

type ObjKey = string | number;
export function getIn<A = any>(path: ObjKey[], coll: Dictionary | any[]): A;
export function getIn<A = any>(path: ObjKey[]): (coll: Dictionary | any[]) => A;

export function getIn(path: ObjKey[], coll?: Dictionary | any[]) {
  if (arguments.length === 1) {
    return (_coll: Dictionary | any[]) => getIn(path, _coll);
  }

  return maybe(coll)
    ._((cc) => _getIn(path, cc, 0))
    .getValueOr(null);
}
