import { isFunction, isNil } from "./predicates";
import { Monad } from "./Monad";

export const getMonadValue = <T>(input: Monad<T> | T, alternate?: T): T => {
  if (isNil(input)) {
    return (null as any) as T;
  } else if (isFunction((input as Monad<T>).getValue)) {
    return typeof alternate === "undefined"
      ? (input as Monad<T>).getValue()
      : (input as Monad<T>).getValueOr(alternate);
  } else {
    return input as T;
  }
};
