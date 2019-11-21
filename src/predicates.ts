import { Just, Nothing } from "./Maybe";
import { Left, Right } from "./Either";
import { Predicate } from "./types.d";

export const isNil: Predicate<any> = (value) => value === undefined || value === null;

export const isFunction: Predicate<any> = (value) => typeof value === "function";

export const isNaN: Predicate<any> = (value) => typeof value === "number" && window.isNaN(value);

export const isString: Predicate<any> = (value) => typeof value === "string";

export const isArray: Predicate<any> = (value) => value instanceof Array;

export const isNumber: Predicate<any> = (value) =>
  typeof value === "number" && !window.isNaN(value);

export const isObject: Predicate<any> = (value) => typeof value === "object" && !isArray(value);

export const isEmpty: Predicate<Array<any> | Object | string> = (coll): boolean =>
  isNil(coll)
    ? false
    : (isArray(coll) && (coll as Array<any>).length === 0) ||
      (isObject(coll) && Object.keys(coll).length === 0) ||
      (isString(coll) && (coll as string) === "");

export const isNotEmpty: Predicate<Array<any> | Object | string> = (coll): boolean =>
  !isEmpty(coll);

export const isJust: Predicate<any> = (value) => value instanceof Just;
export const isNothing: Predicate<any> = (value) => value instanceof Nothing;
export const isMaybe: Predicate<any> = (value) => isJust(value) || isNothing(value);

export const isRight: Predicate<any> = (value) => value instanceof Right;
export const isLeft: Predicate<any> = (value) => value instanceof Left;
export const isEither: Predicate<any> = (value) => isLeft(value) || isRight(value);

export const isMonad: Predicate<any> = (value) => isMaybe(value) || isEither(value);

export const isSome: Predicate<any> = (value) =>
  !isNil(value) && !isNothing(value) && !isLeft(value);
