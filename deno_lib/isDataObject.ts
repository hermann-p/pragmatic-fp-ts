import { isArray } from "./isArray.ts";
import { isFunction } from "./isFunction.ts";
import { isNotNil } from "./isNil.ts";
import { values } from "./values.ts";

export const isDataObject = (x: unknown): boolean =>
  isNotNil(x) &&
  typeof x === "object" &&
  !isArray(x) &&
  values(x as any).every((prop) => !isFunction(prop));
