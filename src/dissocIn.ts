import { dissoc, getValue, getValueOr, updateIn } from "./main";

// dissociates an element somewhere within a path

type Path = (string | number)[];
export function dissocIn<A extends {} | any[]>(path: Path, dict: A): A;
export function dissocIn(path: Path): <A extends {}>(dict: A) => A;

export function dissocIn<A extends {}>(path: Path, dict?: A) {
  if (arguments.length === 1) {
    return (theDict: A) => dissocIn(path, theDict);
  }

  const thePath = getValue(path);
  const pathPrefix = thePath.slice(0, thePath.length - 1);
  const prop = thePath[thePath.length - 1];
  const theDict = getValueOr({} as any, dict);

  return updateIn(pathPrefix, dissoc(prop as any) as any, theDict);
}
