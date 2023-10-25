import { isArray } from "./isArray";
import { isFunction } from "./isFunction";
import { isNotNil } from "./isNil";
import { values } from "./values";

export const isDataObject = (x: unknown): boolean =>
  isNotNil(x) &&
  typeof x === "object" &&
  !isArray(x) &&
  values(x as any).every((prop) => !isFunction(prop));
