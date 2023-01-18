import { Dictionary, getValueOr } from "./main.ts";

export function count(coll: any[] | Dictionary | string) {
  const theColl = getValueOr("", coll);

  return theColl instanceof Array || typeof theColl === "string"
    ? theColl.length
    : theColl instanceof Object
    ? Object.keys(theColl).length
    : 0;
}
