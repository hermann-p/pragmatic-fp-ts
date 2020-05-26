import mori from "mori";
import { chain, getValue, getValueOr } from "./main";

// Removes a key from an object

export function dissoc<A extends {}, K extends keyof A>(
  propName: K,
  dict: A
): Omit<A, K>;
export function dissoc<K extends string>(
  propName: K
): <A extends {}>(dict: A) => Omit<A, K>;

export function dissoc<A extends {}, K extends keyof A>(propName: K, dict?: A) {
  if (arguments.length === 1) {
    return (theDict: A) => dissoc(propName, theDict);
  }

  const thePropName = getValue(propName);
  const theDict = getValueOr({} as any, dict);

  return chain(theDict)
    .bind(mori.toClj)
    .bind((d) => mori.dissoc(d, thePropName))
    .bind(mori.toJs)
    .getValue();
}
