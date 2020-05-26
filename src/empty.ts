import { chain, isChain, isMaybe, nothing } from "./main";

export function empty<T>(val: T): T {
  return typeof val === "string"
    ? ""
    : val instanceof Array
    ? []
    : isMaybe(val)
    ? nothing()
    : isChain(val)
    ? chain(null)
    : val instanceof Function
    ? () => undefined
    : val instanceof Object
    ? (val as any).empty instanceof Function
      ? (val as any).empty()
      : {}
    : (null as any);
}
