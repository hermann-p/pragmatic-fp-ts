import { isFunction, isNil } from "./predicates";
import { Monad } from "./Monad";

export const getMonadValue = <T>(input: Monad<T> | T, alternate?: T): T => {
  if (isNil(input)) {
    throw new Error("Can not get value of " + input);
  } else if (isFunction((input as Monad<T>).getValue)) {
    return typeof alternate === "undefined"
      ? (input as Monad<T>).getValue()
      : (input as Monad<T>).getValueOr(alternate);
  } else {
    return input as T;
  }
};
