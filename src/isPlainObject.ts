import { isArray } from "./isArray";
import { isFunction } from "./isFunction";
import { isNotNil } from "./isNil";
import { values } from "./values";

export const isPlainObject = (x: unknown): boolean =>
  isNotNil(x) &&
  typeof x === "object" &&
  !isArray(x) &&
  values(x).every((prop) => !isFunction(prop));
