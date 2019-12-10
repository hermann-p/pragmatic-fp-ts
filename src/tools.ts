import { isFunction, isNil, isNumber } from "./predicates";
import { Monad } from "./Monad";
import { maybe } from "./Maybe";

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

export const toNumber = (value: unknown) =>
  maybe(value)
    .bind((v: unknown) => parseFloat(v as string))
    .filter(isNumber);

export const toInteger = (value: unknown) =>
  maybe(value)
    .bind((v: unknown) => parseInt(v as string, 10))
    .filter(isNumber);

export const toString = (value: unknown) => maybe(value).bind((v: any) => String(v));
