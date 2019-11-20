import { Dictionary } from "./types.d";
import { Maybe, maybe, nothing } from "./Maybe";
import { getMonadValue } from "./tools";
import { isEmpty } from "./predicates";

type KeyType = string | number;
type PathType = KeyType[] | Maybe<KeyType[]>;

const getRaw = <T>(key: KeyType, path: Array<KeyType>, obj: Maybe<Dictionary>): Maybe<T> => {
  const value = obj.bind((input: Dictionary) => input[key]);
  return isEmpty(path) ? (value as Maybe<T>) : getRaw(path[0], path.slice(1), value);
};

export const get = (path: PathType) => <T>(container: Dictionary | Maybe<Dictionary>): Maybe<T> => {
  try {
    const pathValue: KeyType[] = getMonadValue<KeyType[]>(path);
    return getRaw(pathValue[0], pathValue.slice(1), maybe(container));
  } catch {
    return nothing();
  }
};
