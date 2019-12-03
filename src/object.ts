import { Dictionary, Isomorphism, Mappable, MaybeType, Predicate } from "./types";
import { Maybe, maybe, nothing } from "./Maybe";
import { either } from "./Either";
import { getMonadValue } from "./tools";
import { isEmpty, isFunction, isNotEmpty } from "./predicates";
import * as m from "mori";

type KeyType = string | number;
type PathType = KeyType[] | Maybe<KeyType[]>;

const getRaw = <T>(key: KeyType, path: Array<KeyType>, obj: Maybe<Dictionary>): Maybe<T> => {
  const value = obj.bind((input: Dictionary) => input[key]);
  return isEmpty(path) ? (value as Maybe<T>) : getRaw(path[0], path.slice(1), value);
};

export const getIn = (path: PathType) => <T>(
  container: Dictionary | Maybe<Dictionary>
): Maybe<T> => {
  try {
    const pathValue: KeyType[] = getMonadValue<KeyType[]>(path);
    return getRaw(pathValue[0], pathValue.slice(1), maybe(container));
  } catch {
    return nothing();
  }
};

export const get = <T>(prop: KeyType) => (obj: MaybeType<Dictionary>) =>
  maybe(obj).bind<T>((o) => (o as any)[prop]);

export const keys = (obj: MaybeType<Dictionary>): Maybe<string[]> =>
  maybe(obj)
    .filter((o) => typeof o !== "string") // because we don't want to allow dirty JS-tricks
    .bind((o) => Object.keys(o))
    .filter(isNotEmpty);

export const mapKeys = (fn: Isomorphism<string>) => (
  obj: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  isFunction(fn)
    ? maybe(obj)
        .filter((o) => !(o instanceof Array) && typeof o !== "string")
        .bind((o) => {
          const _keys = keys(o).getValue();
          return _keys.reduce((accum, key) => {
            accum[fn(key)] = o[key];
            return accum;
          }, {} as Dictionary);
        })
    : nothing();

export const pickBy = (predicate: Predicate<string>) => (obj: MaybeType<Dictionary>) =>
  maybe(obj)
    .bind(keys)
    .bind((k: string[]) => k.filter(predicate))
    .filter(isNotEmpty)
    .bind((_keys: string[]) =>
      _keys.reduce((accum: Dictionary, key: string) => {
        accum[key] = getMonadValue(obj)[key];
        return accum;
      }, {})
    );
export const filterKeys = pickBy;

export const mapValues = <A, B>(fn: Mappable<A, B>) => (
  obj: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  isFunction(fn)
    ? maybe(obj).bind((o) => {
        const _keys = keys(o).getValue();
        return _keys.reduce((accum, key) => {
          const value = either(o[key])
            .bind(fn)
            .getValueOr(o[key]);
          accum[key] = value;
          return accum;
        }, {} as Dictionary);
      })
    : nothing();

export const mapFilterValues = <A, B>(fn: Mappable<A, B>) => (
  obj: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  isFunction(fn)
    ? maybe(obj).bind((o) => {
        const _keys = keys(o).getValue();
        return _keys.reduce((accum, key) => {
          const value = either(o[key])
            .bind(fn)
            .getValueOr(undefined as any);
          accum[key] = value;
          return accum;
        }, {} as Dictionary);
      })
    : nothing();

export const assoc = <T>(propName: KeyType) => (value: MaybeType<T>) => (
  target: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  maybe(target)
    .bind((obj) => m.assoc(m.toClj(obj), propName, getMonadValue(value)))
    .bind(m.toJs);

export const assocIn = <T>(path: KeyType[]) => (value: MaybeType<T>) => (
  target: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  maybe(target)
    .bind((obj) => m.assoc(obj, path, getMonadValue(value)))
    .bind(m.toJS);

export const update = <A, B>(propName: KeyType) => (fn: Mappable<A, B>) => (
  dict: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  maybe(dict)
    .bind((input: unknown) => m.updateIn(m.toClj(input), [propName], fn))
    .bind(m.toJs);

export const updateIn = <A, B>(path: KeyType[]) => (fn: Mappable<A, B>) => (
  dict: MaybeType<Dictionary>
): Maybe<Dictionary> =>
  maybe(dict)
    .bind((input: unknown) => m.updateIn(m.toClj(input), path, fn))
    .bind(m.toJs);
