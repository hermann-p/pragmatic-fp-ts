import { Dictionary, Endomorphism, Mappable, MaybeType, Predicate } from "./types";
import { Maybe, maybe, nothing } from "./Maybe";
import { either } from "./Either";
import { getMonadValue } from "./tools";
import { isEmpty, isFunction, isNotEmpty, isSome } from "./predicates";
import * as m from "mori";
import { reduce } from "./array";

type KeyType = string | number;
type PathType = KeyType[] | Maybe<KeyType[]>;

// internal implementation detail, not exported
const getRaw = <T>(key: KeyType, path: Array<KeyType>, obj: Maybe<Dictionary>): Maybe<T> => {
  const value = obj.bind((input: Dictionary) => input[key]);
  return isEmpty(path) ? (value as Maybe<T>) : getRaw(path[0], path.slice(1), value);
};

// get prop at path in object: get(["foo","bar"])({foo: {bar: 1}}) -> 1
export const getIn = (path: PathType) => <T extends Dictionary, U>(
  container: MaybeType<T>
): Maybe<U> => {
  try {
    const pathValue: KeyType[] = getMonadValue<KeyType[]>(path);
    return getRaw(pathValue[0], pathValue.slice(1), maybe(container));
  } catch {
    return nothing();
  }
};

// get prop of object: get("foo")({foo: 1}) -> 1
export const get = <T extends Dictionary, U>(prop: KeyType) => (obj: MaybeType<T>) =>
  maybe(obj).bind<U>((o) => (o as any)[prop]);

// get array of object keys
export const keys = <T extends Dictionary>(obj: MaybeType<T>): Maybe<string[]> =>
  maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.keys(o))
    .filter(isNotEmpty);

// get array of object values
export const values = <T extends Dictionary>(obj: MaybeType<T>): Maybe<unknown[]> =>
  maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.values(o))
    .filter(isNotEmpty);

// Transform field names by fn: mapKeys(toUpperCase)({foo:1,bar:2}) -> {FOO:1,BAR:2}
export const mapKeys = <T extends Dictionary, U extends Dictionary>(fn: Endomorphism<string>) => (
  obj: MaybeType<T>
): Maybe<U> =>
  isFunction(fn)
    ? maybe(obj)
        .filter((o) => !(o instanceof Array) && typeof o !== "string")
        .bind((o) => {
          const _keys = keys(o).getValue();
          return _keys.reduce((accum: any, key) => {
            accum[fn(key)] = o[key];
            return accum;
          }, {} as U);
        })
    : nothing();

// Reduce over keys and values of an object at the same time.
//   reduceKV(reducer)(initialValue)(object)
export const reduceKV = <T extends Dictionary, U>(
  reducer: (accum: U, key: string, value: any) => U
) => (initialValue: U) => (dict: MaybeType<T>) =>
  maybe(dict)
    .bind((d) =>
      Object.keys(d).reduce(
        (accum: U, key: string) => reducer(accum, key, (dict as any)[key]),
        initialValue
      )
    )
    .filter(isSome);

// Pick fields from an object if the field name suffices the predicate, synonym to filterKeys
export const pickBy = <T extends Dictionary, U extends Dictionary>(
  predicate: Predicate<string>
) => (obj: MaybeType<T>) =>
  maybe(obj)
    .bind(keys)
    .bind((k: string[]) => k.filter(predicate))
    .filter(isNotEmpty)
    .bind((_keys: string[]) =>
      _keys.reduce((accum: Dictionary, key: string) => {
        accum[key] = getMonadValue(obj)[key];
        return accum;
      }, {} as U)
    );
// Pick fields from an object if the field name suffices the predicate, synonym for pickBy
export const filterKeys = pickBy;

// pick fields from an object by name
export const pick = <T extends Dictionary, U extends Dictionary>(
  keysToPick: MaybeType<KeyType[]>
) => (dict: MaybeType<T>) =>
  maybe(dict)
    .bind(
      (d) =>
        reduce((result: Dictionary, key: KeyType) => {
          result[key] = d[key];
          return result;
        })({} as U)(keysToPick) as Maybe<U>
    )
    .filter(isNotEmpty);

// pick fields from an object if their values suffice the predicate
export const pickValuesBy = <T extends Dictionary, U extends Dictionary>(
  predicate: Predicate<any>
) => (dict: T): Maybe<U> =>
  maybe(Object.keys(dict))
    .bind<any>(
      reduce((result: U, key: string) => {
        if (predicate(dict[key])) {
          (result as Dictionary)[key] = dict[key];
        }
        return result;
      })({} as U)
    )
    .filter(isNotEmpty) as Maybe<U>;

// create a new object with fn applied to all the object's fields
export const mapValues = <T extends Dictionary, U extends Dictionary, A, B>(fn: Mappable<A, B>) => (
  obj: MaybeType<T>
): Maybe<U> =>
  isFunction(fn)
    ? maybe(obj).bind((o) => {
        const _keys = keys(o).getValue();
        return _keys.reduce((accum, key) => {
          const value = either(o[key])
            .bind(fn)
            .getValueOr(o[key]);
          (accum as Dictionary)[key] = value;
          return accum;
        }, {} as U);
      })
    : nothing();

// Create a new object with fn applied to all the object's
// fields. Remove fields for which fn returned Nothing/nil
export const mapFilterValues = <T extends Dictionary, U extends Dictionary, A, B>(
  fn: Mappable<A, B>
) => (obj: MaybeType<T>): Maybe<U> =>
  isFunction(fn)
    ? maybe(obj).bind((o) => {
        const _keys = keys(o).getValue();
        return _keys.reduce((accum, key) => {
          const value = either(o[key])
            .bind(fn)
            .getValueOr(undefined as any);
          (accum as Dictionary)[key] = value;
          return accum;
        }, {} as U);
      })
    : nothing();

// set field propName to value: assoc("foo")(1)({bar:2}) -> {foo:1, bar:2}
export function assoc<O extends Dictionary, T>(
  propName: KeyType
): (value: MaybeType<T>) => (dict: MaybeType<O>) => Maybe<O>;
export function assoc<T>(key: number): (value: T) => (arr: MaybeType<T[]>) => Maybe<T[]>;

export function assoc<T>(propName: any) {
  return (value: MaybeType<T>) => (target: MaybeType<any>) =>
    maybe(target)
      .bind((obj) => m.assoc(m.toClj(obj), propName, getMonadValue(value)))
      .bind(m.toJs);
}

// set field at path to value: assocIn(["foo","bar"])(1)({}) -> {foo: {bar: 1}}
export const assocIn = <T extends Dictionary, U>(path: KeyType[]) => (value: MaybeType<U>) => (
  target: MaybeType<T>
): Maybe<T> =>
  maybe(target)
    .bind((obj) => m.assocIn(m.toClj(obj), path, getMonadValue(value)))
    .bind<T>(m.toJs);

// remove prop with name key from object
export const dissoc = <T extends Dictionary>(key: KeyType) => (value: MaybeType<T>): Maybe<T> =>
  maybe(m.toClj(value))
    .bind((o) => m.dissoc(o, key))
    .bind(m.toJs);

// apply fn to prop at propName
export const update = <T extends Dictionary, A, B>(propName: KeyType) => (fn: Mappable<A, B>) => (
  dict: MaybeType<T>
): Maybe<T> =>
  maybe(dict)
    .bind((input: unknown) => m.updateIn(m.toClj(input), [propName], fn))
    .bind(m.toJs);

// apply fn to prop at object path
export const updateIn = <T extends Dictionary, A, B>(path: KeyType[]) => (fn: Mappable<A, B>) => (
  dict: MaybeType<T>
): Maybe<T> =>
  maybe(dict)
    .bind((input: unknown) => m.updateIn(m.toClj(input), path, fn))
    .bind(m.toJs);

// create an object from key-value pairs
export const fromPairs = <T extends Dictionary>(pairs: MaybeType<unknown[][]>) =>
  (reduce((dict: T, [key, value]: unknown[]) => {
    (dict as Dictionary)[key as string] = value;
    return dict;
  })({} as T)(pairs) as Maybe<T>).filter(isNotEmpty);

// create key-value pairs from the field of an object
export const toPairs = <T extends Dictionary>(dict: T) =>
  maybe(dict)
    .bind((d) => {
      const ks = Object.keys(d);
      const vs = Object.values(d);

      return ks.map((key, idx) => [key, vs[idx]]);
    })
    .filter(isNotEmpty);
