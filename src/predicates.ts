import { Either, Left, Right } from "./Either";
import { equals } from "./logic";
import { Just, maybe, Maybe, Nothing } from "./Maybe";
import { Monad } from "./Monad";
import { reduceKV } from "./object";
import { getMonadValue } from "./tools";
import { Dictionary, MaybeType, Predicate } from "./types";

export const isNil: Predicate<unknown> = (value) => value === undefined || value === null;

export const isFunction: Predicate<unknown> = (value): value is Function =>
  typeof value === "function";

export const isString: Predicate<unknown> = (value): value is string => typeof value === "string";

export const isArray: Predicate<unknown> = (value): value is unknown[] => value instanceof Array;

export const isNumber: Predicate<unknown> = (value): value is number =>
  typeof value === "number" && !isNaN(value);

export const isObject: Predicate<unknown> = (value): value is object =>
  typeof value === "object" && !isArray(value);

export const isEmpty: Predicate<Array<unknown> | Object | string> = (coll): boolean =>
  isNil(coll)
    ? false
    : (isArray(coll) && (coll as Array<unknown>).length === 0) ||
      (isObject(coll) && Object.keys(coll).length === 0) ||
      (isString(coll) && (coll as string) === "");

export const isNotEmpty: Predicate<Array<unknown> | Object | string> = (coll): boolean =>
  !isEmpty(coll);

export const isJust: Predicate<unknown> = (value): value is Maybe<unknown> => value instanceof Just;
export const isNothing: Predicate<unknown> = (value): value is Maybe<unknown> =>
  value instanceof Nothing;
export const isMaybe: Predicate<unknown> = (value): value is Maybe<unknown> =>
  isJust(value) || isNothing(value);

export const isRight: Predicate<unknown> = (value): value is Either<unknown, unknown> =>
  value instanceof Right;
export const isLeft: Predicate<unknown> = (value): value is Either<unknown, unknown> =>
  value instanceof Left;
export const isEither: Predicate<unknown> = (value): value is Either<unknown, unknown> =>
  isLeft(value) || isRight(value);

export const isMonad: Predicate<unknown> = (value): value is Monad<unknown> =>
  isMaybe(value) || isEither(value);

export const isSome: Predicate<unknown> = (value) =>
  !isNil(value) && !isNothing(value) && !isLeft(value);

type WhereTemplate<T extends Dictionary> = { [k in keyof T]: Predicate<any> };
export const where = <T extends Dictionary>(template: MaybeType<WhereTemplate<T>>) => <U extends T>(
  dict: MaybeType<U>
): boolean => {
  try {
    const _dict = getMonadValue(dict);
    return maybe(template)
      .bind(
        reduceKV((accum: boolean, key: string, predicate) => {
          return accum && predicate(_dict[key]);
        })(true)
      )
      .getValueOr(false);
  } catch {
    return false;
  }
};

type WhereEqTemplate<T extends Dictionary> = { [k in keyof T]: unknown };
export const whereEq = <T extends Dictionary>(template: MaybeType<WhereEqTemplate<T>>) => <
  U extends Dictionary
>(
  dict: MaybeType<U>
): boolean => {
  try {
    const _dict = getMonadValue(dict);
    return reduceKV((accum: boolean, key: string, value) => accum && equals(_dict[key])(value))(
      true
    )(template).getValueOr(false);
  } catch {
    return false;
  }
};
