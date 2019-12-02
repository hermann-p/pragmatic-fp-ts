import { Just, Nothing, Maybe } from "./Maybe";
import { Left, Right, Either } from "./Either";
import { Monad } from "./Monad";
import { Predicate } from "./types";

export const isNil: Predicate<unknown> = (value) => value === undefined || value === null;

export const isFunction: Predicate<unknown> = (value): value is Function =>
  typeof value === "function";

export const isNaN: Predicate<unknown> = (value) =>
  typeof value === "number" && window.isNaN(value);

export const isString: Predicate<unknown> = (value): value is string => typeof value === "string";

export const isArray: Predicate<unknown> = (value): value is unknown[] => value instanceof Array;

export const isNumber: Predicate<unknown> = (value): value is number =>
  typeof value === "number" && !window.isNaN(value);

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

// export const isRightAsync: Predicate<unknown> = (value): value is EitherAsync<unknown, unknown> =>
//   value instanceof RightAsync;
// export const isLeftAsync: Predicate<unknown> = (value): value is EitherAsync<unknown, unknown> =>
//   value instanceof LeftAsync;
// export const isEitherAsync: Predicate<unknown> = (value): value is EitherAsync<unknown, unknown> =>
//   isLeftAsync(value) || isRightAsync(value);

// export const isJustAsync: Predicate<unknown> = (value): value is MaybeAsync<unknown> =>
//   value instanceof JustAsync;
// export const isNothingAsync: Predicate<unknown> = (value): value is MaybeAsync<unknown> =>
//   value instanceof NothingAsync;
// export const isMaybeAsync: Predicate<unknown> = (value): value is MaybeAsync<unknown> =>
//   isJustAsync(value) || isNothingAsync(value);

export const isMonad: Predicate<unknown> = (value): value is Monad<unknown> =>
  isMaybe(value) || isEither(value);

export const isSome: Predicate<unknown> = (value) =>
  !isNil(value) && !isNothing(value) && !isLeft(value);
