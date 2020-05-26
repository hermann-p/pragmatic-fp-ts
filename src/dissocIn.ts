import mori from "mori";
import { chain, getValue, getValueOr } from "./main";

// dissociates an element somewhere within a path

type Lens = string[];
export function dissocIn<A extends {} | any[]>(path: Lens, dict: A): A;
export function dissocIn(path: Lens): <A extends {}>(dict: A) => A;

export function dissocIn<A extends {}>(path: Lens, dict?: A) {
  if (arguments.length === 1) {
    return (theDict: A) => dissocIn(path, theDict);
  }

  const thePath = getValue(path);
  const pathPrefix = thePath.slice(0, thePath.length - 1);
  const prop = thePath[thePath.length - 1];
  const theDict = getValueOr({} as any, dict);

  return chain(theDict)
    .bind(mori.toClj)
    .bind((d) =>
      mori.updateIn(d, mori.toClj(pathPrefix), (el: any) =>
        mori.dissoc(el, prop)
      )
    )
    .bind(mori.toJs)
    .getValue();
}
