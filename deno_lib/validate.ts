import { all } from "./all.ts";
import { Either, isLeft, isRight, left, right } from "./Either.ts";
import { getValueOr } from "./getValueOr.ts";
import { isDataObject } from "./isDataObject.ts";
import { isFunction } from "./isFunction.ts";
import { isNil } from "./isNil.ts";
import { isNumber } from "./isNumber.ts";
import { isString } from "./isString.ts";
import { map } from "./map.ts";
import { values } from "./values.ts";

const nameProp = "__name";
type NameTag = { [key in typeof nameProp]: string };

export type ValidatorFn<T = any> = ((_: unknown) => _ is T) & NameTag;
export type Validator<T> = ((x: unknown) => Either<T>) & NameTag;
export type ValidatorType<V extends Validator<any>> = V extends Validator<infer T> ? T : never;

const typeName = (x: unknown): string =>
  Array.isArray(x) ? "array" : x === null ? "null object" : typeof x;

const typeError = (validator: NameTag | string, x: unknown) => {
  const expectedType = isString(validator) ? validator : getName(validator);
  const receivedType = typeName(x);
  return new Error(`expected ${expectedType}, got ${receivedType} ${x}`);
};

type ValidatorOptions = {
  decode?: boolean | ((_: string) => any);
};

const parseData = (x: unknown, decode: ValidatorOptions["decode"]) => {
  const parse = isFunction(decode)
    ? (decode as (_: string) => any)
    : decode === true
    ? (JSON.parse as (_: string) => any)
    : undefined;
  return isString(x) && parse ? parse(x) : x;
};

const Validator = <T>(
  validate: ValidatorFn<T>,
  { decode }: ValidatorOptions = { decode: false }
): Validator<T> =>
  assignName(getName(validate), (x: unknown) => {
    const xx = decode ? parseData(x, decode) : x;
    return validate(xx) ? right(xx as T) : left<T, Error>(typeError(validate, x));
  });

const assignName = <T>(value: string, x: T): T & NameTag => {
  Object.defineProperty(x, nameProp, { value });
  return x as T & NameTag;
};
const getName = <T extends NameTag>(x: T): string => x[nameProp];

const joinArrayReasons = (coll: Either<any, Error>[]) => {
  const badValues = coll
    .reduce((msgs, m, idx) => {
      if (m.isLeft()) msgs.push(`${idx}: ${m.getReason()?.message}`);
      return msgs;
    }, [] as string[])
    .join(", ");
  return `[${badValues}]`;
};

const liftArray = <T>(coll: Array<Either<T, Error>>): Either<T[], Error> =>
  all(isRight, coll) ? right(coll.map(liftValue)) : left(new Error(joinArrayReasons(coll)));

const liftValue = (v: any) =>
  Array.isArray(v) ? liftArray(v) : isDataObject(v) ? liftRecord(v) : getValueOr(undefined, v);
const joinRecordReasons = (coll: [string, Either<any, Error>][]) => {
  const badFields = coll
    .reduce((msgs, [key, value]) => {
      if (isLeft(value)) msgs.push(`${key}: ${value.getReason()?.message}`);
      return msgs;
    }, [] as string[])
    .join(", ");
  return `{${badFields}}`;
};

const liftRecord = <T extends Record<string, any>>(data: {
  [key in keyof T]: Either<T[key]>;
}): Either<T, Error> =>
  all(isRight, values(data as any))
    ? right<any, Error>(map(liftValue, data as unknown as Record<string, Either<any, Error>>))
    : left<any, Error>(
        new Error(joinRecordReasons(Object.entries(data as unknown as Either<any, Error>[])))
      );

const array = <T>(validate: Validator<T>) => {
  const contentType = `Array<${getName(validate as any)}>`;
  return assignName(
    contentType,
    (x: unknown): Either<T[], Error> =>
      Array.isArray(x) ? liftValue(x.map(validate)) : left(typeError(contentType, x))
  );
};

const record = <T extends Record<string, any>>(schema: {
  [key in keyof T]: Validator<T[key]>;
}): Validator<T> => {
  const recordDataType = Object.entries(schema)
    .map(([k, v]) => `${k}: ${getName(v)}`)
    .join(", ");
  const recordType = `Record<{${recordDataType}}>`;
  return assignName(recordType, (x: unknown): Either<T, Error> => {
    const validateRecord = (y: any) =>
      Object.fromEntries(Object.entries(schema).map(([k, decode]) => [k, decode(y[k])]));

    return isDataObject(x) ? liftValue(validateRecord(x)) : left(typeError(recordType, x));
  });
};

const dictionary = <T>(decode: ValidatorFn<T>): Validator<Record<string, T>> => {
  const dictType = `Dictionary<${getName(decode)}>`;
  return assignName(dictType, (x: unknown): Either<Record<string, T>> => {
    const decodeDict = (o: any) =>
      Object.fromEntries(Object.entries(o).map(([k, v]) => [k, decode(v)]));
    return isDataObject(x) ? liftValue(decodeDict(x)) : left(typeError(dictType, x));
  });
};

export const from = <T>(name: string, validate: (_: unknown) => _ is T) =>
  Validator(assignName(name, validate));

const any: Validator<any> = from("any", (_: unknown): _ is any => true);
const unknown: Validator<unknown> = from("unknown", (_: unknown): _ is unknown => true);
const string: Validator<string> = from("string", isString);
const number: Validator<number> = from("number", isNumber);
const null_: Validator<null> = from("null", (x: unknown): x is null => x === null);
const undefined_: Validator<undefined> = from(
  "undefined",
  (x: unknown): x is undefined => x === undefined
);
const bool: Validator<boolean> = from(
  "boolean",
  (x: unknown): x is boolean => x === true || x === false
);

const nil: Validator<null | undefined> = from("nil", isNil);
const dateString: Validator<string> = from(
  "ISO date string",
  (x: unknown): x is string => isString(x) && String(new Date(x)) !== "Invalid Date"
);

const enum_ = <T>(allowed: Array<T>, name = `one of [${allowed.join(",")}]`): Validator<T> => {
  const lookup = new Set<any>(allowed);
  return from(name ?? `one of [${allowed.join(",")}]`, (x: unknown): x is T => lookup.has(x));
};

const oneOf = <T>(...args: Array<Validator<T>>): Validator<T> => {
  const typeNames = args.map(getName).join(" | ");
  return from(`[${typeNames}]`, (x: unknown): x is T => args.some((test) => test(x).isRight()));
};

const optional = <T>(type_: Validator<T>) => oneOf<T | undefined>(type_, undefined_);
const nullable = <T>(type_: Validator<T>) => oneOf<T | null>(type_, null_);

export default {
  from,
  any,
  array,
  boolean: bool,
  dateString: dateString,
  dictionary,
  enum: enum_,
  nil,
  number,
  null: null_,
  nullable,
  oneOf,
  optional,
  record,
  string,
  undefined: undefined_,
  unknown,
};
