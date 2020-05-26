import {
  Dictionary,
  getValue,
  isNil,
  isLeft,
  isNothing,
  MonadType,
} from "./main";

export function isEmpty(coll: MonadType<any[] | Dictionary | string>): boolean {
  const theColl = getValue(coll);

  return typeof coll === "number"
    ? false
    : isNothing(coll) || isNil(theColl) || isLeft(coll)
    ? true
    : coll instanceof Array || typeof coll === "string"
    ? coll.length === 0
    : Object.keys(theColl).length === 0;
}

export function isNotEmpty(
  coll: MonadType<any[] | Dictionary | string>
): boolean {
  return !isEmpty(coll);
}
