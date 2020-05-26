import { Dictionary, getValueOr, isEmpty, isNil } from "./main";

const checkIfPathExists = (path: ObjKey[], obj: any): boolean =>
  isEmpty(path)
    ? !isNil(obj)
    : isEmpty(obj)
    ? false
    : checkIfPathExists(path.slice(1), obj[path[0]]);

type ObjKey = string | number;
export function hasIn(path: ObjKey[], dict: Dictionary): boolean;
export function hasIn(path: ObjKey[]): (dict: Dictionary) => boolean;

export function hasIn(path: ObjKey[], dict?: Dictionary) {
  if (arguments.length === 1) {
    return (_dict: Dictionary) => hasIn(path, _dict);
  }

  const thePath = getValueOr([], path);
  const theDict = getValueOr({}, dict);

  if (isEmpty(thePath) || isEmpty(theDict)) {
    return false;
  }
  return checkIfPathExists(thePath, theDict);
}
